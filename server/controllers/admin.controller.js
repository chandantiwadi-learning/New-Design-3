import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { env } from '../config/env.js';

// Pre-compute hashed admin password from env or default
const adminEmail = process.env.ADMIN_EMAIL || env.ADMIN_EMAIL || 'chandan110906@gmail.com';
const rawAdminPassword = process.env.ADMIN_PASSWORD || env.ADMIN_PASSWORD || 'Chandan_@11';
const adminPasswordHash = bcrypt.hashSync(rawAdminPassword, 10);

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
    const isEmailValid = trimmedEmail === adminEmail.toLowerCase();
    const isPasswordValid = isEmailValid && bcrypt.compareSync(password, adminPasswordHash);

    if (!isEmailValid || !isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.',
      });
    }

    // Sign JWT Token
    const token = jwt.sign(
      { email: adminEmail, role: 'admin' },
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
      user: { email: adminEmail, role: 'admin' },
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
