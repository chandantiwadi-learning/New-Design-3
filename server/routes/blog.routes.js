import express from 'express';
import { getAllBlogs, getBlogBySlug } from '../controllers/blog.controller.js';

const router = express.Router();

// Public routes
router.get('/', getAllBlogs);
router.get('/:slug', getBlogBySlug);

export default router;
