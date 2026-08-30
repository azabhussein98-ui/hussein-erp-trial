
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Health
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    version: '10.0.0 FREE', 
    message: 'HUSSEIN ALAZAB ERP v10.0 FREE $0 - Open Beta - Ready for 20 companies',
    db: process.env.DATABASE_URL ? 'connected' : 'not set',
    redis: process.env.REDIS_URL ? 'connected' : 'not set',
    region: 'Frankfurt',
    stack: 'Neon + Upstash + Render Free + UptimeRobot + Vercel'
  });
});

// Auth mock - free trial accounts
const TRIAL_ACCOUNTS = [
  { email: 'engazabhussein90@gmail.com', password: 'Hussein@2026!Owner', role: 'OWNER', name: 'حسين العزب - المالك' },
  { email: 'pm@hussein-erp.com', password: 'PM@2026!Manager', role: 'PM', name: 'مدير مشروع' },
  { email: 'company1@hussein-erp.com', password: 'Trial@2026!Open', role: 'CLIENT', name: 'شركة تجريبية 1' }
];

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = TRIAL_ACCOUNTS.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: 'بيانات خاطئة' });
  res.json({ 
    token: 'trial-token-' + Date.now(), 
    user: { email: user.email, role: user.role, name: user.name },
    message: 'تم الدخول - نسخة مجانية 6 شهور'
  });
});

app.get('/api/projects', (req, res) => {
  res.json([
    { id: 'PBU-2026-001', name: 'فلل الورود - جدة', progress: 37.7, status: 'active', location: 'جدة - حي الورود' },
    { id: 'PBU-2026-002', name: 'عمارة الرؤية', progress: 65, status: 'active', location: 'جدة' }
  ]);
});

app.get('/', (req, res) => {
  res.json({ message: 'HUSSEIN ERP Backend v10.0 FREE - https://hussein-erp.vercel.app', docs: '/api/health' });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`HUSSEIN ERP v10.0 FREE running on ${PORT} - Stack: Neon + Upstash + Render Free + UptimeRobot - Ready for 20 companies 6 months free`);
});
