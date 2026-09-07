import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ path: '.env.local' });

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const to = process.env.MAIL_TO || user;

console.log('USER', user);
console.log('TO', to);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT || 465),
  secure: true,
  auth: { user, pass },
});

try {
  await transporter.verify();
  console.log('VERIFY_OK');
  await transporter.sendMail({
    from: `"Nexira Digital" <${user}>`,
    to,
    subject: 'Nexira SMTP test',
    text: 'Google SMTP works.',
  });
  console.log('SEND_OK');
} catch (error) {
  console.error('ERR', error.message);
  process.exit(1);
}
