import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { env } from '../config/env.js';
import { Admin } from '../models/Admin.model.js';
import { Otp } from '../models/Otp.model.js';
import { sendAdminOTPEmail } from '../services/email.service.js';

/**
 * Handles admin authentication login using MongoDB.
 */
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`[ADMIN AUTH] Login request received for email: ${email ? email.trim().toLowerCase() : 'empty'}`);

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password.',
      });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const admin = await Admin.findOne({ email: trimmedEmail });

    if (!admin) {
      console.log('[ADMIN AUTH] Login failed: Admin email not found in MongoDB');
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.',
      });
    }

    const isPasswordValid = bcrypt.compareSync(password, admin.password);

    if (!isPasswordValid) {
      console.log('[ADMIN AUTH] Login failed: Password mismatch');
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.',
      });
    }

    console.log('[ADMIN AUTH] Credentials verified successfully in MongoDB');

    // Sign JWT Token
    const token = jwt.sign(
      { email: admin.email, role: admin.role || 'admin' },
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
      user: { email: admin.email, role: admin.role || 'admin' },
      token, // Also return token for header-based auth fallback
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
 * Handles forgot password OTP request using MongoDB.
 */
export const requestOtp = async (req, res) => {
  try {
    console.log('[PASSWORD RESET] requestOtp controller entered');
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    const trimmedEmail = email.trim().toLowerCase();
    console.log(`[PASSWORD RESET] Email received: ${trimmedEmail}`);

    const admin = await Admin.findOne({ email: trimmedEmail });

    if (!admin) {
      console.log('[PASSWORD RESET] Email not found in MongoDB (generic response returned)');
      return res.status(200).json({ success: true, message: 'If the email exists, an OTP has been sent.' });
    }

    console.log('[PASSWORD RESET] Email validated in MongoDB');

    // Check for resend cooldown (60 seconds) in MongoDB
    const existingOtp = await Otp.findOne({ email: trimmedEmail });
    if (existingOtp) {
      const timeSinceCreation = Date.now() - new Date(existingOtp.createdAt).getTime();
      if (timeSinceCreation < 60000) {
        console.log('[PASSWORD RESET] Cooldown active, rejected request');
        return res.status(429).json({ success: false, message: 'Please wait 60 seconds before requesting a new OTP.' });
      }
    }

    // Generate secure 6 digit OTP
    const otp = crypto.randomInt(100000, 1000000).toString();
    console.log('[PASSWORD RESET] OTP generated successfully');

    const hashedOtp = bcrypt.hashSync(otp, 10);

    // Save to MongoDB with fresh TTL (10 minutes)
    await Otp.findOneAndUpdate(
      { email: trimmedEmail },
      {
        hashedOtp,
        resetToken: null,
        attempts: 0,
        createdAt: new Date(),
      },
      { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
    );
    console.log('[PASSWORD RESET] OTP stored successfully in MongoDB');
    
    console.log('[PASSWORD RESET] Sending OTP email through Resend');
    await sendAdminOTPEmail(trimmedEmail, otp);
    console.log('[PASSWORD RESET] Resend request completed');
    console.log('[PASSWORD RESET] OTP request completed successfully');

    return res.status(200).json({ success: true, message: 'OTP sent successfully.' });
  } catch (error) {
    console.error('[PASSWORD RESET] Error sending OTP:', error.message);
    return res.status(500).json({ success: false, message: 'Failed to send OTP.' });
  }
};

/**
 * Handles verifying OTP and generating a reset token in MongoDB.
 */
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    
    if (!email || !otp) {
      return res.status(400).json({ success: false, message: 'Email and OTP are required.' });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const stored = await Otp.findOne({ email: trimmedEmail });

    if (!stored || !stored.hashedOtp) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP.' });
    }

    if (stored.attempts >= 5) {
      await Otp.deleteOne({ email: trimmedEmail });
      return res.status(400).json({ success: false, message: 'Too many incorrect attempts. Please request a new OTP.' });
    }

    const isMatch = bcrypt.compareSync(otp, stored.hashedOtp);

    if (!isMatch) {
      stored.attempts += 1;
      await stored.save();
      return res.status(400).json({ success: false, message: 'Invalid OTP. Please try again.' });
    }

    console.log(`[OTP VERIFIED] OTP verified successfully in MongoDB for: ${trimmedEmail}`);

    // Generate secure reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    
    // Invalidate OTP and store reset token in MongoDB
    stored.hashedOtp = null;
    stored.resetToken = resetToken;
    stored.createdAt = new Date(); // Reset 10-minute TTL for password reset session
    await stored.save();

    return res.status(200).json({ success: true, message: 'OTP verified successfully.', resetToken });
  } catch (error) {
    console.error('Error verifying OTP:', error.message);
    return res.status(500).json({ success: false, message: 'Failed to verify OTP.' });
  }
};

/**
 * Handles resetting the password using the reset token in MongoDB.
 */
export const resetPassword = async (req, res) => {
  try {
    const { email, resetToken, newPassword } = req.body;
    
    if (!email || !resetToken || !newPassword) {
      return res.status(400).json({ success: false, message: 'Email, reset token, and new password are required.' });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const stored = await Otp.findOne({ email: trimmedEmail, resetToken });

    if (!stored) {
      return res.status(400).json({ success: false, message: 'Invalid or expired password reset session. Please start over.' });
    }

    // Update password in MongoDB Admin collection
    const admin = await Admin.findOne({ email: trimmedEmail });
    
    if (!admin) {
      return res.status(400).json({ success: false, message: 'User not found in MongoDB.' });
    }

    admin.password = bcrypt.hashSync(newPassword, 10);
    await admin.save();
    
    console.log(`[PASSWORD RESET] Password successfully updated in MongoDB for: ${trimmedEmail}`);
    
    // Clear reset token immediately from MongoDB
    await Otp.deleteOne({ email: trimmedEmail });

    return res.status(200).json({ success: true, message: 'Password reset successfully. You can now login.' });
  } catch (error) {
    console.error('Error resetting password:', error.message);
    return res.status(500).json({ success: false, message: 'Failed to reset password.' });
  }
};
