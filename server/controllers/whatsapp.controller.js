import { env } from '../config/env.js';
import { WhatsappSession } from '../models/WhatsappSession.model.js';
import { sendWhatsAppTextMessage } from '../services/whatsapp.service.js';

const WELCOME_MESSAGE = `Hello, thank you for reaching out to HEX INDIA Fasteners. We have received your inquiry and appreciate your interest. Our team will review your request and get in touch with you within 24 hours.`;

/**
 * Handles Meta Webhook Verification (GET)
 */
export const verifyWebhook = (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === env.WHATSAPP_WEBHOOK_VERIFY_TOKEN) {
      console.log('[WhatsApp] Webhook verified successfully');
      return res.status(200).send(challenge);
    } else {
      console.warn('[WhatsApp] Webhook verification failed: Invalid token');
      return res.sendStatus(403);
    }
  }
  
  return res.sendStatus(400);
};

/**
 * Handles Incoming WhatsApp Messages via Webhook (POST)
 */
export const receiveWebhook = async (req, res) => {
  // 1. Immediately acknowledge the webhook to Meta
  res.status(200).send('EVENT_RECEIVED');

  try {
    const { body } = req;

    if (body.object !== 'whatsapp_business_account') {
      return;
    }

    // Parse the payload (handles multiple entries if sent in batch)
    for (const entry of body.entry) {
      const changes = entry.changes;
      if (!changes || !changes.length) continue;

      for (const change of changes) {
        if (change.field !== 'messages') {
          continue;
        }
        
        if (change.value && change.value.messages) {
          const messages = change.value.messages;
          const phoneNumberId = change.value.metadata?.phone_number_id;

          for (const message of messages) {
            const customerPhone = message.from; // Customer's WhatsApp ID
            const messageId = message.id;       // Meta Message ID
            const messageType = message.type;   // text, image, document, etc.
            const incomingText = messageType === 'text' ? message.text?.body : '[non-text WhatsApp message]';

            console.log(`[WHATSAPP WEBHOOK] Incoming message received`);
            console.log(`[WHATSAPP WEBHOOK] Message ID: ${messageId}`);
            console.log(`[WHATSAPP WEBHOOK] Customer: ${customerPhone}`);
            console.log(`[WHATSAPP WEBHOOK] Type: ${messageType}`);
            console.log(`[WHATSAPP WEBHOOK] Text: ${incomingText}`);
            console.log(`[WHATSAPP WEBHOOK] Phone Number ID: ${phoneNumberId}`);

            // Skip processing non-user messages (e.g., system messages) safely
            if (!customerPhone || !messageId) {
              continue;
            }

            // Validate the incoming phone_number_id
            if (phoneNumberId !== env.WHATSAPP_PHONE_NUMBER_ID) {
              console.warn(`[WHATSAPP WEBHOOK] Phone Number ID mismatch. Got: ${phoneNumberId}`);
              continue;
            }

            // Check Idempotency and Session
            let session = await WhatsappSession.findOne({ customerPhone });

            if (session && session.processedMessageIds.includes(messageId)) {
              continue; // Skip already processed message
            }

            // Create new session if doesn't exist
            if (!session) {
              session = new WhatsappSession({
                customerPhone,
                hasReceivedWelcomeMessage: false,
                processedMessageIds: [],
              });
            }

            // Add message ID to prevent duplicate processing on retries
            session.processedMessageIds.push(messageId);

            // Send automated welcome response
            console.log(`[WHATSAPP BOT] Sending acknowledgement`);
            try {
              await sendWhatsAppTextMessage(customerPhone, WELCOME_MESSAGE);
              console.log(`[WHATSAPP BOT] Acknowledgement sent successfully`);
              
              // Mark as successfully sent
              session.hasReceivedWelcomeMessage = true;
            } catch (sendError) {
              console.error(`[WHATSAPP BOT] Failed to send acknowledgement`);
              console.error(sendError.message);
              // We do NOT set hasReceivedWelcomeMessage = true so we can retry on next message
            }

            // Save the session state
            await session.save();
          }
        }
      }
    }
  } catch (error) {
    console.error('[WhatsApp] Error processing webhook:', error);
    // Don't throw or crash; we already responded 200 OK
  }
};
