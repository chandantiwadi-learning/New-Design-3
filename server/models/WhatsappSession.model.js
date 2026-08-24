import mongoose from 'mongoose';

const whatsappSessionSchema = new mongoose.Schema(
  {
    customerPhone: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    hasReceivedWelcomeMessage: {
      type: Boolean,
      default: false,
    },
    processedMessageIds: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const WhatsappSession = mongoose.model('WhatsappSession', whatsappSessionSchema);
