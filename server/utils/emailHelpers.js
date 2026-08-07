import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Reads an HTML template from the templates directory and replaces variables.
 * @param {string} templateName - The name of the template file (e.g., 'otp.html').
 * @param {Object} variables - Key-value pairs to replace in the template (e.g., { name: 'John' }).
 * @returns {string} The processed HTML string.
 */
export const renderEmailTemplate = (templateName, variables = {}) => {
  try {
    const templatePath = path.join(__dirname, '../templates', templateName);
    let html = fs.readFileSync(templatePath, 'utf8');

    for (const [key, value] of Object.entries(variables)) {
      // Use a global regular expression to replace all instances of {{key}}
      const regex = new RegExp(`{{${key}}}`, 'g');
      html = html.replace(regex, value || '');
    }

    return html;
  } catch (error) {
    console.error(`Error rendering template ${templateName}:`, error.message);
    throw new Error('Failed to render email template.');
  }
};
