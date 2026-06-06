// BIC Platform – Interpreter Portal
// StarBound · DEVGEP+ · 2025

'use client'

import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'
import { APPOINTMENTS } from '@/data/mock'
import { formatCurrency } from '@/lib/utils'

const BADGE_STYLE: Record<string, { background: string; color: string }> = {
  confirmed:  { background: '#ecfdf5', color: '#059669' },
  unassigned: { background: '#fef2f2', color: '#ef4444' },
  pending:    { background: '#fffbeb', color: '#d97706' },
}

const STATUS_DOT: Record<string, string> = {
  confirmed:  '#12b76a',
  unassigned: '#ef4444',
  pending:    '#f59e0b',
}

const CARD: React.CSSProperties = {
  background: '#fff',
  borderRadius: '12px',
  border: '1.5px solid #e4e4e7',
  overflow: 'hidden',
}

const INTERPRETER_NAME = 'Maria Gonzalez'

export default function InterpreterPortal() {
  const myJobs = APPOINTMENTS.filter(a => a.interpreter === INTERPRETER_NAME)
  const confirmed = myJobs.filter(a => a.status === 'confirmed').length
  const hoursWorked = myJobs.length * 1.5
  const estimatedPay = myJobs.length * 85

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Sidebar role="interpreter" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#f9fafb' }}>
        <Topbar
          title="My Schedule"
          subtitle="Maria Gonzalez · Interpreter"
          action="Update availability"
        />

        <main style={{ flex: 1, overflowY: 'auto', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { label: "Today's jobs",    value: myJobs.length,              color: '#635bff', trend: `${confirmed} confirmed` },
              { label: 'Hours this week', value: `${hoursWorked}h`,          color: '#111827', trend: 'across all assignments' },
              { label: 'Estimated pay',   value: formatCurrency(estimatedPay), color: '#12b76a', trend: 'this week' },
            ].map((k, i) => (
              <div key={i} style={{ ...CARD, padding: '22px 24px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#9ca3af', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k.label}</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: k.color, letterSpacing: '-1.5px', lineHeight: 1, marginBottom: '10px' }}>{k.value}</div>
                <div style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>{k.trend}</div>
              </div>
            ))}
          </div>

          {/* Main grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '16px' }}>

            {/* My assignments */}
            <div style={CARD}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1.5px solid #e4e4e7' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>My assignments today</span>
                <span style={{ fontSize: '13px', color: '#635bff', cursor: 'pointer', fontWeight: 500 }}>View all →</span>
              </div>

              {myJobs.length === 0 ? (
                <div style={{ padding: '40px 24px', textAlign: 'center', color: '#9ca3af', fontSize: '13px' }}>
                  No assignments for today
                </div>
              ) : (
                myJobs.map(appt => (
                  <div key={appt.id} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 24px', borderBottom: '1px solid #f4f4f5' }}>
                    <span style={{ fontSize: '12px', color: '#9ca3af', width: '58px', flexShrink: 0, fontWeight: 500 }}>{appt.time}</span>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0, background: STATUS_DOT[appt.status] ?? '#d1d5db' }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#111827' }}>{appt.client}</div>
                      <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>
                        {appt.language} · {appt.location}
                      </div>
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '6px', flexShrink: 0, ...BADGE_STYLE[appt.status] }}>
                      {appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Right panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Availability */}
              <div style={CARD}>
                <div style={{ padding: '16px 20px', borderBottom: '1.5px solid #e4e4e7' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>My availability</span>
                </div>
                {[
                  { day: 'Monday',    status: 'Available',     color: '#12b76a', bg: '#ecfdf5' },
                  { day: 'Tuesday',   status: 'Available',     color: '#12b76a', bg: '#ecfdf5' },
                  { day: 'Wednesday', status: 'Busy',          color: '#635bff', bg: '#f0efff' },
                  { day: 'Thursday',  status: 'Available',     color: '#12b76a', bg: '#ecfdf5' },
                  { day: 'Friday',    status: 'Half day',      color: '#f59e0b', bg: '#fffbeb' },
                ].map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 20px', borderBottom: '1px solid #f4f4f5' }}>
                    <span style={{ fontSize: '13px', fontWeight: 500, color: '#374151' }}>{d.day}</span>
                    <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '6px', background: d.bg, color: d.color }}>{d.status}</span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div style={{ ...CARD, padding: '20px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>My languages</div>
                {[
                  { lang: 'Spanish',  level: 'Native',       jobs: 18, color: '#635bff', bg: '#f0efff' },
                  { lang: 'English',  level: 'Professional', jobs: 12, color: '#0e7490', bg: '#f0f9ff' },
                ].map((l, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: i === 0 ? '12px' : '0' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: l.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: l.color }}>{l.lang.slice(0, 2).toUpperCase()}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>{l.lang}</div>
                      <div style={{ fontSize: '11.5px', color: '#9ca3af' }}>{l.level}</div>
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>{l.jobs} jobs</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Open jobs */}
          <div style={CARD}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1.5px solid #e4e4e7' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>Open jobs near you</span>
              <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '6px', background: '#fef2f2', color: '#ef4444' }}>2 unassigned</span>
            </div>
            {APPOINTMENTS.filter(a => a.status === 'unassigned').map(appt => (
              <div key={appt.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 24px', borderBottom: '1px solid #f4f4f5' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#111827' }}>{appt.client}</div>
                  <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>{appt.time} · {appt.language} · {appt.location}</div>
                </div>
                <button style={{ background: '#635bff', color: '#fff', border: 'none', padding: '7px 16px', borderRadius: '7px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>
                  Accept
                </button>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  )
}