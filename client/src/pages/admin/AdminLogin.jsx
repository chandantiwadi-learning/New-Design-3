import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import api from '../../utils/api';

const AdminLogin = ({ onLoginSuccess }) => {
  const [mode, setMode] = useState('login'); // login | request-otp | reset-password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
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

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your admin email address.');
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/admin/forgot-password', { email });
      if (response.data?.success) {
        toast.success(response.data.message || 'OTP sent successfully.');
        setMode('reset-password');
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to send OTP.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!email || !otp || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/admin/reset-password', { email, otp, newPassword: password });
      if (response.data?.success) {
        toast.success('Password reset successfully! Please log in.');
        setMode('login');
        setPassword('');
        setOtp('');
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to reset password.';
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
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight uppercase">
            {mode === 'login' ? 'Admin Login' : mode === 'request-otp' ? 'Forgot Password' : 'Reset Password'}
          </h1>
          <p className="text-sm text-gray-500 mt-1">HEX INDIA Blog Management Portal</p>
        </div>

        {mode === 'login' && (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Admin Email Address
              </label>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D8BC5] focus:bg-white transition-all text-sm placeholder:text-gray-400"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setMode('request-otp')}
                  className="text-xs font-semibold text-[#0D8BC5] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D8BC5] focus:bg-white transition-all text-sm placeholder:text-gray-400"
                placeholder="Enter password"
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
        )}

        {mode === 'request-otp' && (
          <form onSubmit={handleRequestOtp} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Admin Email Address
              </label>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D8BC5] focus:bg-white transition-all text-sm placeholder:text-gray-400"
                placeholder="Enter email address"
              />
              <p className="text-xs text-gray-500 mt-2">Enter your admin email to receive an OTP.</p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 bg-[#0a192f] hover:bg-[#0D8BC5] text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Sending OTP...' : 'Request OTP'}
              </button>
              <button
                type="button"
                onClick={() => setMode('login')}
                className="w-full py-3.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-300"
              >
                Back to Login
              </button>
            </div>
          </form>
        )}

        {mode === 'reset-password' && (
          <form onSubmit={handleResetPassword} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Enter OTP
              </label>
              <input 
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D8BC5] focus:bg-white transition-all text-sm placeholder:text-gray-400"
                placeholder="Enter 6-digit OTP"
                maxLength={6}
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                New Password
              </label>
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D8BC5] focus:bg-white transition-all text-sm placeholder:text-gray-400"
                placeholder="Enter new password"
              />
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 bg-[#0D8BC5] hover:bg-[#0a192f] text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
              <button
                type="button"
                onClick={() => setMode('login')}
                className="w-full py-3.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

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
