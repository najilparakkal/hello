const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');

admin.initializeApp();

// SendGrid configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey', // Literally the string 'apikey'
    pass: functions.config().sendgrid.key
  }
});

exports.sendContactEmail = functions.https.onCall(async (data, context) => {
  // Validate required fields
  if (!data.name || !data.email || !data.comment) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Name, email, and message are required'
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Invalid email format'
    );
  }

  try {
    const { name, email, phone, comment } = data;

    await transporter.sendMail({
      from: 'your-verified-sendgrid-email@yourdomain.com', // Use your verified sender
      replyTo: email, // Allow replies to go to the submitter
      to: 'najilparakkal@gmail.com',
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nMessage: ${comment}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${comment}</p>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new functions.https.HttpsError(
      'internal',
      'Failed to send email',
      error.message
    );
  }
});