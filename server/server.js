import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { env } from './config/env.js';
import { setupSecurity } from './middleware/security.js';
import { errorHandler } from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
import enquiryRoutes from './routes/enquiry.routes.js';
import blogRoutes from './routes/blog.routes.js';
import adminRoutes from './routes/admin.routes.js';
import whatsappRoutes from './routes/whatsapp.routes.js';

// Connect to MongoDB
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = env.PORT || 5001;

// Trust the reverse proxy (Render) so rate-limiting and IP detection work
app.set('trust proxy', 1);

// Set up security middleware (Helmet, CORS, Rate Limit, XSS)
setupSecurity(app);

// Parsers
app.use(cookieParser());
app.use(express.json({
  verify: (req, res, buf) => {
    // Save raw body for Meta webhook signature validation
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: true }));

// Serve uploaded image files publicly
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/enquiry', enquiryRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/whatsapp', whatsappRoutes);

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
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on port ${PORT} in ${env.NODE_ENV} mode.`);
});
