import axios from 'axios';

// Get API base URL depending on environment
const getBaseUrl = () => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  if (import.meta.env.DEV) {
    return 'http://localhost:5001/api';
  }
  return 'https://new-design-3-1.onrender.com/api';
};

const api = axios.create({
  baseURL: getBaseUrl(),
  withCredentials: true, // Send HttpOnly cookies with request
});

// Attach Authorization header if admin token is stored
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
