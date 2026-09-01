import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import api from '../../utils/api';

const AdminResponses = ({ user }) => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingEnquiry, setEditingEnquiry] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const response = await api.get('/enquiry');
      if (response.data?.success && Array.isArray(response.data?.data)) {
        setEnquiries(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      toast.error('Failed to load responses.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const filteredEnquiries = enquiries.filter((enq) =>
    enq.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    enq.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    enq.referenceId?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingEnquiry) return;
    
    try {
      setUpdateLoading(true);
      const response = await api.put(`/enquiry/${editingEnquiry._id}`, {
        status: editingEnquiry.status,
        notes: editingEnquiry.notes
      });
      
      if (response.data?.success) {
        toast.success('Response updated successfully.');
        setEnquiries((prev) => 
          prev.map((enq) => (enq._id === editingEnquiry._id ? response.data.data : enq))
        );
        setEditingEnquiry(null);
      }
    } catch (error) {
      console.error('Error updating enquiry:', error);
      toast.error(error.response?.data?.message || 'Failed to update response.');
    } finally {
      setUpdateLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Form Responses</h2>
            <p className="text-xs text-slate-500 mt-1">View user enquiries and contact requests.</p>
          </div>

          <div className="flex items-center gap-3.5 w-full sm:w-auto">
            <div className="relative w-full sm:w-72">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, email or ID..."
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D8BC5]/30 focus:border-[#0D8BC5] focus:bg-white transition-all font-medium"
              />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center">
            <div className="w-9 h-9 border-3 border-[#0D8BC5] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Fetching Responses...</span>
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <div className="py-16 text-center bg-slate-50/70 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-700 font-bold text-sm">No responses found</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-200/60">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200/80 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-50">
                  <th className="py-3.5 px-4">Details</th>
                  <th className="py-3.5 px-4">Contact Info</th>
                  <th className="py-3.5 px-4">Message</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredEnquiries.map((enq) => (
                  <tr key={enq._id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="py-4 px-4 align-top">
                      <p className="font-bold text-slate-900 truncate">{enq.name}</p>
                      <p className="text-[10px] text-slate-500 mt-1 font-mono uppercase">Ref: {enq.referenceId}</p>
                      <p className="text-[11px] text-slate-500 mt-1">{enq.date} {enq.time}</p>
                    </td>
                    <td className="py-4 px-4 align-top text-xs">
                      <p className="text-slate-700">{enq.email}</p>
                      <p className="text-slate-700 mt-1">{enq.phone}</p>
                    </td>
                    <td className="py-4 px-4 align-top text-xs max-w-xs">
                      <p className="text-slate-800 font-medium truncate mb-1">{enq.subject}</p>
                      <p className="text-slate-500 line-clamp-2">{enq.message}</p>
                    </td>
                    <td className="py-4 px-4 align-top text-xs">
                      <span className={`inline-flex px-2 py-1 rounded font-semibold ${
                        enq.status === 'Resolved' ? 'bg-emerald-100 text-emerald-700' :
                        enq.status === 'In Progress' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {enq.status || 'Pending'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right align-top">
                      {user?.role === 'superadmin' && (
                        <button
                          onClick={() => setEditingEnquiry(enq)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 hover:bg-[#0D8BC5] text-[#0D8BC5] hover:text-white font-bold text-xs rounded-lg border border-sky-200/80 hover:border-transparent transition-all cursor-pointer shadow-sm"
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* Edit Modal (Super Admin Only) */}
      <AnimatePresence>
        {editingEnquiry && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100"
            >
              <h3 className="text-lg font-black text-slate-900 mb-4">Edit Response</h3>
              
              <div className="mb-6 space-y-4 text-sm bg-slate-50 p-4 rounded-xl">
                <div><span className="font-bold">Name:</span> {editingEnquiry.name}</div>
                <div><span className="font-bold">Email:</span> {editingEnquiry.email}</div>
                <div><span className="font-bold">Message:</span> <p className="mt-1 text-slate-600">{editingEnquiry.message}</p></div>
              </div>

              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Status</label>
                  <select 
                    value={editingEnquiry.status || 'Pending'}
                    onChange={(e) => setEditingEnquiry({...editingEnquiry, status: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0D8BC5]/30 focus:border-[#0D8BC5] outline-none"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Admin Notes</label>
                  <textarea 
                    value={editingEnquiry.notes || ''}
                    onChange={(e) => setEditingEnquiry({...editingEnquiry, notes: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0D8BC5]/30 focus:border-[#0D8BC5] outline-none min-h-[100px]"
                    placeholder="Internal notes..."
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setEditingEnquiry(null)}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={updateLoading}
                    className="px-5 py-2.5 bg-[#0D8BC5] hover:bg-[#086a98] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {updateLoading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminResponses;
