import { Blog } from '../models/Blog.model.js';

/**
 * Gets all blogs from MongoDB.
 * Returns array of blogs sorted newest first.
 */
export const getBlogs = async () => {
  return await Blog.find({}).sort({ createdAt: -1 });
};

/**
 * Finds a blog by slug.
 */
export const getBlogBySlug = async (slug) => {
  return await Blog.findOne({ slug });
};

/**
 * Finds a blog by ID.
 */
export const getBlogById = async (id) => {
  return await Blog.findById(id);
};

/**
 * Creates a new blog post.
 */
export const createBlog = async (newBlog) => {
  // Ensure unique slug
  let baseSlug = newBlog.slug;
  let uniqueSlug = baseSlug;
  let counter = 1;
  while (await Blog.exists({ slug: uniqueSlug })) {
    uniqueSlug = `${baseSlug}-${counter}`;
    counter++;
  }
  newBlog.slug = uniqueSlug;

  const blog = new Blog(newBlog);
  await blog.save();
  return blog;
};

/**
 * Updates an existing blog post.
 */
export const updateBlog = async (id, updatedFields) => {
  const existingBlog = await Blog.findById(id);
  if (!existingBlog) return null;

  // If slug is updated, ensure uniqueness
  if (updatedFields.slug && updatedFields.slug !== existingBlog.slug) {
    let baseSlug = updatedFields.slug;
    let uniqueSlug = baseSlug;
    let counter = 1;
    while (await Blog.exists({ _id: { $ne: id }, slug: uniqueSlug })) {
      uniqueSlug = `${baseSlug}-${counter}`;
      counter++;
    }
    updatedFields.slug = uniqueSlug;
  }

  const updatedBlog = await Blog.findByIdAndUpdate(
    id,
    { $set: updatedFields },
    { new: true, runValidators: true }
  );
  return updatedBlog;
};

/**
 * Deletes a blog post.
 */
export const deleteBlog = async (id) => {
  const deleted = await Blog.findByIdAndDelete(id);
  return !!deleted;
};

