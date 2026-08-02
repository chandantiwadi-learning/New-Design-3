import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '../data/blogs.json');
const UPLOADS_DIR = path.join(__dirname, '..');

/**
 * Reads all blogs from JSON file.
 * Returns array of blogs sorted newest first by createdAt.
 */
export const getBlogs = async () => {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const blogs = JSON.parse(data);
    return blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
      return [];
    }
    console.error('Error reading blogs.json:', error);
    return [];
  }
};

/**
 * Saves array of blogs to JSON file.
 */
export const saveBlogs = async (blogs) => {
  await fs.writeFile(DATA_FILE, JSON.stringify(blogs, null, 2), 'utf-8');
};

/**
 * Finds a blog by slug.
 */
export const getBlogBySlug = async (slug) => {
  const blogs = await getBlogs();
  return blogs.find((b) => b.slug === slug) || null;
};

/**
 * Finds a blog by ID.
 */
export const getBlogById = async (id) => {
  const blogs = await getBlogs();
  return blogs.find((b) => b.id === id) || null;
};

/**
 * Creates a new blog post.
 */
export const createBlog = async (newBlog) => {
  const blogs = await getBlogs();
  
  // Ensure unique slug
  let baseSlug = newBlog.slug;
  let uniqueSlug = baseSlug;
  let counter = 1;
  while (blogs.some((b) => b.slug === uniqueSlug)) {
    uniqueSlug = `${baseSlug}-${counter}`;
    counter++;
  }
  newBlog.slug = uniqueSlug;

  blogs.unshift(newBlog);
  await saveBlogs(blogs);
  return newBlog;
};

/**
 * Updates an existing blog post.
 */
export const updateBlog = async (id, updatedFields) => {
  const blogs = await getBlogs();
  const index = blogs.findIndex((b) => b.id === id);
  if (index === -1) return null;

  const existingBlog = blogs[index];

  // If slug is updated, ensure uniqueness among other blogs
  if (updatedFields.slug && updatedFields.slug !== existingBlog.slug) {
    let baseSlug = updatedFields.slug;
    let uniqueSlug = baseSlug;
    let counter = 1;
    while (blogs.some((b) => b.id !== id && b.slug === uniqueSlug)) {
      uniqueSlug = `${baseSlug}-${counter}`;
      counter++;
    }
    updatedFields.slug = uniqueSlug;
  }

  // Check if image was replaced and delete old image file if needed
  if (updatedFields.image && existingBlog.image && updatedFields.image !== existingBlog.image) {
    await deleteImageFile(existingBlog.image);
  }

  const updatedBlog = {
    ...existingBlog,
    ...updatedFields,
    updatedAt: new Date().toISOString(),
  };

  blogs[index] = updatedBlog;
  await saveBlogs(blogs);
  return updatedBlog;
};

/**
 * Deletes a blog post and its associated image file.
 */
export const deleteBlog = async (id) => {
  const blogs = await getBlogs();
  const blogToDelete = blogs.find((b) => b.id === id);
  if (!blogToDelete) return false;

  // Delete image file if stored under uploads
  if (blogToDelete.image) {
    await deleteImageFile(blogToDelete.image);
  }

  const filteredBlogs = blogs.filter((b) => b.id !== id);
  await saveBlogs(filteredBlogs);
  return true;
};

/**
 * Helper to delete an image file from the filesystem if relative path is inside uploads.
 */
export const deleteImageFile = async (imagePath) => {
  if (!imagePath || typeof imagePath !== 'string') return;
  
  // Only delete files in /uploads/blogs/
  if (imagePath.startsWith('/uploads/blogs/')) {
    const fullPath = path.join(UPLOADS_DIR, imagePath);
    try {
      await fs.unlink(fullPath);
    } catch (err) {
      if (err.code !== 'ENOENT') {
        console.error(`Failed to delete old image ${fullPath}:`, err);
      }
    }
  }
};
