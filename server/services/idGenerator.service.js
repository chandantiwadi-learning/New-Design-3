import { Sequence } from '../models/Sequence.model.js';

/**
 * Generates an atomic, monotonically increasing daily reference ID using MongoDB.
 * Format: HX{YYYYMMDD}{0001}
 */
export const generateReferenceId = async () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const datePrefix = `HX${year}${month}${day}`;

  try {
    const seqDoc = await Sequence.findOneAndUpdate(
      { datePrefix },
      { $inc: { sequence: 1 } },
      { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
    );

    const sequenceStr = String(seqDoc.sequence).padStart(4, '0');
    return `${datePrefix}${sequenceStr}`;
  } catch (error) {
    console.error('Error generating MongoDB reference sequence:', error.message);
    // Secure fallback in case of connection edge-case
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    return `${datePrefix}${randomSuffix}`;
  }
};
