
import React, { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'https://hussein-erp-backend.onrender.com';

export default function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('engazabhussein90@gmail.com');
  const [password, setPassword] = useState('Hussein@2026!Owner');
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.token) setUser(data.user);
      else alert(data.error || 'خطأ');
    } catch(e) {
      alert('Backend نائم - انتظر 30 ثانية + UptimeRobot يصحيه - حاول مرة أخرى');
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(135deg,#0a0a0a,#1a1a2e)', padding:20 }}>
        <div style={{ background:'#1a1a1a', padding:40, borderRadius:20, width:400, border:'1px solid #333' }}>
          <h1 style={{ color:'#f59e0b', textAlign:'center' }}>HUSSEIN ALAZAB ERP</h1>
          <p style={{ textAlign:'center', color:'#aaa' }}>v10.0 FREE $0 - نسخة مجانية 6 شهور - أول 20 شركة</p>
          <div style={{ background:'#0f0f0f', padding:15, borderRadius:10, margin:'20px 0', border:'1px solid #f59e0b' }}>
            <p style={{ margin:0, fontSize:12, color:'#f59e0b' }}>🔗 رابط رسمي:</p>
            <p style={{ margin:'5px 0', fontWeight:'bold' }}>https://hussein-erp.vercel.app</p>
            <p style={{ margin:0, fontSize:11, color:'#aaa' }}>Backend: {API_URL}</p>
          </div>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="البريد" style={{ width:'100%', padding:12, margin:'10px 0', borderRadius:8, background:'#0f0f0f', border:'1px solid #333', color:'#fff' }} />
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="كلمة المرور" style={{ width:'100%', padding:12, margin:'10px 0', borderRadius:8, background:'#0f0f0f', border:'1px solid #333', color:'#fff' }} />
          <button onClick={login} disabled={loading} style={{ width:'100%', padding:12, background:'#f59e0b', color:'#000', border:'none', borderRadius:8, fontWeight:'bold', cursor:'pointer' }}>
            {loading ? 'جاري الدخول...' : 'دخول - نسخة مجانية 6 شهور'}
          </button>
          <div style={{ marginTop:20, fontSize:12, color:'#888' }}>
            <p>حسابات تجريبية:</p>
            <p>المالك: engazabhussein90@gmail.com / Hussein@2026!Owner</p>
            <p>شركة 1: company1@hussein-erp.com / Trial@2026!Open</p>
          </div>
          <div style={{ marginTop:15, padding:10, background:'#0a0a0a', borderRadius:8, fontSize:11 }}>
            <p style={{ margin:0, color:'#22c55e' }}>✅ Stack $0: Vercel + Neon + Upstash + Render Free + UptimeRobot</p>
            <p style={{ margin:'5px 0 0 0', color:'#aaa' }}>لا Sleep مع UptimeRobot - 20 شركة مجاناً 6 شهور</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight:'100vh', background:'#0a0a0a', color:'#fff', padding:20 }}>
      <h1 style={{ color:'#f59e0b' }}>مرحباً {user.name} - {user.role}</h1>
      <p>نظام HUSSEIN ALAZAB ERP v10.0 FREE $0 - نسخة مجانية 6 شهور - أول 20 شركة</p>
      <p>رابطك: https://hussein-erp.vercel.app - Backend: {API_URL} - Stack $0</p>
      <div style={{ background:'#1a1a1a', padding:20, borderRadius:10, marginTop:20 }}>
        <h3>14 وحدة + 10 أدوار - جاهز للإقبال</h3>
        <p>لما تشوف إقبال (15 شركة + 8 نشطة + 3 سألت عن السعر) → نحول مدفوعة $14 + 299 ريال/شهر</p>
        <button onClick={()=>setUser(null)} style={{ padding:10, background:'#333', color:'#fff', border:'none', borderRadius:8 }}>خروج</button>
      </div>
    </div>
  );
}
