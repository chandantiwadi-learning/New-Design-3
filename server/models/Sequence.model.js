import mongoose from 'mongoose';

const sequenceSchema = new mongoose.Schema(
  {
    datePrefix: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    sequence: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Sequence = mongoose.models.Sequence || mongoose.model('Sequence', sequenceSchema);
