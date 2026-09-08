/**
 * Returns full URL for an image path (handling both static public images and uploaded images).
 * @param {string} imagePath 
 * @returns {string}
 */
export const getImageUrl = (imagePath) => {
  if (!imagePath) return '/images/pages_img_07.jpg';
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
  if (imagePath.startsWith('/uploads/')) {
    const rawUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_BACKEND_URL || (import.meta.env.DEV ? 'http://localhost:5001' : 'https://dt4uwmivmo.c36.airoapp.ai');
    const backendHost = rawUrl.replace(/\/+$/, '').replace(/\/api$/, '');
    return `${backendHost}${imagePath}`;
  }
  return imagePath;
};
