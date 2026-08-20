import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.slug?.toLowerCase().includes(searchQuery.toLowerCase())
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
        {/* Metric 1: Total Published Blogs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Published Blogs</p>
              <h3 className="text-3xl font-black text-slate-900 mt-2 tracking-tight">{blogs.length}</h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">Articles live on public site</p>
            </div>
            <div className="w-12 h-12 bg-sky-50 text-[#0D8BC5] rounded-xl flex items-center justify-center border border-sky-100 shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
            </div>
          </div>
        </motion.div>

        {/* Metric 2: MongoDB Atlas Status */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
          <div className="flex items-center justify-between">
            <div className="min-w-0 pr-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Database Storage</p>
              <h3 className="text-lg font-black text-slate-900 mt-2 flex items-center gap-2">
                <span>MongoDB Atlas</span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </h3>
              <p className="text-xs text-emerald-600 font-semibold mt-1 truncate">
                Cloud Cluster Connected
              </p>
            </div>
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center border border-emerald-100 shadow-sm shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
            </div>
          </div>
        </motion.div>

        {/* Metric 3: Admin Session Security */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
          <div className="flex items-center justify-between">
            <div className="min-w-0 pr-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Admin Security</p>
              <h3 className="text-base font-black text-slate-900 mt-2 truncate">
                Protected Portal
              </h3>
              <span className="inline-flex items-center gap-1.5 mt-1 bg-indigo-50 text-indigo-700 text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase border border-indigo-100">
                <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" /></svg>
                JWT + Cookie Verified
              </span>
            </div>
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center border border-indigo-100 shadow-sm shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content Box: Search Bar & All Blogs Table */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">All Blog Articles</h2>
            <p className="text-xs text-slate-500 mt-1">Manage, edit, or publish technical engineering posts for HEX INDIA.</p>
          </div>

          <div className="flex items-center gap-3.5 w-full sm:w-auto">
            {/* Search Box with proper padding & clear button */}
            <div className="relative w-full sm:w-72">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title..."
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D8BC5]/30 focus:border-[#0D8BC5] focus:bg-white transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              )}
            </div>

            {/* Create Blog Action */}
            <button
              onClick={handleCreateNew}
              className="px-5 py-2.5 bg-[#0a192f] hover:bg-[#0D8BC5] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg shadow-black/10 transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
              <span>Create Blog</span>
            </button>
          </div>
        </div>

        {/* Table / List */}
        {loading ? (
          <div className="py-20 text-center">
            <div className="w-9 h-9 border-3 border-[#0D8BC5] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Fetching Blog Catalog...</span>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="py-16 text-center bg-slate-50/70 rounded-2xl border border-dashed border-slate-200">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm border border-slate-100 text-slate-400">
              <svg className="w-7 h-7 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <p className="text-slate-700 font-bold text-sm">
              {searchQuery ? `No articles matching "${searchQuery}"` : 'No published blog posts yet'}
            </p>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              {searchQuery ? 'Try adjusting your search terms or clear the filter.' : 'Publish your first technical fastener guide or product update.'}
            </p>
            {!searchQuery && (
              <button
                onClick={handleCreateNew}
                className="mt-5 px-6 py-2.5 bg-[#0D8BC5] hover:bg-[#086a98] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-colors"
              >
                + Create First Article
              </button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-200/60">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200/80 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-50">
                  <th className="py-3.5 px-4">Article</th>
                  <th className="py-3.5 px-4">Publication Date</th>
                  <th className="py-3.5 px-4">Read Time</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-slate-50/80 transition-colors group">
                    {/* Image & Title Column */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-16 h-12 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shrink-0 shadow-sm">
                          {blog.image ? (
                            <img src={getImageUrl(blog.image)} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-400 font-bold uppercase">No Img</div>
                          )}
                        </div>
                        <div className="min-w-0 max-w-xs md:max-w-md">
                          <p className="font-bold text-slate-900 truncate leading-snug hover:text-[#0D8BC5] transition-colors" title={blog.title}>
                            {blog.title}
                          </p>
                          <a 
                            href={`/blog/${blog.slug}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1 text-[11px] text-[#0D8BC5] hover:underline font-mono mt-0.5"
                          >
                            <span>/blog/{blog.slug}</span>
                            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          </a>
                        </div>
                      </div>
                    </td>

                    {/* Date Column */}
                    <td className="py-4 px-4 text-xs text-slate-600 font-medium whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span>{blog.date}</span>
                      </div>
                    </td>

                    {/* Reading Time */}
                    <td className="py-4 px-4 text-xs whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md text-[11px]">
                        <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {blog.readingTime || '1 min read'}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(blog)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 hover:bg-[#0D8BC5] text-[#0D8BC5] hover:text-white font-bold text-xs rounded-lg border border-sky-200/80 hover:border-transparent transition-all cursor-pointer shadow-sm"
                          title="Edit Article"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                          <span>Edit</span>
                        </button>
                        
                        <button
                          onClick={() => confirmDelete(blog)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white font-bold text-xs rounded-lg border border-rose-200/80 hover:border-transparent transition-all cursor-pointer shadow-sm"
                          title="Delete Article"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          <span>Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && blogToDelete && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100"
            >
              <div className="flex items-center gap-3.5 text-rose-600 mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Delete Blog Article?</h3>
                  <p className="text-xs text-slate-500">This action is permanent and cannot be undone.</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                Are you sure you want to delete <span className="font-bold text-slate-900">"{blogToDelete.title}"</span>?
              </p>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setBlogToDelete(null);
                  }}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={deletingId === blogToDelete.id}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-rose-600/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {deletingId === blogToDelete.id ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Deleting...</span>
                    </>
                  ) : (
                    <span>Yes, Delete Article</span>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
