import React, { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import AdminDashboard from './AdminDashboard';

const AdminLayout = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('blogs'); // 'blogs' or 'create'
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await api.post('/admin/logout');
      toast.success('Logged out successfully.');
      if (onLogout) onLogout();
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to log out cleanly.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row text-gray-800 font-sans">
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-[#0a192f] text-white p-4 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0D8BC5] rounded-lg flex items-center justify-center font-black text-xs">HEX</div>
          <span className="font-extrabold tracking-tight text-sm uppercase">Admin Panel</span>
        </div>
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-gray-300 hover:text-white"
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-40 w-64 bg-[#0a192f] text-white flex flex-col justify-between p-6 transition-transform duration-300 transform
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div>
          {/* Logo Header */}
          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-gray-800">
            <div className="w-10 h-10 bg-[#0D8BC5] rounded-xl flex items-center justify-center font-black text-sm text-white shadow-lg">
              HEX
            </div>
            <div>
              <h1 className="font-extrabold text-sm tracking-wide uppercase text-white">Hex India</h1>
              <p className="text-[10px] text-[#0D8BC5] font-bold uppercase tracking-widest">Admin Control Panel</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <button
              onClick={() => {
                setActiveTab('blogs');
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'blogs' 
                  ? 'bg-[#0D8BC5] text-white shadow-lg shadow-[#0D8BC5]/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-base">📊</span>
              <span>Dashboard & Blogs</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('create');
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'create' 
                  ? 'bg-[#0D8BC5] text-white shadow-lg shadow-[#0D8BC5]/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-base">✏️</span>
              <span>Create Blog</span>
            </button>

            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <span className="text-base">🌐</span>
              <span>View Public Blog ↗</span>
            </a>
          </nav>
        </div>

        {/* User Info & Logout Footer */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center font-bold text-xs text-white">
              👤
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-white truncate">Administrator</p>
              <p className="text-[10px] text-gray-400 truncate">{user?.email || 'chandan110906@gmail.com'}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full py-2.5 px-4 bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content View */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <AdminDashboard activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
    </div>
  );
};

export default AdminLayout;
