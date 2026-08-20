import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    referenceId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      default: 'N/A',
      trim: true,
    },
    country: {
      type: String,
      default: 'N/A',
      trim: true,
    },
    subject: {
      type: String,
      default: 'N/A',
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    ip: {
      type: String,
      default: 'N/A',
    },
    userAgent: {
      type: String,
      default: 'N/A',
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Enquiry = mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);
