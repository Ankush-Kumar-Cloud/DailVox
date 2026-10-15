import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import Lead from './models/Lead.js';

const app = express();
app.set('trust proxy', 1);
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '10kb' }));

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?[0-9\s-]{8,15}$/;
const clean = (v, n = 200) => String(v ?? '').trim().slice(0, n);

function validate(b) {
  const d = {
    fullName: clean(b.fullName, 100), email: clean(b.email, 150), phone: clean(b.phone, 20),
    company: clean(b.company, 150), industry: clean(b.industry, 80), agents: clean(b.agents, 40),
    requirement: clean(b.requirement, 100), contactMethod: clean(b.contactMethod, 30),
    message: clean(b.message, 1000), consent: b.consent === true, source: clean(b.source, 60),
  };
  const e = {};
  if (d.fullName.length < 2) e.fullName = 'Please enter your full name.';
  if (!EMAIL.test(d.email)) e.email = 'Please enter a valid email address.';
  if (!PHONE.test(d.phone)) e.phone = 'Please enter a valid phone number.';
  if (!d.company) e.company = 'Please enter your company name.';
  if (!d.requirement) e.requirement = 'Please choose a primary requirement.';
  if (!d.consent) e.consent = 'Consent is required so we can contact you.';
  return { d, e };
}

app.get('/api/health', (_q, r) => r.json({ ok: true, db: mongoose.connection.readyState === 1 }));

app.post('/api/leads', rateLimit({ windowMs: 3600_000, limit: 10 }), async (req, res) => {
  if (req.body.website) return res.status(201).json({ ok: true }); // honeypot: bots fill this
  const { d, e } = validate(req.body);
  if (Object.keys(e).length) return res.status(400).json({ ok: false, errors: e });
  if (mongoose.connection.readyState !== 1)
    return res.status(503).json({ ok: false, message: 'Service temporarily unavailable.' });
  try {
    await Lead.create({ ...d, ip: req.ip });
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error('Lead save failed:', err);
    res.status(500).json({ ok: false, message: 'Could not save your request.' });
  }
});

const port = process.env.PORT || 5000;
if (process.env.MONGODB_URI)
  mongoose.connect(process.env.MONGODB_URI).then(() => console.log('MongoDB connected')).catch((e) => console.error('MongoDB error:', e.message));
else console.warn('MONGODB_URI not set: lead submissions return 503 (dev mode).');
app.listen(port, () => console.log(`API on :${port}`));
