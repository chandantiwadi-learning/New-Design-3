import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../utils/api';
import { getImageUrl } from '../utils/imageUrl';

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/blogs/${slug}`);
        if (response.data?.success && response.data?.data) {
          setBlog(response.data.data);
        } else {
          setError('Blog post not found.');
        }
      } catch (err) {
        console.error('Failed to fetch blog detail:', err);
        setError('Blog post not found or server unavailable.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-[#0D8BC5] border-t-transparent rounded-full animate-spin mb-4"></div>
          <span className="text-gray-400 font-bold uppercase tracking-wider text-xs">Loading Article...</span>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6 text-2xl">
          ⚠️
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Post Not Found</h2>
        <p className="text-gray-600 max-w-md mb-8">{error || "The article you are looking for does not exist or has been removed."}</p>
        <Link 
          to="/blog"
          className="inline-flex items-center px-6 py-3 bg-[#0a192f] text-white font-bold text-xs uppercase tracking-wider rounded shadow hover:bg-[#0D8BC5] transition-colors"
        >
          ← Return to All Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-details-page bg-white text-gray-700">
      {/* Banner */}
      <section className="relative bg-gray-900 pt-16 pb-20 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            to="/blog"
            className="inline-flex items-center text-[#0D8BC5] hover:text-white text-xs font-bold uppercase tracking-widest mb-6 transition-colors"
          >
            ← Back to Blogs
          </Link>
          
          <div className="flex items-center gap-4 mb-4 text-xs font-semibold text-gray-300">
            <span className="bg-[#0D8BC5]/20 text-[#0D8BC5] px-3 py-1 rounded-full uppercase tracking-wider font-bold">
              {blog.date}
            </span>
            <span>•</span>
            <span className="text-gray-300">{blog.readingTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight uppercase mb-6">
            {blog.title}
          </h1>

          {blog.shortDescription && (
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              {blog.shortDescription}
            </p>
          )}
        </div>
      </section>

      {/* Main Post Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Featured Image */}
        {blog.image && (
          <div className="w-full mb-12 rounded-2xl overflow-hidden shadow-xl border border-gray-100 max-h-[500px]">
            <img 
              src={getImageUrl(blog.image)} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content Paragraphs */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line text-justify space-y-6">
          {blog.content}
        </div>

        {/* Post Footer */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500 font-medium">
            Published by <span className="font-bold text-gray-900">Hex India Editorial Team</span>
          </div>
          <Link 
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-[#0a192f] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#0D8BC5] transition-colors"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
