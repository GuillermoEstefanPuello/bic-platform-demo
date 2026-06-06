// BIC Platform – Admin Requests
// StarBound · DEVGEP+ · 2025

'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'

const REQUESTS = [
  { id: 'REQ-001', client: 'Memorial Hospital',   language: 'Spanish',        date: 'Jun 4, 2025', time: '9:00 AM',  type: 'onsite',  location: 'Room 3B',       urgency: 'normal', status: 'pending',  notes: 'Patient speaks only Spanish, needs certified interpreter' },
  { id: 'REQ-002', client: 'Broward Clinic',       language: 'Haitian Creole', date: 'Jun 4, 2025', time: '10:30 AM', type: 'onsite',  location: 'Consultation A', urgency: 'urgent', status: 'pending',  notes: 'Urgent — patient arriving from Haiti, no English' },
  { id: 'REQ-003', client: 'Jackson South',        language: 'Portuguese',     date: 'Jun 4, 2025', time: '11:00 AM', type: 'onsite',  location: 'ER Bay 4',      urgency: 'urgent', status: 'pending',  notes: 'Emergency room — ASAP' },
  { id: 'REQ-004', client: 'Dade County Court',    language: 'Spanish',        date: 'Jun 5, 2025', time: '2:00 PM',  type: 'onsite',  location: 'Courtroom 7',   urgency: 'normal', status: 'approved', notes: 'Legal deposition, certified interpreter required' },
  { id: 'REQ-005', client: 'Global Trade Corp',    language: 'Mandarin',       date: 'Jun 5, 2025', time: '4:00 PM',  type: 'remote',  location: 'Zoom call',     urgency: 'low',    status: 'approved', notes: 'Business negotiation, tech terminology' },
  { id: 'REQ-006', client: 'Baptist Health',       language: 'Spanish',        date: 'Jun 6, 2025', time: '8:00 AM',  type: 'onsite',  location: 'Pediatrics',    urgency: 'normal', status: 'pending',  notes: 'Pediatric consultation' },
  { id: 'REQ-007', client: 'South Miami Hospital', language: 'Portuguese',     date: 'Jun 6, 2025', time: '1:00 PM',  type: 'onsite',  location: 'Ward B',        urgency: 'low',    status: 'declined', notes: 'Routine checkup' },
]

const URGENCY_STYLE: Record<string, { bg: string; color: string }> = {
  urgent: { bg: '#fef2f2', color: '#ef4444' },
  normal: { bg: '#fffbeb', color: '#d97706' },
  low:    { bg: '#f0fdf4', color: '#16a34a' },
}

const STATUS_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  pending:  { bg: '#fffbeb', color: '#d97706', label: 'Pending' },
  approved: { bg: '#ecfdf5', color: '#059669', label: 'Approved' },
  declined: { bg: '#fef2f2', color: '#ef4444', label: 'Declined' },
}

const LANG_COLOR: Record<string, string> = {
  Spanish:          '#635bff',
  'Haitian Creole': '#f59e0b',
  Portuguese:       '#ec4899',
  Mandarin:         '#10b981',
}

const CARD: React.CSSProperties = {
  background: '#fff', borderRadius: '12px',
  border: '1.5px solid #e4e4e7', overflow: 'hidden',
}

export default function AdminRequests() {
  const [filter, setFilter] = useState('All')
  const [toast,  setToast]  = useState('')

  const pending  = REQUESTS.filter(r => r.status === 'pending').length
  const urgent   = REQUESTS.filter(r => r.urgency === 'urgent').length
  const approved = REQUESTS.filter(r => r.status === 'approved').length

  const filtered = filter === 'All' ? REQUESTS
    : filter === 'Urgent'   ? REQUESTS.filter(r => r.urgency === 'urgent')
    : filter === 'Pending'  ? REQUESTS.filter(r => r.status === 'pending')
    : filter === 'Approved' ? REQUESTS.filter(r => r.status === 'approved')
    : REQUESTS.filter(r => r.language === filter)

  function handleAction(id: string, action: 'approve' | 'decline') {
    setToast(action === 'approve' ? `${id} approved — assigning interpreter...` : `${id} declined`)
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Sidebar role="admin" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#f9fafb' }}>
        <Topbar title="Requests" subtitle="Incoming interpretation requests" action="New appointment" />

        <main style={{ flex: 1, overflowY: 'auto', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { label: 'Total requests',  value: REQUESTS.length, color: '#111827', trend: 'this week' },
              { label: 'Pending review',  value: pending,          color: '#f59e0b', trend: 'need action' },
              { label: 'Urgent',          value: urgent,           color: '#ef4444', trend: 'high priority' },
              { label: 'Approved',        value: approved,         color: '#12b76a', trend: 'this week' },
            ].map((k, i) => (
              <div key={i} style={{ ...CARD, padding: '22px 24px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#9ca3af', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k.label}</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: k.color, letterSpacing: '-1.5px', lineHeight: 1, marginBottom: '10px' }}>{k.value}</div>
                <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>{k.trend}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>Filter:</span>
            {['All', 'Urgent', 'Pending', 'Approved', 'Spanish', 'Portuguese'].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{ padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 500, cursor: 'pointer', border: '1.5px solid #e4e4e7', background: filter === f ? '#111827' : '#fff', color: filter === f ? '#fff' : '#6b7280' }}>{f}</button>
            ))}
          </div>

          {/* Request cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filtered.map(req => {
              const urg = URGENCY_STYLE[req.urgency]
              const sta = STATUS_STYLE[req.status]
              const lc  = LANG_COLOR[req.language] ?? '#635bff'
              return (
                <div key={req.id} style={{ ...CARD, padding: '20px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>

                    {/* Left */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#635bff' }}>{req.id}</span>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>{req.client}</span>
                        <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '6px', background: `${lc}18`, color: lc }}>{req.language}</span>
                        <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '6px', background: urg.bg, color: urg.color }}>{req.urgency.charAt(0).toUpperCase() + req.urgency.slice(1)}</span>
                        <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '6px', background: sta.bg, color: sta.color }}>{sta.label}</span>
                      </div>

                      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '8px' }}>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>📅 {req.date}</span>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>🕐 {req.time}</span>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>{req.type === 'onsite' ? '📍' : '💻'} {req.location}</span>
                      </div>

                      <div style={{ fontSize: '12px', color: '#9ca3af', fontStyle: 'italic' }}>{req.notes}</div>
                    </div>

                    {/* Actions */}
                    {req.status === 'pending' && (
                      <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                        <button onClick={() => handleAction(req.id, 'decline')} style={{ padding: '8px 16px', borderRadius: '8px', border: '1.5px solid #e4e4e7', background: '#fff', color: '#6b7280', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>
                          Decline
                        </button>
                        <button onClick={() => handleAction(req.id, 'approve')} style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: '#635bff', color: '#fff', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>
                          Assign interpreter →
                        </button>
                      </div>
                    )}
                    {req.status === 'approved' && (
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#059669', background: '#ecfdf5', padding: '8px 16px', borderRadius: '8px', flexShrink: 0 }}>✓ Assigned</span>
                    )}
                    {req.status === 'declined' && (
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#ef4444', background: '#fef2f2', padding: '8px 16px', borderRadius: '8px', flexShrink: 0 }}>✕ Declined</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

        </main>
      </div>

      {/* Toast */}
      {toast && (
        <div style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 300, background: '#111827', color: '#fff', padding: '14px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#12b76a', flexShrink: 0, display: 'inline-block' }} />
          {toast}
        </div>
      )}
    </div>
  )
}