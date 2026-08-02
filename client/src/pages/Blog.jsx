import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../utils/api';
import { getImageUrl } from '../utils/imageUrl';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get('/blogs');
        if (response.data?.success && Array.isArray(response.data?.data)) {
          setPosts(response.data.data);
        }
      } catch (error) {
        console.error('Failed to fetch blogs from API:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-page bg-white text-gray-700 select-none">
      
      {/* Premium Dark Top Banner matching About.jsx */}
      <section className="relative h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        
        {/* Custom HUD Animations for Hero */}
        <style>{`
          @keyframes floatLogo {
            0%, 100% { transform: translateY(0) translateZ(0); }
            50% { transform: translateY(-5px) translateZ(0); }
          }
          @keyframes pulseOpacity {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          @keyframes spinOuter {
            from { transform: rotate(0deg) translateZ(0); }
            to { transform: rotate(360deg) translateZ(0); }
          }
          @keyframes spinMiddle {
            from { transform: rotate(0deg) translateZ(0); }
            to { transform: rotate(-360deg) translateZ(0); }
          }
          @keyframes spinInner {
            from { transform: rotate(0deg) translateZ(0); }
            to { transform: rotate(360deg) translateZ(0); }
          }
          @keyframes hudEnter {
            from { opacity: 0; transform: scale(0.9) translateZ(0); }
            to { opacity: 1; transform: scale(1) translateZ(0); }
          }
          .logo-hud-enter {
            animation: hudEnter 900ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          .logo-hud-container {
            animation: floatLogo 5s ease-in-out infinite;
            will-change: transform;
            filter: drop-shadow(0 0 6px rgba(13, 139, 197, 0.2)) drop-shadow(0 0 16px rgba(13, 139, 197, 0.1));
            transition: all 0.3s ease-in-out;
          }
          .logo-hud-container:hover { transform: scale(1.05) translateZ(0) !important; }
          .logo-hud-container:hover .glow-ring { filter: drop-shadow(0 0 10px rgba(13, 139, 197, 0.3)) drop-shadow(0 0 25px rgba(13, 139, 197, 0.2)); }
          
          .ring-outer {
            animation: spinOuter 24s linear infinite, pulseOpacity 4s ease-in-out infinite;
            transform-origin: center;
            will-change: transform, opacity;
          }
          .ring-middle {
            animation: spinMiddle 16s linear infinite, pulseOpacity 3.5s ease-in-out infinite;
            transform-origin: center;
            will-change: transform, opacity;
          }
          .ring-inner {
            animation: spinInner 30s linear infinite, pulseOpacity 4.5s ease-in-out infinite;
            transform-origin: center;
            will-change: transform, opacity;
          }
        `}</style>

        {/* Animated HUD Logo at Top Right */}
        <div className="absolute top-6 right-6 z-50 w-[100px] h-[100px] md:w-[150px] md:h-[150px] logo-hud-enter">
          <div className="relative w-full h-full logo-hud-container">
            <img src="/images/homePage/ImageAnimation/behind-logo.png" className="absolute inset-0 w-full h-full object-contain ring-outer glow-ring" alt="" />
            <img src="/images/homePage/ImageAnimation/left%20to%20right.png" className="absolute inset-0 w-full h-full object-contain ring-middle glow-ring" alt="" />
            <img src="/images/homePage/ImageAnimation/right%20to%20left.png" className="absolute inset-0 w-full h-full object-contain ring-inner glow-ring" alt="" />
            <img src="/images/homePage/ImageAnimation/logo.png" className="absolute top-1/2 left-1/2 w-[45%] h-[45%] object-contain z-10" style={{ willChange: 'transform', transform: 'translate(-50%, -50%) translateZ(0)' }} alt="" />
          </div>
        </div>

        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img src="/images/blogs/blog.jpg" alt="Blog Banner" className="w-full h-full object-cover object-[80%_center] md:object-[75%_center] lg:object-center" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 md:from-black/60 via-black/40 md:via-black/20 to-transparent lg:to-transparent/10 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 backdrop-blur-md z-10 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 55%)', maskImage: 'linear-gradient(to right, black 0%, transparent 55%)' }}></div>
        </motion.div>

        <div className="relative z-10 text-left px-4 max-w-7xl w-full mx-auto mt-20 group cursor-default">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight uppercase mb-6 group-hover:scale-105 group-hover:text-[#0D8BC5] transition-all duration-300 origin-left"
          >
            Blog
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl group-hover:scale-105 group-hover:text-[#0D8BC5] transition-all duration-300 origin-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Insights, updates, and technical articles on industrial fasteners, metallurgy, and engineering applications from the experts at Hex India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex items-center gap-4"
          >
            <Link
              to="/admin"
              className="inline-flex items-center px-6 py-3.5 bg-[#0D8BC5] hover:bg-[#0a192f] text-white font-bold text-xs uppercase tracking-widest rounded shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-[#0D8BC5]"
            >
              <span className="text-base font-bold mr-2">+</span>
              Add New Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="h-1 w-24 bg-[#0D8BC5] mt-6 origin-left"
          ></motion.div>
        </div>
      </section>

      {/* Blog listings section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header with Add New Blog Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight uppercase">Latest Technical Articles</h2>
            <p className="text-sm text-gray-500 mt-1">Explore engineering insights & metallurgy updates from Hex India</p>
          </div>
          <Link
            to="/admin"
            className="inline-flex items-center px-6 py-3 bg-[#0a192f] hover:bg-[#0D8BC5] text-white font-bold text-xs uppercase tracking-wider rounded-sm shadow-md transition-all duration-300 shrink-0"
          >
            <span className="text-base font-bold mr-2">+</span>
            Add New Blog
          </Link>
        </div>
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-[#0D8BC5] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Blog Posts Published Yet</h3>
            <p className="text-gray-500 text-sm">Please check back later for technical articles and industry updates.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post, idx) => (
              <motion.article 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={post.id || idx}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-10 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group" 
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left image */}
                  <div className="w-full md:w-1/3 shrink-0 relative rounded-xl overflow-hidden shadow-md bg-gray-100">
                    <img 
                      src={getImageUrl(post.image)} 
                      alt={post.title} 
                      className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>

                  {/* Post content */}
                  <div className="flex flex-col flex-grow">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#0D8BC5] text-xs font-bold uppercase tracking-widest">{post.date}</span>
                        {post.readingTime && (
                          <span className="text-gray-400 text-xs font-medium">• {post.readingTime}</span>
                        )}
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-4 hover:text-[#0D8BC5] transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                    </div>

                    <p className="text-gray-600 leading-[1.8] text-base mb-8 text-justify flex-grow">
                      {post.shortDescription || post.content}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex justify-end">
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="relative inline-flex items-center px-6 py-3 bg-[#0a192f] text-white font-bold text-xs uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:bg-[#0D8BC5] shadow-md"
                      >
                        <span className="relative z-10 flex items-center">
                          Read More
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

export default Blog;
