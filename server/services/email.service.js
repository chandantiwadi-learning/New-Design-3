import { Resend } from 'resend';
import { env } from '../config/env.js';
import { renderEmailTemplate } from '../utils/emailHelpers.js';

let resend;

if (env.RESEND_API_KEY) {
  resend = new Resend(env.RESEND_API_KEY);
} else {
  console.warn('⚠️ RESEND_API_KEY not configured. Emails will not be sent.');
}

export const sendCompanyAlert = async (data) => {
  if (!resend) return;

  if (!env.EMAIL_FROM) {
    throw new Error("Validation Error: EMAIL_FROM is missing.");
  }
  if (!env.COMPANY_EMAIL) {
    throw new Error("Validation Error: COMPANY_EMAIL is missing.");
  }

  try {
    const html = renderEmailTemplate('companyNotification.html', data);

    const { error } = await resend.emails.send({
      from: env.EMAIL_FROM,
      to: env.COMPANY_EMAIL,
      subject: `New Website Enquiry - ${data.referenceId}`,
      html,
    });
    
    if (error) {
      console.error(`[EMAIL FAILED] Company alert for Ref ${data.referenceId} failed:`, error.message);
      throw new Error(error.message);
    }
    
    console.log(`[EMAIL SENT] Company alert for Ref ${data.referenceId} sent successfully.`);
  } catch (error) {
    console.error(`[EMAIL FAILED] Error processing company alert for Ref ${data.referenceId}:`, error.message);
    throw error;
  }
};

export const sendCustomerAutoReply = async (data) => {
  if (!resend) return;

  if (!env.EMAIL_FROM) {
    throw new Error("Validation Error: EMAIL_FROM is missing.");
  }
  if (!data.email) {
    throw new Error("Validation Error: enquiry.email (customer email) is missing.");
  }

  try {
    const html = renderEmailTemplate('customerThankYou.html', data);

    const { error } = await resend.emails.send({
      from: env.EMAIL_FROM,
      to: data.email,
      subject: `Thank you for your Enquiry (Ref: ${data.referenceId})`,
      html,
    });
    
    if (error) {
      console.error(`[EMAIL FAILED] Customer auto-reply to ${data.email} failed:`, error.message);
      throw new Error(error.message);
    }

    console.log(`[EMAIL SENT] Customer auto-reply to ${data.email} sent successfully.`);
  } catch (error) {
    console.error(`[EMAIL FAILED] Error processing customer auto-reply to ${data.email}:`, error.message);
    throw error;
  }
};

export const sendAdminOTPEmail = async (email, otp) => {
  if (!resend) {
    console.log(`[MOCK EMAIL] OTP for ${email} is ${otp}`);
    return;
  }

  if (!env.EMAIL_FROM) {
    throw new Error("Validation Error: EMAIL_FROM is missing.");
  }
  if (!email) {
    throw new Error("Validation Error: Admin email is missing.");
  }

  try {
    const html = renderEmailTemplate('otp.html', { otp });

    const { error } = await resend.emails.send({
      from: env.EMAIL_FROM,
      to: email,
      subject: `Admin Password Reset OTP: ${otp}`,
      html,
    });
    
    if (error) {
      console.error(`[EMAIL FAILED] OTP email to ${email} failed:`, error.message);
      throw new Error(error.message);
    }

    console.log(`[EMAIL SENT] OTP email to ${email} sent successfully.`);
  } catch (error) {
    console.error(`[EMAIL FAILED] Error processing OTP email to ${email}:`, error.message);
    throw error;
  }
};
