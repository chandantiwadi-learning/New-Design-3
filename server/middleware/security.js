import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import xss from 'xss';

export const setupSecurity = (app) => {
  // Helmet for secure HTTP headers with cross-origin resource policy allowed for static assets
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    })
  );

  // CORS
  app.use(
    cors({
      origin: process.env.NODE_ENV === 'production' 
        ? ['https://new-design-3-three.vercel.app', 'https://www.new-design-3-three.vercel.app'] 
        : ['http://localhost:5173', 'https://new-design-3-three.vercel.app'], // Vite default and Vercel for testing
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
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

// Rate limiter for enquiry submissions (5 per minute)
export const enquiryRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 1 minute.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Rate limiter for OTP requests (3 per hour)
export const otpRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // Limit each IP to 3 requests per hour
  message: {
    success: false,
    message: 'Too many OTP requests from this IP, please try again after an hour.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
