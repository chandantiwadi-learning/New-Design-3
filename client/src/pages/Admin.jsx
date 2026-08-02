import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import AdminLogin from './admin/AdminLogin';
import AdminLayout from './admin/AdminLayout';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      setLoading(true);
      const response = await api.get('/admin/me');
      if (response.data?.success && response.data?.authenticated) {
        setIsAuthenticated(true);
        setUser(response.data.user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (_err) {
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 border-4 border-[#0D8BC5] border-t-transparent rounded-full animate-spin mb-4"></div>
        <span className="text-gray-400 font-bold uppercase tracking-wider text-xs">Checking Security Credentials...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={(user) => {
      setUser(user);
      setIsAuthenticated(true);
    }} />;
  }

  return (
    <AdminLayout 
      user={user} 
      onLogout={() => {
        setIsAuthenticated(false);
        setUser(null);
      }} 
    />
  );
};

export default Admin;
