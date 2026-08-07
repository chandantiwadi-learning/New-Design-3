import express from 'express';
import { loginAdmin, logoutAdmin, checkAuth, requestOtp, resetPassword } from '../controllers/admin.controller.js';
import { createBlog, updateBlog, deleteBlog } from '../controllers/blog.controller.js';
import { requireAdmin } from '../middleware/auth.middleware.js';
import { uploadBlogImage } from '../middleware/upload.middleware.js';
import { otpRateLimiter } from '../middleware/security.js';

const router = express.Router();

// Auth routes
router.post('/login', loginAdmin);
router.post('/logout', logoutAdmin);
router.get('/me', requireAdmin, checkAuth);
router.post('/forgot-password', otpRateLimiter, requestOtp);
router.post('/reset-password', resetPassword);

// Protected Blog Management routes
router.post('/blogs', requireAdmin, uploadBlogImage, createBlog);
router.put('/blogs/:id', requireAdmin, uploadBlogImage, updateBlog);
router.delete('/blogs/:id', requireAdmin, deleteBlog);

export default router;
