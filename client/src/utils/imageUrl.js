/**
 * Returns full URL for an image path (handling both static public images and uploaded images).
 * @param {string} imagePath 
 * @returns {string}
 */
export const getImageUrl = (imagePath) => {
  if (!imagePath) return '/images/pages_img_07.jpg';
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
  if (imagePath.startsWith('/uploads/')) {
    const backendHost = import.meta.env.VITE_BACKEND_URL || (import.meta.env.DEV ? 'http://localhost:5001' : 'https://new-design-3.onrender.com');
    return `${backendHost}${imagePath}`;
  }
  return imagePath;
};
