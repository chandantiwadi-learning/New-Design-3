import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import api from '../../utils/api';

const AdminLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('chandan110906@gmail.com');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/admin/login', { email, password });
      if (response.data?.success) {
        toast.success('Login successful! Redirecting to Dashboard...');
        if (onLoginSuccess) {
          onLoginSuccess(response.data.user);
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      const message = error.response?.data?.message || 'Failed to login. Please check credentials.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] flex items-center justify-center p-4">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative z-10 border border-gray-100"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#0D8BC5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#0D8BC5]/20">
            <span className="text-2xl font-black text-[#0D8BC5]">HEX</span>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight uppercase">Admin Login</h1>
          <p className="text-sm text-gray-500 mt-1">HEX INDIA Blog Management Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Admin Email Address
            </label>
            <input 
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D8BC5] focus:bg-white transition-all text-sm"
              placeholder="admin@hexindia.com"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Password
            </label>
            <input 
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D8BC5] focus:bg-white transition-all text-sm"
              placeholder="••••••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 bg-[#0a192f] hover:bg-[#0D8BC5] text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <span className="inline-flex items-center">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                Authenticating...
              </span>
            ) : (
              'Sign In to Dashboard'
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <span className="text-xs text-gray-400">
            Protected area • Single administrator access only
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
