import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import { getImageUrl } from '../../utils/imageUrl';
import AdminBlogForm from './AdminBlogForm';

const AdminDashboard = ({ activeTab, setActiveTab }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingBlog, setEditingBlog] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await api.get('/blogs');
      if (response.data?.success && Array.isArray(response.data?.data)) {
        setBlogs(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching blogs in dashboard:', error);
      toast.error('Failed to load blog posts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filter blogs by search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateNew = () => {
    setEditingBlog(null);
    setActiveTab('create');
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setActiveTab('create');
  };

  const confirmDelete = (blog) => {
    setBlogToDelete(blog);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!blogToDelete) return;

    try {
      setDeletingId(blogToDelete.id);
      const response = await api.delete(`/admin/blogs/${blogToDelete.id}`);
      if (response.data?.success) {
        toast.success('Blog post deleted successfully.');
        setBlogs((prev) => prev.filter((b) => b.id !== blogToDelete.id));
      }
    } catch (error) {
      console.error('Delete error:', error);
      toast.error(error.response?.data?.message || 'Failed to delete blog post.');
    } finally {
      setDeletingId(null);
      setShowDeleteModal(false);
      setBlogToDelete(null);
    }
  };

  const handleFormSuccess = () => {
    setEditingBlog(null);
    setActiveTab('blogs');
    fetchBlogs();
  };

  if (activeTab === 'create') {
    return (
      <AdminBlogForm 
        initialBlog={editingBlog}
        onSuccess={handleFormSuccess}
        onCancel={() => {
          setEditingBlog(null);
          setActiveTab('blogs');
        }}
      />
    );
  }

  return (
    <div className="space-y-8">
      {/* Top Banner & Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Published Blogs</p>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-1">{blogs.length}</h3>
          </div>
          <div className="w-12 h-12 bg-[#0D8BC5]/10 text-[#0D8BC5] rounded-xl flex items-center justify-center text-xl font-bold">
            📝
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Storage Format</p>
            <h3 className="text-xl font-extrabold text-gray-900 mt-1">Local JSON File</h3>
            <p className="text-[11px] text-gray-400 mt-0.5">server/data/blogs.json</p>
          </div>
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl font-bold">
            💾
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Admin Session</p>
            <h3 className="text-sm font-extrabold text-gray-900 mt-1 truncate max-w-[180px]">
              chandan110906@gmail.com
            </h3>
            <span className="inline-block mt-1 bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase">
              Authenticated (HttpOnly JWT)
            </span>
          </div>
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-xl font-bold">
            🛡️
          </div>
        </motion.div>
      </div>

      {/* Main Content Box: Search Bar & All Blogs Table */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">All Blog Posts</h2>
            <p className="text-xs text-gray-500 mt-1">Manage, edit, or delete published blog articles.</p>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            {/* Search Box */}
            <div className="relative w-full sm:w-64">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search blogs by title..."
                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D8BC5] focus:bg-white transition-all"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <button
              onClick={handleCreateNew}
              className="px-5 py-2.5 bg-[#0a192f] hover:bg-[#0D8BC5] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <span>+</span>
              <span>Create Blog</span>
            </button>
          </div>
        </div>

        {/* Table / List */}
        {loading ? (
          <div className="py-16 text-center">
            <div className="w-8 h-8 border-4 border-[#0D8BC5] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Loading Blogs...</span>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="py-16 text-center bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-gray-500 font-semibold text-sm">
              {searchQuery ? `No blog posts matching "${searchQuery}"` : 'No blog posts found.'}
            </p>
            {!searchQuery && (
              <button
                onClick={handleCreateNew}
                className="mt-4 px-6 py-2.5 bg-[#0D8BC5] text-white text-xs font-bold uppercase rounded shadow hover:bg-[#0a192f] transition-colors"
              >
                Create First Blog
              </button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-[11px] font-extrabold uppercase tracking-wider text-gray-400 bg-gray-50/50">
                  <th className="py-3 px-4">Image</th>
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Reading Time</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="w-14 h-10 rounded-lg overflow-hidden border border-gray-200 bg-gray-100 shrink-0">
                        {blog.image ? (
                          <img src={getImageUrl(blog.image)} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">No img</div>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-900 max-w-xs md:max-w-md truncate">
                      {blog.title}
                      <span className="block text-[11px] text-gray-400 font-mono font-normal">/blog/{blog.slug}</span>
                    </td>
                    <td className="py-3 px-4 text-xs text-gray-600 font-medium whitespace-nowrap">
                      {blog.date}
                    </td>
                    <td className="py-3 px-4 text-xs text-gray-500 whitespace-nowrap">
                      {blog.readingTime || '1 min read'}
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => handleEdit(blog)}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-[#0D8BC5] hover:text-white text-gray-700 font-bold text-xs rounded-lg transition-colors mr-2 cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => confirmDelete(blog)}
                        className="px-3 py-1.5 bg-red-50 hover:bg-red-600 hover:text-white text-red-600 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* Confirmation Modal */}
      {showDeleteModal && blogToDelete && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100"
          >
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">Delete Blog Post?</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Are you sure you want to delete <span className="font-bold text-gray-900">"{blogToDelete.title}"</span>? This will remove the post entry from <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">blogs.json</code> and delete its uploaded image.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setBlogToDelete(null);
                }}
                className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deletingId === blogToDelete.id}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors flex items-center cursor-pointer disabled:opacity-50"
              >
                {deletingId === blogToDelete.id ? 'Deleting...' : 'Yes, Delete Post'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
