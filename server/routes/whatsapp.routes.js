import express from 'express';
import { verifyWebhook, receiveWebhook } from '../controllers/whatsapp.controller.js';
import { verifyWhatsAppSignature } from '../middleware/whatsappSecurity.js';

const router = express.Router();

// GET endpoint for Meta webhook verification
router.get('/webhook', verifyWebhook);

// POST endpoint for receiving Meta WhatsApp messages
// Applies the signature verification middleware before the controller
router.post('/webhook', verifyWhatsAppSignature, receiveWebhook);

export default router;
