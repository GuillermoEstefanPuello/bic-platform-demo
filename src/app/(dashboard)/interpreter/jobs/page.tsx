// BIC Platform – Interpreter Jobs
// StarBound · DEVGEP+ · 2025

'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'
import { formatCurrency } from '@/lib/utils'

const JOBS = [
  { id: 'JOB-001', client: 'Broward Clinic',       language: 'Haitian Creole', date: 'Today',    time: '10:30 AM', type: 'onsite',  location: 'Consultation A', distance: '2.1 mi', pay: 95,  urgency: 'urgent', duration: '1h' },
  { id: 'JOB-002', client: 'Jackson South',        language: 'Portuguese',     date: 'Today',    time: '11:00 AM', type: 'onsite',  location: 'ER Bay 4',      distance: '3.4 mi', pay: 110, urgency: 'urgent', duration: '1.5h' },
  { id: 'JOB-003', client: 'South Miami Hospital', language: 'Spanish',        date: 'Tomorrow', time: '9:00 AM',  type: 'onsite',  location: 'Ward B',        distance: '5.2 mi', pay: 85,  urgency: 'normal', duration: '1h' },
  { id: 'JOB-004', client: 'Global Trade Corp',    language: 'Spanish',        date: 'Tomorrow', time: '2:00 PM',  type: 'remote',  location: 'Zoom call',     distance: 'Remote', pay: 75,  urgency: 'normal', duration: '45m' },
  { id: 'JOB-005', client: 'Dade County Court',    language: 'Spanish',        date: 'Jun 6',    time: '8:30 AM',  type: 'onsite',  location: 'Courtroom 3',   distance: '4.8 mi', pay: 130, urgency: 'normal', duration: '2h' },
]

const URGENCY_STYLE: Record<string, { bg: string; color: string }> = {
  urgent: { bg: '#fef2f2', color: '#ef4444' },
  normal: { bg: '#fffbeb', color: '#d97706' },
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

export default function InterpreterJobs() {
  const [accepted, setAccepted] = useState<string[]>([])
  const [toast, setToast] = useState('')

  function handleAccept(id: string, client: string) {
    setAccepted(a => [...a, id])
    setToast(`${id} accepted — ${client} notified`)
    setTimeout(() => setToast(''), 3000)
  }

  const totalPay = JOBS
    .filter(j => accepted.includes(j.id))
    .reduce((s, j) => s + j.pay, 0)

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Sidebar role="interpreter" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#f9fafb' }}>
        <Topbar title="Find Jobs" subtitle="Available interpretation jobs near you" />

        <main style={{ flex: 1, overflowY: 'auto', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { label: 'Available jobs',  value: JOBS.length,              color: '#635bff', trend: 'matching your languages' },
              { label: 'Urgent today',    value: JOBS.filter(j => j.urgency === 'urgent').length, color: '#ef4444', trend: 'need immediate fill' },
              { label: 'Potential earn',  value: formatCurrency(JOBS.reduce((s,j) => s + j.pay, 0)), color: '#12b76a', trend: 'if you accept all' },
            ].map((k, i) => (
              <div key={i} style={{ ...CARD, padding: '22px 24px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#9ca3af', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k.label}</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: k.color, letterSpacing: '-1.5px', lineHeight: 1, marginBottom: '10px' }}>{k.value}</div>
                <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>{k.trend}</div>
              </div>
            ))}
          </div>

          {/* Accepted summary */}
          {accepted.length > 0 && (
            <div style={{ ...CARD, padding: '16px 24px', background: '#f0efff', border: '1.5px solid #635bff' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#635bff' }} />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#635bff' }}>{accepted.length} job{accepted.length > 1 ? 's' : ''} accepted today</span>
                </div>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#635bff' }}>{formatCurrency(totalPay)} earned</span>
              </div>
            </div>
          )}

          {/* Filters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>Filter:</span>
            {['All', 'Urgent', 'Today', 'Remote', 'Spanish'].map((f, i) => (
              <button key={f} style={{ padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 500, cursor: 'pointer', border: '1.5px solid #e4e4e7', background: i === 0 ? '#111827' : '#fff', color: i === 0 ? '#fff' : '#6b7280' }}>{f}</button>
            ))}
          </div>

          {/* Job cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {JOBS.map(job => {
              const isAccepted = accepted.includes(job.id)
              const urg = URGENCY_STYLE[job.urgency]
              const lc  = LANG_COLOR[job.language] ?? '#635bff'
              return (
                <div key={job.id} style={{ ...CARD, padding: '20px 24px', opacity: isAccepted ? 0.7 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>

                    {/* Pay badge */}
                    <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: '#f0efff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '16px', fontWeight: 800, color: '#635bff', letterSpacing: '-0.5px' }}>${job.pay}</span>
                      <span style={{ fontSize: '9px', color: '#9ca3af', fontWeight: 500 }}>{job.duration}</span>
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>{job.client}</span>
                        <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '6px', background: `${lc}18`, color: lc }}>{job.language}</span>
                        {job.urgency === 'urgent' && (
                          <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '6px', background: urg.bg, color: urg.color }}>Urgent</span>
                        )}
                      </div>
                      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>📅 {job.date} · {job.time}</span>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>{job.type === 'onsite' ? '📍' : '💻'} {job.location}</span>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>📏 {job.distance}</span>
                      </div>
                    </div>

                    {/* Action */}
                    {isAccepted ? (
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669', background: '#ecfdf5', padding: '10px 16px', borderRadius: '8px', flexShrink: 0 }}>✓ Accepted</span>
                    ) : (
                      <button onClick={() => handleAccept(job.id, job.client)} style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#635bff', color: '#fff', fontSize: '13px', fontWeight: 700, cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap' }}>
                        Accept →
                      </button>
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