/**
 * Generates a URL-friendly slug from a text string.
 * @param {string} text 
 * @returns {string}
 */
export const generateSlug = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-') // Replace spaces, non-word chars and dashes with a single dash
    .replace(/^-+|-+$/g, '');  // Trim leading & trailing dashes
};
