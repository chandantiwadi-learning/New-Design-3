import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import xss from 'xss';

export const setupSecurity = (app) => {
  // Helmet for secure HTTP headers
  app.use(helmet());

  // CORS
  app.use(
    cors({
      origin: process.env.NODE_ENV === 'production' 
        ? ['https://new-design-3-three.vercel.app', 'https://www.new-design-3-three.vercel.app'] 
        : ['http://localhost:5173', 'https://new-design-3-three.vercel.app'], // Vite default and Vercel for testing
      methods: ['GET', 'POST', 'OPTIONS'],
      credentials: true,
    })
  );

  // XSS Sanitization Middleware
  app.use((req, res, next) => {
    if (req.body) {
      for (const key in req.body) {
        if (typeof req.body[key] === 'string') {
          req.body[key] = xss(req.body[key].trim());
        }
      }
    }
    next();
  });
};

// Rate limiter for enquiry submissions
export const enquiryRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
