import express from 'express';
import { validateEnquiry } from '../validators/enquiry.validator.js';
import { submitEnquiry, getEnquiries, updateEnquiry } from '../controllers/enquiry.controller.js';
import { enquiryRateLimiter } from '../middleware/security.js';
import { env } from '../config/env.js';
import { requireAdmin, requireSuperAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/config', (req, res) => {
  res.json({
    turnstileSiteKey: process.env.TURNSTILE_SITE_KEY || '1x00000000000000000000AA', // fallback test key if missing
  });
});

router.post('/', enquiryRateLimiter, validateEnquiry, submitEnquiry);

// Admin routes
router.get('/', requireAdmin, getEnquiries);
router.put('/:id', requireAdmin, requireSuperAdmin, updateEnquiry);

export default router;
