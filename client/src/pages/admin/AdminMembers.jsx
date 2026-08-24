import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import api from '../../utils/api';

const AdminMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const res = await api.get('/admin/members');
      if (res.data?.success) {
        setMembers(res.data.members || []);
      }
    } catch (error) {
      toast.error('Failed to load members');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddMember = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error('Please enter both email and password');
      return;
    }
    
    try {
      setSubmitting(true);
      const res = await api.post('/admin/members', formData);
      if (res.data?.success) {
        toast.success('Member added successfully');
        setFormData({ email: '', password: '' });
        fetchMembers();
      }
    } catch (error) {
      const msg = error.response?.data?.message || 'Failed to add member';
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const handleRemove = async (id) => {
    if (!window.confirm('Are you sure you want to remove this member?')) return;
    try {
      const res = await api.delete(`/admin/members/${id}`);
      if (res.data?.success) {
        toast.success('Member removed');
        fetchMembers();
      }
    } catch (error) {
      const msg = error.response?.data?.message || 'Failed to remove member';
      toast.error(msg);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="bg-white rounded-[24px] p-6 lg:p-10 shadow-sm border border-slate-200/60 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-100">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <svg className="w-7 h-7 text-[#0D8BC5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                Manage Admin Members
              </h2>
              <p className="text-slate-500 text-sm mt-2 font-medium">Add or remove secondary administrators.</p>
            </div>
          </div>

          <form onSubmit={handleAddMember} className="mb-10 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Add New Admin</h3>
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1 w-full">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@hexindiafasteners.com"
                  className="w-full h-12 bg-white px-4 text-sm font-medium border border-slate-200 rounded-xl focus:border-[#0D8BC5] focus:ring-4 focus:ring-[#0D8BC5]/10 outline-none transition-all"
                  required
                />
              </div>
              <div className="flex-1 w-full">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Secure password"
                  className="w-full h-12 bg-white px-4 text-sm font-medium border border-slate-200 rounded-xl focus:border-[#0D8BC5] focus:ring-4 focus:ring-[#0D8BC5]/10 outline-none transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="h-12 px-6 bg-[#0a192f] hover:bg-[#0D8BC5] text-white rounded-xl font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg disabled:opacity-70 shrink-0 w-full sm:w-auto"
              >
                {submitting ? 'Adding...' : 'Add Member'}
              </button>
            </div>
          </form>

          {loading ? (
            <div className="flex justify-center p-12">
              <div className="w-8 h-8 border-4 border-slate-200 border-t-[#0D8BC5] rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-slate-100 bg-white">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50/80 text-xs uppercase tracking-wider font-bold text-slate-700 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {members.map((member) => (
                    <tr key={member._id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-800">{member.email}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          member.role === 'superadmin' 
                            ? 'bg-purple-100 text-purple-700' 
                            : 'bg-[#0D8BC5]/10 text-[#0D8BC5]'
                        }`}>
                          {member.role || 'admin'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {member.role !== 'superadmin' && (
                          <button
                            onClick={() => handleRemove(member._id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white rounded-lg text-xs font-bold transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            Remove
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                  {members.length === 0 && (
                    <tr>
                      <td colSpan="3" className="px-6 py-12 text-center text-slate-400 font-medium">
                        No members found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMembers;
