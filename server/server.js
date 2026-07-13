import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import nodemailer from 'nodemailer';
import svgCaptcha from 'svg-captcha';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Express Session setup
app.use(session({
  secret: process.env.SESSION_SECRET || 'hex-india-fasteners-secret-key-15-years-exp',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 10 * 60 * 1000, // 10 minutes session life
    secure: false, // Set to true in HTTPS production
    sameSite: 'lax'
  }
}));

// Route to generate SVG Captcha
app.get('/api/captcha', (req, res) => {
  const captcha = svgCaptcha.create({
    size: 5,
    noise: 2,
    color: true,
    background: '#f0f0f0',
    width: 120,
    height: 45
  });

  // Store lowercase captcha code in session
  req.session.captcha = captcha.text.toLowerCase();
  
  res.type('svg');
  res.status(200).send(captcha.data);
});

// Route to handle contact form inquiries
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, securityCode, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !securityCode || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Captcha validation
  const sessionCaptcha = req.session.captcha;
  const userCaptcha = securityCode.trim().toLowerCase();

  if (!sessionCaptcha || sessionCaptcha !== userCaptcha) {
    return res.status(400).json({ error: 'Sorry, you have provided an invalid security code.' });
  }

  // Clear captcha after successful validation
  req.session.captcha = null;

  // Email template construction matching the original legacy PHP template
  const emailHtml = `
    <html>
      <head>
        <style>
          .new_test {
            font-family: Calibri, sans-serif;
            font-style: italic;
            font-size: 11px;
            color: #444;
          }
        </style>
      </head>
      <body>
        <center>
          <table rules="all" style="border:1px solid #ddd; width: 600px;" cellpadding="5" cellspacing="0" class="new_test">
            <tr style="background: #eee;">
              <td colspan="2" align="center" style="padding: 15px;">
                <a href="http://hexindiafasteners.com/" target="_blank" style="display: block; margin-bottom: 10px;">
                  <img src="http://hexindiafasteners.com/images/logo1-2.png" width="250px" alt="Hex India Fasteners">
                </a>
                <a href="http://hexindiafasteners.com" target="_blank" style="text-decoration:none; color: #0d8bc5; font-size: 13px; font-weight: bold;">
                  www.hexindiafasteners.com
                </a>
              </td>
            </tr>
            <tr>
              <td colspan="2" align="center" style="font-weight: bold; font-size: 12px; padding: 10px;">
                Product Enquiry Details - www.hexindiafasteners.com
              </td>
            </tr>
            <tr>
              <td width="30%"><strong>Name</strong></td>
              <td>${name}</td>
            </tr>
            <tr>
              <td><strong>Email ID</strong></td>
              <td><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td><strong>Mobile No</strong></td>
              <td>${phone}</td>
            </tr>
            <tr>
              <td><strong>Message</strong></td>
              <td style="white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </center>
      </body>
    </html>
  `;

  try {
    // Configure transporter - fall back to mock transporter if SMTP details are missing
    let transporter;
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
    } else {
      // Mock/development SMTP transporter
      console.log('No SMTP config found. Falling back to Ethereal/Console transporter.');
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'mock.user@ethereal.email',
          pass: 'mockpassword'
        }
      });
    }

    const emailTo = process.env.EMAIL_TO || 'amit@ecosteels.com';
    const emailBcc = process.env.EMAIL_BCC || 'nuwebwave@gmail.com';

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: emailTo,
      bcc: emailBcc,
      replyTo: email,
      subject: 'Product Enquiry Details - www.hexindiafasteners.com',
      html: emailHtml
    };

    // Log the message for debug/console delivery in dev
    console.log('----- EMAIL ENQUIRY DISPATCHED -----');
    console.log(`To: ${emailTo}`);
    console.log(`Bcc: ${emailBcc}`);
    console.log(`Sender: ${name} <${email}>`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);
    console.log('------------------------------------');

    // Actually send email (in dev it will output ethereal/success status, in prod it sends to real emails)
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Enquiry sent successfully.' });
  } catch (error) {
    console.error('Mail dispatch error:', error);
    // Don't leak SMTP details to client, but notify of failure
    return res.status(500).json({ error: 'Mail delivery failed. Please try again later.' });
  }
});

// Serve frontend static assets in production mode
const distPath = path.join(__dirname, '../client/dist');
app.use(express.static(distPath));

// Wildcard fallback to SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
