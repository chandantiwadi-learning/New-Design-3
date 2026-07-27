import { google } from 'googleapis';
import path from 'path';
import { env } from '../config/env.js';
import fs from 'fs';

// Initialize the sheets API only if service-account.json exists
let sheets;
const SERVICE_ACCOUNT_FILE = path.resolve(process.cwd(), env.GOOGLE_SERVICE_ACCOUNT_PATH);

if (fs.existsSync(SERVICE_ACCOUNT_FILE)) {
  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_FILE,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  sheets = google.sheets({ version: 'v4', auth });
} else {
  console.warn(`⚠️ ${SERVICE_ACCOUNT_FILE} not found. Google Sheets integration is disabled.`);
}

export const appendToSheet = async (data) => {
  if (!sheets) {
    throw new Error('Google Sheets is not configured.');
  }

  const {
    referenceId, date, time, name, email, phone, company, subject, message, ip, userAgent
  } = data;

  const values = [
    [referenceId, date, time, name, email, phone, company, subject, message, 'New']
  ];

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:J', // Adjust range to match exactly 10 columns
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });
    return response.data;
  } catch (error) {
    console.error('❌ Error appending to Google Sheets:', error.message);
    throw error;
  }
};
