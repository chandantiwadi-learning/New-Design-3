/**
 * Calculates reading time in minutes based on content word count (~200 words/min).
 * @param {string} content 
 * @returns {string} e.g. "3 min read"
 */
export const calculateReadingTime = (content) => {
  if (!content || typeof content !== 'string') return '1 min read';
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
};
