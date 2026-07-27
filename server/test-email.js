import { sendCompanyAlert, sendCustomerAutoReply } from './services/email.service.js';

const testData = {
  referenceId: 'HX202607270099',
  date: '2026-07-27',
  time: '15:30:00',
  name: 'Test Customer',
  email: 'testcustomer@example.com',
  phone: '+1234567890',
  company: 'Test Company',
  subject: 'Test Enquiry',
  message: 'This is a test message to verify the SMTP configuration.'
};

async function testEmail() {
  console.log('Sending company alert...');
  await sendCompanyAlert(testData);
  console.log('Company alert sent.');

  console.log('Sending customer auto-reply...');
  await sendCustomerAutoReply(testData);
  console.log('Customer auto-reply sent.');
}

testEmail().catch(console.error);
