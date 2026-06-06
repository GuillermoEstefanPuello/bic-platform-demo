// BIC Platform – Topbar
// StarBound · DEVGEP+ · 2025

'use client'

import { useState } from 'react'

const NOTIFICATIONS = [
  { id: 1, title: 'Broward Clinic unassigned',          sub: '10:30 AM · Haitian Creole · No interpreter', time: '2m ago',  color: '#ef4444', bg: '#fef2f2' },
  { id: 2, title: 'Jackson South unassigned',           sub: '11:00 AM · Portuguese · No interpreter',    time: '5m ago',  color: '#ef4444', bg: '#fef2f2' },
  { id: 3, title: 'Invoice overdue — Dade County Court', sub: 'INV-2025-002 · $800 · Due May 30',          time: '1h ago',  color: '#f59e0b', bg: '#fffbeb' },
  { id: 4, title: 'New request from Baptist Health',    sub: 'Spanish · Tomorrow 9:00 AM · In-person',    time: '2h ago',  color: '#635bff', bg: '#f0efff' },
]

const LANGUAGES = ['Spanish', 'Portuguese', 'Haitian Creole', 'Mandarin', 'Cantonese', 'French']
const CLIENTS   = ['Memorial Hospital', 'Broward Clinic', 'Jackson South', 'Dade County Court', 'Baptist Health', 'Global Trade Corp']

interface TopbarProps {
  title: string
  subtitle?: string
  action?: string
  onAction?: () => void
}

export function Topbar({ title, subtitle, action }: TopbarProps) {
  const [bellOpen,  setBellOpen]  = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [toast,     setToast]     = useState(false)
  const [form, setForm] = useState({
    client: '', language: 'Spanish', date: '2025-06-03',
    time: '09:00', type: 'onsite', notes: '',
  })

  function handleSchedule() {
    setModalOpen(false)
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <>
      <header style={{
        height: '64px', background: '#fff', borderBottom: '1.5px solid #e4e4e7',
        display: 'flex', alignItems: 'center', gap: '12px', padding: '0 28px',
        position: 'sticky', top: 0, zIndex: 20, flexShrink: 0,
      }}>

        {/* Title */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', letterSpacing: '-0.3px', lineHeight: 1, margin: 0 }}>{title}</h1>
          {subtitle && <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '3px', lineHeight: 1, margin: '3px 0 0' }}>{subtitle}</p>}
        </div>

        {/* Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f5f5f7', border: '1.5px solid #e4e4e7', borderRadius: '8px', padding: '0 14px', height: '36px', width: '200px' }}>
          <svg width="13" height="13" fill="none" stroke="#9ca3af" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span style={{ fontSize: '13px', color: '#b0b7c3' }}>Search...</span>
        </div>

        {/* Bell */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <button onClick={() => { setBellOpen(o => !o); }} style={{ width: '36px', height: '36px', borderRadius: '8px', border: bellOpen ? '1.5px solid #635bff' : '1.5px solid #e4e4e7', background: bellOpen ? '#f0efff' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative' }}>
            <svg width="16" height="16" fill="none" stroke={bellOpen ? '#635bff' : '#9ca3af'} strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span style={{ position: 'absolute', top: '7px', right: '7px', width: '6px', height: '6px', borderRadius: '50%', background: '#635bff' }} />
          </button>
          {bellOpen && (
            <div style={{ position: 'absolute', top: '44px', right: 0, width: '340px', background: '#fff', border: '1.5px solid #e4e4e7', borderRadius: '12px', overflow: 'hidden', zIndex: 100 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1.5px solid #e4e4e7' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>Notifications</span>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#635bff', cursor: 'pointer' }}>Mark all as read</span>
              </div>
              {NOTIFICATIONS.map((n, i) => (
                <div key={n.id} style={{ display: 'flex', gap: '12px', padding: '14px 18px', borderBottom: i < NOTIFICATIONS.length - 1 ? '1px solid #f4f4f5' : 'none', cursor: 'pointer' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: n.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: n.color }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#111827', marginBottom: '2px' }}>{n.title}</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>{n.sub}</div>
                  </div>
                  <span style={{ fontSize: '10px', color: '#b0b7c3', flexShrink: 0, marginTop: '2px' }}>{n.time}</span>
                </div>
              ))}
              <div style={{ padding: '12px 18px', borderTop: '1.5px solid #e4e4e7', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#635bff', cursor: 'pointer' }}>View all notifications →</span>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        {action && (
          <button onClick={() => { setModalOpen(true); setBellOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#635bff', color: '#fff', fontSize: '13px', fontWeight: 600, padding: '0 16px', height: '36px', borderRadius: '8px', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
            <svg width="13" height="13" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
            {action}
          </button>
        )}
      </header>

      {/* ── MODAL ── */}
      {modalOpen && (
        <div onClick={() => setModalOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: '16px', width: '100%', maxWidth: '480px', margin: '0 16px', overflow: 'hidden', border: '1.5px solid #e4e4e7' }}>

            {/* Modal header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1.5px solid #e4e4e7' }}>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#111827' }}>New appointment</div>
                <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>Schedule an interpretation session</div>
              </div>
              <button onClick={() => setModalOpen(false)} style={{ width: '32px', height: '32px', borderRadius: '8px', border: '1.5px solid #e4e4e7', background: '#fff', cursor: 'pointer', fontSize: '16px', color: '#9ca3af', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
            </div>

            {/* Modal body */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Client */}
              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>Client</label>
                <select value={form.client} onChange={e => setForm(f => ({ ...f, client: e.target.value }))} style={{ width: '100%', height: '38px', borderRadius: '8px', border: '1.5px solid #e4e4e7', padding: '0 12px', fontSize: '13px', color: '#111827', background: '#fff', outline: 'none' }}>
                  <option value="">Select client...</option>
                  {CLIENTS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Language */}
              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>Language</label>
                <select value={form.language} onChange={e => setForm(f => ({ ...f, language: e.target.value }))} style={{ width: '100%', height: '38px', borderRadius: '8px', border: '1.5px solid #e4e4e7', padding: '0 12px', fontSize: '13px', color: '#111827', background: '#fff', outline: 'none' }}>
                  {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>

              {/* Date + Time */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>Date</label>
                  <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} style={{ width: '100%', height: '38px', borderRadius: '8px', border: '1.5px solid #e4e4e7', padding: '0 12px', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>Time</label>
                  <input type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} style={{ width: '100%', height: '38px', borderRadius: '8px', border: '1.5px solid #e4e4e7', padding: '0 12px', fontSize: '13px', color: '#111827', outline: 'none' }} />
                </div>
              </div>

              {/* Type */}
              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '8px' }}>Type</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[{ value: 'onsite', label: 'In-person' }, { value: 'remote', label: 'Remote' }].map(t => (
                    <button key={t.value} onClick={() => setForm(f => ({ ...f, type: t.value }))} style={{ flex: 1, height: '38px', borderRadius: '8px', border: form.type === t.value ? '2px solid #635bff' : '1.5px solid #e4e4e7', background: form.type === t.value ? '#f0efff' : '#fff', color: form.type === t.value ? '#635bff' : '#6b7280', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>Notes <span style={{ color: '#9ca3af', fontWeight: 400 }}>(optional)</span></label>
                <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} placeholder="Room number, special requirements..." rows={2} style={{ width: '100%', borderRadius: '8px', border: '1.5px solid #e4e4e7', padding: '10px 12px', fontSize: '13px', color: '#111827', resize: 'none', outline: 'none', fontFamily: 'inherit' }} />
              </div>
            </div>

            {/* Modal footer */}
            <div style={{ display: 'flex', gap: '10px', padding: '16px 24px', borderTop: '1.5px solid #e4e4e7' }}>
              <button onClick={() => setModalOpen(false)} style={{ flex: 1, height: '40px', borderRadius: '8px', border: '1.5px solid #e4e4e7', background: '#fff', color: '#6b7280', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
              <button onClick={handleSchedule} style={{ flex: 2, height: '40px', borderRadius: '8px', border: 'none', background: '#635bff', color: '#fff', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>Schedule appointment</button>
            </div>
          </div>
        </div>
      )}

      {/* ── TOAST ── */}
      {toast && (
        <div style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 300, background: '#111827', color: '#fff', padding: '14px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#12b76a', flexShrink: 0, display: 'inline-block' }} />
          Appointment scheduled successfully
        </div>
      )}
    </>
  )
}