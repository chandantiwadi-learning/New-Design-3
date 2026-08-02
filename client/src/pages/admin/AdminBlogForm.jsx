import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import { getImageUrl } from '../../utils/imageUrl';

const generateSlug = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const calculateReadingTime = (text) => {
  if (!text) return '1 min read';
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
};

const AdminBlogForm = ({ initialBlog = null, onSuccess, onCancel }) => {
  const isEditing = Boolean(initialBlog && initialBlog.id);

  const [title, setTitle] = useState(initialBlog?.title || '');
  const [slug, setSlug] = useState(initialBlog?.slug || '');
  const [isSlugCustom, setIsSlugCustom] = useState(false);
  const [shortDescription, setShortDescription] = useState(initialBlog?.shortDescription || '');
  const [content, setContent] = useState(initialBlog?.content || '');
  
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialBlog?.image ? getImageUrl(initialBlog.image) : '');
  const [submitting, setSubmitting] = useState(false);

  // Auto-generate slug when title changes unless custom slug flag is set
  useEffect(() => {
    if (!isSlugCustom && !isEditing) {
      setSlug(generateSlug(title));
    }
  }, [title, isSlugCustom, isEditing]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSlugChange = (e) => {
    setSlug(generateSlug(e.target.value));
    setIsSlugCustom(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check size limit: 1 MB
    if (file.size > 1 * 1024 * 1024) {
      toast.error('Image file exceeds the 1 MB size limit. Please choose a smaller image.');
      e.target.value = '';
      return;
    }

    // Check allowed extension
    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowed.includes(file.mimetype) && !allowed.includes(file.type)) {
      toast.error('Invalid image format! Only JPG, JPEG, PNG, and WEBP formats are allowed.');
      e.target.value = '';
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !shortDescription.trim() || !content.trim()) {
      toast.error('Please fill in Title, Short Description, and Content.');
      return;
    }

    try {
      setSubmitting(true);
      const formData = new FormData();
      formData.append('title', title.trim());
      formData.append('slug', slug || generateSlug(title));
      formData.append('shortDescription', shortDescription.trim());
      formData.append('content', content.trim());

      if (imageFile) {
        formData.append('image', imageFile);
      } else if (initialBlog?.image) {
        formData.append('image', initialBlog.image);
      }

      let response;
      if (isEditing) {
        response = await api.put(`/admin/blogs/${initialBlog.id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        response = await api.post('/admin/blogs', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }

      if (response.data?.success) {
        toast.success(isEditing ? 'Blog updated successfully!' : 'Blog published successfully!');
        if (onSuccess) onSuccess(response.data.data);
      }
    } catch (error) {
      console.error('Submit error:', error);
      const msg = error.response?.data?.message || 'Failed to save blog post.';
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm"
    >
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Fill in the details below to {isEditing ? 'update your' : 'publish a new'} technical article.
          </p>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
        >
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Blog Title <span className="text-red-500">*</span>
          </label>
          <input 
            type="text"
            required
            value={title}
            onChange={handleTitleChange}
            placeholder="e.g. Guide to Selecting Fastener Material for Marine Environments"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D8BC5] focus:bg-white text-sm"
          />
        </div>

        {/* Slug */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
              URL Slug
            </label>
            <span className="text-[11px] text-gray-400">Auto-generated from title</span>
          </div>
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
            <span className="text-xs text-gray-400 font-mono select-none mr-1">/blog/</span>
            <input 
              type="text"
              value={slug}
              onChange={handleSlugChange}
              placeholder="url-friendly-slug"
              className="w-full bg-transparent text-gray-900 text-xs font-mono focus:outline-none"
            />
          </div>
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Short Description <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={3}
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            placeholder="A brief summary of the blog post for listings and SEO meta cards..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D8BC5] focus:bg-white text-sm"
          />
        </div>

        {/* Full Blog Content */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
              Full Blog Content <span className="text-red-500">*</span>
            </label>
            <span className="text-xs text-[#0D8BC5] font-bold">
              Reading Time: {calculateReadingTime(content)}
            </span>
          </div>
          <textarea
            required
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write complete blog post content here..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D8BC5] focus:bg-white text-sm leading-relaxed"
          />
        </div>

        {/* Featured Image Upload */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Featured Image (Max 1 MB - JPG, JPEG, PNG, WEBP)
          </label>

          <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-gray-50 border border-dashed border-gray-300 rounded-xl">
            {imagePreview ? (
              <div className="w-32 h-24 shrink-0 rounded-lg overflow-hidden border border-gray-200 bg-white relative">
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-32 h-24 shrink-0 rounded-lg border border-gray-200 bg-gray-100 flex flex-col items-center justify-center text-gray-400">
                <span className="text-2xl">📷</span>
                <span className="text-[10px] mt-1">No image</span>
              </div>
            )}

            <div className="flex-grow space-y-2 text-center sm:text-left">
              <input 
                type="file"
                accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                onChange={handleImageChange}
                className="block w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#0a192f] file:text-white hover:file:bg-[#0D8BC5] file:cursor-pointer transition-colors"
              />
              <p className="text-[11px] text-gray-500">
                Images must be under 1 MB. Uploading a new image replaces existing image file.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-gray-100 flex items-center justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-8 py-3 bg-[#0a192f] hover:bg-[#0D8BC5] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors flex items-center cursor-pointer disabled:opacity-50"
          >
            {submitting ? (
              <span className="flex items-center">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                Saving...
              </span>
            ) : (
              isEditing ? 'Update Blog' : 'Publish Blog'
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AdminBlogForm;
