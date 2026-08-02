import * as blogService from '../services/blog.service.js';
import { generateSlug } from '../utils/slugify.js';
import { calculateReadingTime } from '../utils/readingTime.js';

/**
 * GET /api/blogs
 * Fetch all blogs.
 */
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getBlogs();
    return res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve blog posts.',
    });
  }
};

/**
 * GET /api/blogs/:slug
 * Fetch single blog by slug.
 */
export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await blogService.getBlogBySlug(slug);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found.',
      });
    }

    return res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error(`Error fetching blog by slug ${req.params.slug}:`, error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve blog post.',
    });
  }
};

/**
 * POST /api/admin/blogs
 * Create new blog post (Protected).
 */
export const createBlog = async (req, res) => {
  try {
    const { title, slug: customSlug, shortDescription, content, image: imageUrl } = req.body;

    if (!title || !shortDescription || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title, short description, and content are required fields.',
      });
    }

    // Determine image path
    let imagePath = imageUrl || '';
    if (req.file) {
      imagePath = `/uploads/blogs/${req.file.filename}`;
    }

    // Generate slug, reading time, date, ID
    const slugToUse = generateSlug(customSlug || title);
    const readingTime = calculateReadingTime(content);
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    const newBlog = {
      id: `blog_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      title: title.trim(),
      slug: slugToUse,
      shortDescription: shortDescription.trim(),
      content: content.trim(),
      image: imagePath,
      date: formattedDate,
      readingTime,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
    };

    const created = await blogService.createBlog(newBlog);

    return res.status(201).json({
      success: true,
      message: 'Blog post published successfully.',
      data: created,
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create blog post.',
    });
  }
};

/**
 * PUT /api/admin/blogs/:id
 * Edit existing blog post (Protected).
 */
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug: customSlug, shortDescription, content, image: imageUrl } = req.body;

    const existingBlog = await blogService.getBlogById(id);
    if (!existingBlog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found.',
      });
    }

    const updatedFields = {};

    if (title !== undefined) updatedFields.title = title.trim();
    if (shortDescription !== undefined) updatedFields.shortDescription = shortDescription.trim();
    if (content !== undefined) {
      updatedFields.content = content.trim();
      updatedFields.readingTime = calculateReadingTime(content);
    }

    if (customSlug !== undefined || title !== undefined) {
      updatedFields.slug = generateSlug(customSlug || title || existingBlog.title);
    }

    if (req.file) {
      updatedFields.image = `/uploads/blogs/${req.file.filename}`;
    } else if (imageUrl !== undefined) {
      updatedFields.image = imageUrl;
    }

    const updated = await blogService.updateBlog(id, updatedFields);

    return res.status(200).json({
      success: true,
      message: 'Blog post updated successfully.',
      data: updated,
    });
  } catch (error) {
    console.error(`Error updating blog ${req.params.id}:`, error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update blog post.',
    });
  }
};

/**
 * DELETE /api/admin/blogs/:id
 * Delete blog post (Protected).
 */
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await blogService.deleteBlog(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Blog post deleted successfully.',
    });
  } catch (error) {
    console.error(`Error deleting blog ${req.params.id}:`, error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete blog post.',
    });
  }
};
