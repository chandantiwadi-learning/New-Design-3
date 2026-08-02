import axios from 'axios';

// Get API base URL depending on environment
const getBaseUrl = () => {
  if (import.meta.env.DEV) {
    return 'http://localhost:5000/api';
  }
  return 'https://new-design-3-1.onrender.com/api';
};

const api = axios.create({
  baseURL: getBaseUrl(),
  withCredentials: true, // Send HttpOnly cookies with request
});

export default api;
