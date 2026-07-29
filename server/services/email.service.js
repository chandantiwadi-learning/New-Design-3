import { Resend } from 'resend';
import { env } from '../config/env.js';

let resend;

if (env.RESEND_API_KEY) {
  resend = new Resend(env.RESEND_API_KEY);
} else {
  console.warn('⚠️ RESEND_API_KEY not configured. Emails will not be sent.');
}

export const sendCompanyAlert = async (data) => {
  if (!resend) return;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #0D8BC5;">New Website Enquiry</h2>
      <p><strong>Reference ID:</strong> ${data.referenceId}</p>
      <p><strong>Date/Time:</strong> ${data.date} ${data.time}</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
      <p><strong>Subject:</strong> ${data.subject || 'N/A'}</p>
      <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: env.MAIL_FROM,
    to: [env.EMAIL_TO],
    bcc: env.EMAIL_BCC ? [env.EMAIL_BCC] : undefined,
    subject: `New Website Enquiry - ${data.referenceId}`,
    html,
  });
  
  if (error) {
    throw new Error(error.message);
  }
};

export const sendCustomerAutoReply = async (data) => {
  if (!resend) return;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #0D8BC5;">Thank you for contacting HEX INDIA</h2>
      <p>Dear ${data.name},</p>
      <p>We have successfully received your enquiry. Our team will review your message and get back to you shortly.</p>
      <p><strong>Your Reference ID:</strong> ${data.referenceId}</p>
      <p>If you have any urgent queries, please reply to this email or call us directly.</p>
      <br/>
      <p>Best Regards,</p>
      <p><strong>The HEX INDIA Team</strong></p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: env.MAIL_FROM,
    to: [data.email],
    subject: `Thank you for your Enquiry (Ref: ${data.referenceId})`,
    html,
  });
  
  if (error) {
    throw new Error(error.message);
  }
};
