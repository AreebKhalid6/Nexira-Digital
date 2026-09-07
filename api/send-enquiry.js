import { sendEnquiryEmail, validateEnquiry } from '../server/sendMail.js';

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 8;
const hits = new Map();

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = hits.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  entry.count += 1;
  hits.set(ip, entry);
  return entry.count > RATE_MAX;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again shortly.' });
  }

  const validated = validateEnquiry(req.body);
  if (validated.error) {
    return res.status(400).json({ error: validated.error });
  }

  try {
    await sendEnquiryEmail(validated.data);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('SMTP send failed:', error);
    return res.status(500).json({
      error: error.message === 'Email service is not configured.'
        ? 'Email service is not configured.'
        : 'Failed to send enquiry. Please try again.',
    });
  }
}
