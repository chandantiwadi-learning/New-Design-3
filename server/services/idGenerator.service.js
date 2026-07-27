import fs from 'fs';
import path from 'path';

// Store sequence in a local JSON file to ensure continuity across server restarts
const SEQUENCE_FILE = path.join(process.cwd(), 'sequence.json');

export const generateReferenceId = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const datePrefix = `HX${year}${month}${day}`;

  let currentSequence = 1;

  if (fs.existsSync(SEQUENCE_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(SEQUENCE_FILE, 'utf-8'));
      if (data.date === datePrefix) {
        currentSequence = data.sequence + 1;
      }
    } catch (err) {
      console.error('Error reading sequence file:', err);
    }
  }

  // Save new sequence
  fs.writeFileSync(SEQUENCE_FILE, JSON.stringify({ date: datePrefix, sequence: currentSequence }));

  const sequenceStr = String(currentSequence).padStart(4, '0');
  return `${datePrefix}${sequenceStr}`;
};
