import { verifyTurnstile } from '../services/turnstile.service.js';
import { generateReferenceId } from '../services/idGenerator.service.js';
import { sendCompanyAlert, sendCustomerAutoReply } from '../services/email.service.js';
import { Enquiry } from '../models/Enquiry.model.js';

export const submitEnquiry = async (req, res, next) => {
  const startTime = Date.now();
  console.log(`\n======================================================`);
  console.log(`[ENQUIRY] STEP 1: Request received from IP: ${req.ip}`);
  
  try {
    const { name, email, phone, company, country, subject, message, turnstileToken } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // STEP 2 & 3: Turnstile Verification
    console.log(`[ENQUIRY] STEP 2: Turnstile verification starting...`);
    let isValidCaptcha = false;
    try {
      isValidCaptcha = await verifyTurnstile(turnstileToken, ip);
      console.log(`[ENQUIRY] STEP 3: Turnstile verification result: ${isValidCaptcha}`);
    } catch (turnstileError) {
      console.error(`[ENQUIRY] ❌ ERROR during Turnstile verification:`, turnstileError.message);
      return res.status(500).json({ success: false, message: 'Turnstile service failure.' });
    }

    if (!isValidCaptcha) {
      console.warn(`[ENQUIRY] ❌ Invalid CAPTCHA from IP: ${ip}`);
      return res.status(400).json({ success: false, message: 'Invalid CAPTCHA' });
    }
    console.log(`✔ Turnstile verified`);

    // Generate Atomic Reference ID from MongoDB Sequence
    const referenceId = await generateReferenceId();
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0];
    const userAgent = req.headers['user-agent'] || 'Unknown';

    const enquiryData = {
      referenceId, date, time, name, email, phone, company: company || 'N/A', country: country || 'N/A', subject: subject || 'N/A', message, ip, userAgent
    };

    console.log(`[ENQUIRY] 🆔 Generated Reference ID: ${referenceId}`);

    // STEP 4: Store in MongoDB Database
    console.log(`[ENQUIRY] STEP 4: Saving enquiry to MongoDB...`);
    try {
      await Enquiry.create(enquiryData);
      console.log(`✔ Enquiry stored in MongoDB: ${referenceId}`);
    } catch (dbError) {
      console.error(`[ENQUIRY DB ERROR] Failed to save enquiry to MongoDB:`, dbError.message);
    }

    // STEP 5: Send Company Email
    console.log(`[ENQUIRY] STEP 6: Company email sending...`);
    try {
      await sendCompanyAlert(enquiryData);
      console.log(`[ENQUIRY] STEP 7: Company email success!`);
      console.log(`✔ Company email sent`);
    } catch (companyEmailError) {
      console.error(`[ENQUIRY] ❌ Company email failed:`, companyEmailError.message);
    }

    // STEP 7: Send Customer Email
    console.log(`[ENQUIRY] STEP 8: Customer email sending...`);
    try {
      await sendCustomerAutoReply(enquiryData);
      console.log(`[ENQUIRY] STEP 9: Customer email success!`);
      console.log(`✔ Customer email sent`);
    } catch (customerEmailError) {
      console.error(`[ENQUIRY] ❌ Customer email failed:`, customerEmailError.message);
    }

    const processingTime = Date.now() - startTime;
    console.log(`[ENQUIRY] ⏱️ Completed in ${processingTime}ms`);

    // STEP 8: Return HTTP response
    console.log(`[ENQUIRY] STEP 10: Returning HTTP response...`);
    console.log(`✔ API response sent\n======================================================\n`);
    return res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully.',
      referenceId,
    });
  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error(`[ENQUIRY] ❌ Unexpected Error after ${processingTime}ms:`, error.message);
    
    return res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
  }
};

// Fetch all enquiries (Admin & Super Admin)
export const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: enquiries });
  } catch (error) {
    console.error(`[ENQUIRY] ❌ Error fetching enquiries:`, error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch enquiries.' });
  }
};

// Update an enquiry (Super Admin only)
export const updateEnquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const enquiry = await Enquiry.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    }

    res.status(200).json({ success: true, message: 'Enquiry updated successfully.', data: enquiry });
  } catch (error) {
    console.error(`[ENQUIRY] ❌ Error updating enquiry:`, error.message);
    res.status(500).json({ success: false, message: 'Failed to update enquiry.' });
  }
};
