import { env } from '../config/env.js';

/**
 * Send a simple text message using the WhatsApp Cloud API.
 * @param {string} to - The recipient's phone number (with country code).
 * @param {string} text - The message text.
 * @returns {Promise<Object>} The API response payload.
 */
export const sendWhatsAppTextMessage = async (to, text) => {
  const {
    WHATSAPP_API_VERSION,
    WHATSAPP_PHONE_NUMBER_ID,
    WHATSAPP_ACCESS_TOKEN,
  } = env;

  if (!WHATSAPP_ACCESS_TOKEN || !WHATSAPP_PHONE_NUMBER_ID) {
    throw new Error('WhatsApp environment variables are missing');
  }

  const url = `https://graph.facebook.com/${WHATSAPP_API_VERSION}/${WHATSAPP_PHONE_NUMBER_ID}/messages`;

  const payload = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: to,
    type: 'text',
    text: {
      preview_url: false,
      body: text,
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    console.log(`[WhatsApp] Reply API status: ${response.status}`);
    console.log(`[WhatsApp] Reply API response:`, JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error('[WhatsApp] Complete error response:', JSON.stringify({
        status: response.status,
        'response.data': data,
        'response.data.error': data.error,
        'error.code': data.error?.code,
        'error.message': data.error?.message
      }, null, 2));
      throw new Error(data.error?.message || 'Failed to send WhatsApp message');
    }

    return data;
  } catch (error) {
    if (!error.message || (!error.message.includes('Failed to send') && !error.message.includes(error.message))) {
       console.error('[WhatsApp] Complete error response:', JSON.stringify({
        'error.code': error.code,
        'error.message': error.message
      }, null, 2));
    }
    console.error('[WhatsApp] sendWhatsAppTextMessage failed:', error.message);
    throw error;
  }
};
