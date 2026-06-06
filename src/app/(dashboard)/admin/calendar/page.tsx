// BIC Platform – Admin Calendar
// StarBound · DEVGEP+ · 2025

'use client'

import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'
import { APPOINTMENTS, INTERPRETERS } from '@/data/mock'

const LANG_COLOR: Record<string, { bg: string; text: string; border: string }> = {
  Spanish:        { bg: '#f0efff', text: '#4b44d6', border: '#635bff' },
  'Haitian Creole': { bg: '#fef3c7', text: '#92400e', border: '#f59e0b' },
  Portuguese:     { bg: '#fce7f3', text: '#9d174d', border: '#ec4899' },
  Mandarin:       { bg: '#ecfdf5', text: '#065f46', border: '#10b981' },
}

const HOURS = ['8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM']

const TIME_TO_ROW: Record<string, number> = {
  '9:00 AM':  1,
  '10:30 AM': 2,
  '11:00 AM': 2,
  '2:00 PM':  5,
  '3:30 PM':  6,
  '4:00 PM':  7,
}

export default function AdminCalendar() {
  const assignedInterps = INTERPRETERS.slice(0, 4)
  const unassigned = APPOINTMENTS.filter(a => a.status === 'unassigned')

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Sidebar role="admin" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#f9fafb' }}>
        <Topbar title="Calendar" subtitle="Monday, June 2 · 24 appointments" action="New appointment" />

        <main style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button style={{ width: '32px', height: '32px', border: '1.5px solid #e4e4e7', borderRadius: '8px', background: '#fff', cursor: 'pointer', fontSize: '14px' }}>‹</button>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827', padding: '0 8px' }}>Monday, June 2 — 24 appointments</span>
              <button style={{ width: '32px', height: '32px', border: '1.5px solid #e4e4e7', borderRadius: '8px', background: '#fff', cursor: 'pointer', fontSize: '14px' }}>›</button>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              {['Day', 'Week', 'Month', 'List'].map((v, i) => (
                <button key={v} style={{
                  padding: '6px 14px', borderRadius: '7px', fontSize: '12px', fontWeight: 600,
                  cursor: 'pointer', border: '1.5px solid #e4e4e7',
                  background: i === 0 ? '#635bff' : '#fff',
                  color: i === 0 ? '#fff' : '#6b7280',
                }}>{v}</button>
              ))}
            </div>
          </div>

          {/* Language filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>Filter:</span>
            {['All', 'Spanish', 'Portuguese', 'Haitian Creole', 'Unassigned'].map((f, i) => (
              <button key={f} style={{
                padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 500,
                cursor: 'pointer', border: '1.5px solid #e4e4e7',
                background: i === 0 ? '#111827' : '#fff',
                color: i === 0 ? '#fff' : '#6b7280',
              }}>{f}</button>
            ))}
          </div>

          {/* Calendar grid */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1.5px solid #e4e4e7', overflow: 'hidden', flex: 1 }}>

            {/* Header — interpreter columns */}
            <div style={{ display: 'grid', gridTemplateColumns: '64px repeat(4, 1fr) 140px', borderBottom: '1.5px solid #e4e4e7' }}>
              <div style={{ padding: '12px', borderRight: '1px solid #f4f4f5' }} />
              {assignedInterps.map(interp => (
                <div key={interp.id} style={{ padding: '12px 16px', borderRight: '1px solid #f4f4f5', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: interp.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 700, flexShrink: 0 }}>{interp.initials}</div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#111827' }}>{interp.name.split(' ')[0]}</div>
                    <div style={{ fontSize: '10px', color: '#9ca3af' }}>{interp.languages[0]}</div>
                  </div>
                </div>
              ))}
              <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#ef4444' }}>Unassigned</span>
              </div>
            </div>

            {/* Time rows */}
            <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 320px)' }}>
              {HOURS.map((hour, rowIdx) => (
                <div key={hour} style={{ display: 'grid', gridTemplateColumns: '64px repeat(4, 1fr) 140px', borderBottom: '1px solid #f4f4f5', minHeight: '60px' }}>
                  {/* Hour label */}
                  <div style={{ padding: '8px', borderRight: '1px solid #f4f4f5', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 500 }}>{hour}</span>
                  </div>

                  {/* Interpreter columns */}
                  {assignedInterps.map(interp => {
                    const appt = APPOINTMENTS.find(a =>
                      a.interpreter === interp.name &&
                      TIME_TO_ROW[a.time] === rowIdx
                    )
                    const colors = appt ? LANG_COLOR[appt.language] ?? { bg: '#f3f4f6', text: '#374151', border: '#d1d5db' } : null
                    return (
                      <div key={interp.id} style={{ padding: '4px 6px', borderRight: '1px solid #f4f4f5', minHeight: '60px' }}>
                        {appt && colors && (
                          <div style={{
                            background: colors.bg,
                            borderLeft: `3px solid ${colors.border}`,
                            borderRadius: '6px',
                            padding: '6px 10px',
                            cursor: 'pointer',
                          }}>
                            <div style={{ fontSize: '11.5px', fontWeight: 700, color: colors.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{appt.client}</div>
                            <div style={{ fontSize: '10px', color: colors.text, opacity: 0.8, marginTop: '2px' }}>{appt.language} · {appt.time}</div>
                          </div>
                        )}
                      </div>
                    )
                  })}

                  {/* Unassigned column */}
                  <div style={{ padding: '4px 6px', minHeight: '60px' }}>
                    {unassigned.filter(a => TIME_TO_ROW[a.time] === rowIdx).map(appt => (
                      <div key={appt.id} style={{
                        background: '#fef2f2',
                        borderLeft: '3px solid #ef4444',
                        borderRadius: '6px',
                        padding: '6px 10px',
                        marginBottom: '4px',
                        cursor: 'pointer',
                      }}>
                        <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#ef4444', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{appt.client}</div>
                        <div style={{ fontSize: '10px', color: '#ef4444', opacity: 0.8, marginTop: '2px' }}>{appt.language} · {appt.time}</div>
                        <button style={{ marginTop: '4px', fontSize: '10px', fontWeight: 600, color: '#fff', background: '#ef4444', border: 'none', borderRadius: '4px', padding: '2px 8px', cursor: 'pointer' }}>Assign →</button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}