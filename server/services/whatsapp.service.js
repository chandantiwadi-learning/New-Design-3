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

    if (!response.ok) {
      console.error('[WhatsApp] Meta API Error:', data);
      throw new Error(data.error?.message || 'Failed to send WhatsApp message');
    }

    return data;
  } catch (error) {
    console.error('[WhatsApp] sendWhatsAppTextMessage failed:', error.message);
    throw error;
  }
};
