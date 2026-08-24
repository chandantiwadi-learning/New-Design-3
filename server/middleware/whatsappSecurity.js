import crypto from 'crypto';
import { env } from '../config/env.js';

/**
 * Validates the X-Hub-Signature-256 header sent by Meta WhatsApp Cloud API.
 */
export const verifyWhatsAppSignature = (req, res, next) => {
  const signature = req.headers['x-hub-signature-256'];

  if (!signature) {
    console.warn('[WhatsApp] Webhook missing x-hub-signature-256 header');
    return res.status(403).send('Signature missing');
  }

  // req.rawBody must be populated by express.json({ verify: ... }) in server.js
  if (!req.rawBody) {
    console.error('[WhatsApp] req.rawBody is missing. Cannot verify webhook signature.');
    return res.status(500).send('Server configuration error');
  }

  try {
    const signatureHash = signature.replace('sha256=', '');
    const expectedHash = crypto
      .createHmac('sha256', env.META_APP_SECRET)
      .update(req.rawBody)
      .digest('hex');

    // Secure constant-time comparison
    const signatureBuffer = Buffer.from(signatureHash, 'utf-8');
    const expectedBuffer = Buffer.from(expectedHash, 'utf-8');

    if (signatureBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(signatureBuffer, expectedBuffer)) {
      console.warn('[WhatsApp] Webhook signature mismatch. Potential tampering.');
      return res.status(403).send('Invalid signature');
    }

    next();
  } catch (error) {
    console.error('[WhatsApp] Webhook signature verification error:', error.message);
    return res.status(403).send('Signature validation failed');
  }
};
