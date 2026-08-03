import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { env } from '../config/env.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendAdminOTPEmail } from '../services/email.service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ADMINS_FILE = path.join(__dirname, '../data/admins.json');

const getAdmins = () => {
  try {
    const data = fs.readFileSync(ADMINS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to read admins.json', error);
    return [];
  }
};

const saveAdmins = (admins) => {
  fs.writeFileSync(ADMINS_FILE, JSON.stringify(admins, null, 2));
};

// In-memory OTP store: { email: { otp: string, expiresAt: number } }
const otpStore = new Map();

/**
 * Handles admin authentication login.
 */
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password.',
      });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const admins = getAdmins();
    const admin = admins.find(a => a.email.toLowerCase() === trimmedEmail);

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.',
      });
    }

    const isPasswordValid = bcrypt.compareSync(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.',
      });
    }

    // Sign JWT Token
    const token = jwt.sign(
      { email: admin.email, role: 'admin' },
      env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Set HttpOnly Cookie
    const isProduction = env.NODE_ENV === 'production';
    res.cookie('adminToken', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    res.cookie('token', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: 'Admin login successful.',
      user: { email: admin.email, role: 'admin' },
      token, // Also return token for header-based auth fallback if needed
    });
  } catch (error) {
    console.error('Error during admin login:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error during login.',
    });
  }
};

/**
 * Handles admin logout.
 */
export const logoutAdmin = async (req, res) => {
  const isProduction = env.NODE_ENV === 'production';
  const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
  };

  res.clearCookie('adminToken', cookieOptions);
  res.clearCookie('token', cookieOptions);

  return res.status(200).json({
    success: true,
    message: 'Logged out successfully.',
  });
};

/**
 * Checks current admin authentication status.
 */
export const checkAuth = async (req, res) => {
  return res.status(200).json({
    success: true,
    authenticated: true,
    user: req.admin,
  });
};

/**
 * Handles forgot password OTP request.
 */
export const requestOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const admins = getAdmins();
    const admin = admins.find(a => a.email.toLowerCase() === trimmedEmail);

    if (!admin) {
      // Don't leak if email exists or not for security, just mock success
      return res.status(200).json({ success: true, message: 'If the email exists, an OTP has been sent.' });
    }

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

    otpStore.set(trimmedEmail, { otp, expiresAt });

    await sendAdminOTPEmail(trimmedEmail, otp);

    return res.status(200).json({ success: true, message: 'OTP sent successfully.' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return res.status(500).json({ success: false, message: 'Failed to send OTP.' });
  }
};

/**
 * Handles verifying OTP and resetting password.
 */
export const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    
    if (!email || !otp || !newPassword) {
      return res.status(400).json({ success: false, message: 'Email, OTP, and new password are required.' });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const stored = otpStore.get(trimmedEmail);

    if (!stored || stored.otp !== otp) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP.' });
    }

    if (Date.now() > stored.expiresAt) {
      otpStore.delete(trimmedEmail);
      return res.status(400).json({ success: false, message: 'OTP has expired.' });
    }

    // OTP is valid, update password
    const admins = getAdmins();
    const adminIndex = admins.findIndex(a => a.email.toLowerCase() === trimmedEmail);
    
    if (adminIndex === -1) {
      return res.status(400).json({ success: false, message: 'User not found.' });
    }

    admins[adminIndex].password = bcrypt.hashSync(newPassword, 10);
    saveAdmins(admins);
    
    // Clear OTP
    otpStore.delete(trimmedEmail);

    return res.status(200).json({ success: true, message: 'Password reset successfully. You can now login.' });
  } catch (error) {
    console.error('Error resetting password:', error);
    return res.status(500).json({ success: false, message: 'Failed to reset password.' });
  }
};
