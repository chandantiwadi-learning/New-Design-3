import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load from server/.env first, then process.cwd()/.env
dotenv.config({ path: path.resolve(__dirname, '../.env') });
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
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY is missing. Required for email services.'),
  EMAIL_FROM: z.string().min(1, 'EMAIL_FROM is missing. Required for email services.'),
  COMPANY_EMAIL: z.string().min(1, 'COMPANY_EMAIL is missing. Required for email services.'),

  // Database Configuration
  MONGODB_URI: z.string().min(1, 'MONGODB_URI is required'),

  // Admin & Auth Configuration
  JWT_SECRET: z.string().default('hex_india_admin_jwt_secret_key_2026'),
  ADMIN_EMAIL: z.string().email().default('chandan110906@gmail.com'),
  ADMIN_PASSWORD: z.string().default('Chandan_@11'),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format());
  process.exit(1);
}

export const env = _env.data;
