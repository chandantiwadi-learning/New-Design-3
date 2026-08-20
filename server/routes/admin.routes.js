import express from 'express';
import { loginAdmin, logoutAdmin, checkAuth, requestOtp, verifyOtp, resetPassword } from '../controllers/admin.controller.js';
import { createBlog, updateBlog, deleteBlog } from '../controllers/blog.controller.js';
import { requireAdmin } from '../middleware/auth.middleware.js';
import { uploadBlogImage } from '../middleware/upload.middleware.js';
import { otpRateLimiter } from '../middleware/security.js';

const router = express.Router();

// Auth routes
router.post('/login', loginAdmin);
router.post('/logout', logoutAdmin);
router.get('/me', requireAdmin, checkAuth);
router.post('/forgot-password', (req, res, next) => {
  console.log('[PASSWORD RESET] /forgot-password route reached');
  next();
}, otpRateLimiter, requestOtp);
router.post('/verify-otp', verifyOtp);
router.post('/reset-password', resetPassword);

// Protected Blog Management routes
router.post('/blogs', requireAdmin, uploadBlogImage, createBlog);
router.put('/blogs/:id', requireAdmin, uploadBlogImage, updateBlog);
router.delete('/blogs/:id', requireAdmin, deleteBlog);

export default router;
