import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { Admin } from '../models/Admin.model.js';

export const requireAdmin = async (req, res, next) => {
  let token = req.cookies?.adminToken || req.cookies?.token;

  if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Authentication token missing or invalid.',
    });
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET);
    const admin = await Admin.findOne({ email: decoded.email?.toLowerCase() });

    if (!admin && decoded.email?.toLowerCase() !== (env.ADMIN_EMAIL || '').toLowerCase()) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: Insufficient administrative privileges.',
      });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Session expired or token invalid.',
    });
  }
};
