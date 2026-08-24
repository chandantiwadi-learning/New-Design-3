import React, { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import AdminDashboard from './AdminDashboard';
import AdminMembers from './AdminMembers';

const AdminLayout = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('blogs'); // 'blogs' or 'create'
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await api.post('/admin/logout');
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      toast.success('Logged out successfully.');
      if (onLogout) onLogout();
    } catch (error) {
      console.error('Logout error:', error);
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      if (onLogout) onLogout();
      toast.error('Logged out.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col md:flex-row text-slate-800 font-sans antialiased">
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-[#0a192f] text-white p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-lg p-1 flex items-center justify-center shadow-md">
            <img src="/images/homePage/ImageAnimation/logo.png" alt="HEX INDIA" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-extrabold tracking-wide text-sm uppercase text-white block leading-tight">HEX INDIA</span>
            <span className="text-[9px] text-[#0D8BC5] font-bold uppercase tracking-widest">Admin Portal</span>
          </div>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          aria-label="Toggle Sidebar"
        >
          {sidebarOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-30 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 h-screen z-40 w-72 bg-[#0a192f] text-white flex flex-col justify-between p-6 transition-transform duration-300 transform shadow-2xl md:shadow-none border-r border-slate-800/80 shrink-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Logo Header */}
            <div className="flex items-center gap-3.5 mb-8 pb-6 border-b border-slate-800/80">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg shadow-black/20 border border-white/10 shrink-0">
                <img src="/images/homePage/ImageAnimation/logo.png" alt="HEX INDIA Logo" className="w-full h-full object-contain" />
              </div>
              <div className="overflow-hidden">
                <h1 className="font-black text-sm tracking-wider uppercase text-white leading-tight">HEX INDIA</h1>
                <p className="text-[10px] text-[#0D8BC5] font-bold uppercase tracking-widest mt-0.5">Admin Management</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setActiveTab('blogs');
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer box-border text-left ${
                  activeTab === 'blogs'
                    ? 'bg-[#0D8BC5] text-white shadow-lg shadow-[#0D8BC5]/30 ring-1 ring-white/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                <span>Dashboard & Blogs</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('create');
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer box-border text-left ${
                  activeTab === 'create'
                    ? 'bg-[#0D8BC5] text-white shadow-lg shadow-[#0D8BC5]/30 ring-1 ring-white/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                <span>Create Blog</span>
              </button>

              {user?.role === 'superadmin' && (
                <button
                  onClick={() => {
                    setActiveTab('members');
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer box-border text-left ${
                    activeTab === 'members'
                      ? 'bg-[#0D8BC5] text-white shadow-lg shadow-[#0D8BC5]/30 ring-1 ring-white/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  <span>Manage Members</span>
                </button>
              )}

              <a
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between gap-3.5 px-4 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200 cursor-pointer box-border text-left"
              >
                <span className="flex items-center gap-3.5">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  <span>Public Website</span>
                </span>
                <svg className="w-3.5 h-3.5 shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </nav>
          </div>

          {/* User Info & Logout Footer */}
          <div className="pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-3 mb-4 p-2.5 rounded-xl bg-slate-800/40 border border-slate-800">
              <div className="w-9 h-9 bg-gradient-to-tr from-[#0D8BC5] to-sky-400 rounded-lg flex items-center justify-center font-bold text-xs text-white shadow-sm shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-bold text-white truncate">Administrator</p>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                </div>
                <p className="text-[11px] text-slate-400 truncate mt-0.5" title={user?.email || 'chandan110906@gmail.com'}>
                  {user?.email || 'chandan110906@gmail.com'}
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full py-3 px-4 bg-rose-500/10 hover:bg-rose-600 text-rose-400 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 border border-rose-500/20 hover:border-rose-600 shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content View */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-w-7xl">
        {activeTab === 'members' ? (
          <AdminMembers />
        ) : (
          <AdminDashboard activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
      </main>
    </div>
  );
};

export default AdminLayout;
