import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { env } from './env.js';
import { Admin } from '../models/Admin.model.js';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

    // Seed default admin if none exists
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      console.log('🌱 No admin accounts found in MongoDB. Seeding initial admin...');
      const defaultEmail = (env.ADMIN_EMAIL || 'chandan110906@gmail.com').toLowerCase();
      const defaultPassword = env.ADMIN_PASSWORD || 'Chandan_@11';
      const hashedPassword = bcrypt.hashSync(defaultPassword, 10);

      await Admin.create({
        email: defaultEmail,
        password: hashedPassword,
        role: 'admin',
      });
      console.log(`✅ Default admin seeded in MongoDB: ${defaultEmail}`);
    }
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};
