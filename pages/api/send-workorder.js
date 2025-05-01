
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { to, subject, text } = req.body;

  try {
    await sgMail.send({
      to,
      from: 'your-email@yourdomain.com',
      subject,
      text
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('SendGrid Error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
