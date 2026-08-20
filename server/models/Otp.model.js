import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    hashedOtp: {
      type: String,
      default: null,
    },
    resetToken: {
      type: String,
      default: null,
      index: true,
    },
    attempts: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 600, // MongoDB TTL index: automatically deletes document after 10 minutes (600 seconds)
    },
  },
  {
    timestamps: true,
  }
);

export const Otp = mongoose.models.Otp || mongoose.model('Otp', otpSchema);
