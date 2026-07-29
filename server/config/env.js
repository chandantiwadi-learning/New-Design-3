import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const envSchema = z.object({
  PORT: z.string().default('5000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // Google Sheets
  GOOGLE_SHEET_ID: z.string().min(1, 'Google Sheet ID is required'),
  GOOGLE_SERVICE_ACCOUNT_PATH: z.string().default('./config/service-account.json'),
  GOOGLE_CLIENT_EMAIL: z.string().optional(),
  GOOGLE_PRIVATE_KEY: z.string().optional(),
  
  // Turnstile (Optional for local testing if we bypass it, but let's make it optional)
  TURNSTILE_SECRET: z.string().optional(),
  
  // Email Configuration (Resend)
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY is required'),
  MAIL_FROM: z.string().min(1, 'Valid MAIL_FROM is required'),
  EMAIL_TO: z.string().email('Valid EMAIL_TO is required'),
  EMAIL_BCC: z.string().email().optional(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format());
  process.exit(1);
}

export const env = _env.data;
