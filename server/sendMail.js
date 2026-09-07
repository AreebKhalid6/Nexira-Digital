import nodemailer from 'nodemailer';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function row(label, value) {
  if (!value) return '';
  return `<tr>
    <td style="padding:8px 12px;color:#64748b;font-size:13px;width:140px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;color:#0f172a;font-size:14px;">${escapeHtml(value)}</td>
  </tr>`;
}

export function validateEnquiry(body = {}) {
  const name = body.name?.trim();
  const email = body.email?.trim();

  if (!name || !email) {
    return { error: 'Name and email are required.' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Please provide a valid email address.' };
  }

  return { data: body };
}

export async function sendEnquiryEmail(body = {}) {
  const {
    name,
    email,
    phone = '',
    company = '',
    business = '',
    service = '',
    budget = '',
    timeline = '',
    details = '',
    message = '',
    source = 'Website',
    extra = {},
  } = body;

  const projectDetails = details || message || '';
  const companyName = company || business || '';
  const serviceLabel = service || extra.platform || '';

  const extraRows = Object.entries(extra)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '')
    .map(([label, value]) => [label, Array.isArray(value) ? value.join(', ') : String(value)]);

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.MAIL_TO || user;
  const fromName = process.env.MAIL_FROM_NAME || 'Nexira Digital';

  if (!user || !pass) {
    throw new Error('Email service is not configured.');
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user, pass },
  });

  const subject = `[${source}] New enquiry from ${name.trim()}${serviceLabel ? ` — ${serviceLabel}` : ''}`;

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
      <div style="background:#0F172A;padding:20px 24px;">
        <h1 style="margin:0;color:#ffffff;font-size:18px;">New website enquiry</h1>
        <p style="margin:6px 0 0;color:#94a3b8;font-size:13px;">Source: ${escapeHtml(source)}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;padding:8px;">
        ${row('Name', name)}
        ${row('Email', email)}
        ${row('Phone', phone)}
        ${row('Company', companyName)}
        ${row('Service', service)}
        ${row('Budget', budget)}
        ${row('Timeline', timeline)}
        ${row('Details', projectDetails)}
        ${extraRows.map(([label, value]) => row(label, value)).join('')}
      </table>
    </div>
  `;

  const text = [
    `New enquiry (${source})`,
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    companyName && `Company: ${companyName}`,
    service && `Service: ${service}`,
    budget && `Budget: ${budget}`,
    timeline && `Timeline: ${timeline}`,
    projectDetails && `Details: ${projectDetails}`,
    ...extraRows.map(([label, value]) => `${label}: ${value}`),
  ]
    .filter(Boolean)
    .join('\n');

  await transporter.sendMail({
    from: `"${fromName}" <${user}>`,
    to,
    replyTo: email,
    subject,
    text,
    html,
  });
}
