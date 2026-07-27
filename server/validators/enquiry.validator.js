import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long').trim(),
  email: z.string().email('Invalid email address').trim(),
  phone: z.string().min(10, 'Phone number must be at least 10 characters').max(20, 'Phone number is too long').trim(),
  company: z.string().max(100, 'Company name is too long').trim().optional(),
  subject: z.string().max(150, 'Subject is too long').trim().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message is too long').trim(),
  turnstileToken: z.string().min(1, 'CAPTCHA verification is required'),
});

export const validateEnquiry = (req, res, next) => {
  try {
    req.body = enquirySchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.errors.map(err => ({ field: err.path[0], message: err.message })),
      });
    }
    next(error);
  }
};
