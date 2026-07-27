import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { env } from './config/env.js';
import { setupSecurity } from './middleware/security.js';
import { errorHandler } from './middleware/errorHandler.js';
import enquiryRoutes from './routes/enquiry.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = env.PORT || 5000;

// Set up security middleware (Helmet, CORS, Rate Limit, XSS)
setupSecurity(app);

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/enquiry', enquiryRoutes);

// Serve frontend static assets in production mode
const distPath = path.join(__dirname, '../client/dist');
app.use(express.static(distPath));

// Wildcard fallback to API info
app.get('*', (req, res) => {
  res.json({ message: 'HEX INDIA API Backend is running successfully.' });
});

// Global Error Handler
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT} in ${env.NODE_ENV} mode.`);
});
