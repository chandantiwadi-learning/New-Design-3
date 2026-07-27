import express from 'express';
import { validateEnquiry } from '../validators/enquiry.validator.js';
import { submitEnquiry } from '../controllers/enquiry.controller.js';
import { enquiryRateLimiter } from '../middleware/security.js';
import { env } from '../config/env.js';

const router = express.Router();

router.get('/config', (req, res) => {
  res.json({
    turnstileSiteKey: process.env.TURNSTILE_SITE_KEY || '1x00000000000000000000AA', // fallback test key if missing
  });
});

router.post('/', enquiryRateLimiter, validateEnquiry, submitEnquiry);

export default router;
