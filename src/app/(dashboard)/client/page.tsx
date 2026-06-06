// BIC Platform – Client Portal
// StarBound · DEVGEP+ · 2025

'use client'

import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'
import { APPOINTMENTS, INVOICES } from '@/data/mock'
import { formatCurrency } from '@/lib/utils'

const BADGE_STYLE: Record<string, { background: string; color: string }> = {
  confirmed:  { background: '#ecfdf5', color: '#059669' },
  unassigned: { background: '#fef2f2', color: '#ef4444' },
  pending:    { background: '#fffbeb', color: '#d97706' },
  paid:       { background: '#ecfdf5', color: '#059669' },
  overdue:    { background: '#fef2f2', color: '#ef4444' },
  sent:       { background: '#eff6ff', color: '#2563eb' },
  draft:      { background: '#f9fafb', color: '#6b7280' },
}

const STATUS_DOT: Record<string, string> = {
  confirmed:  '#12b76a',
  unassigned: '#ef4444',
  pending:    '#f59e0b',
}

const CLIENT_NAME = 'Memorial Hospital'

export default function ClientPortal() {
  const myAppointments = APPOINTMENTS.filter(a => a.client === CLIENT_NAME)
  const myInvoices     = INVOICES.filter(i => i.client === CLIENT_NAME)
  const pending        = myAppointments.filter(a => a.status === 'pending').length
  const balanceDue     = myInvoices
    .filter(i => i.status === 'overdue' || i.status === 'sent')
    .reduce((sum, i) => sum + i.amount, 0)

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Sidebar role="client" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#fff' }}>
        <Topbar
          title="Dashboard"
          subtitle={`${CLIENT_NAME} · June 2026`}
          action="Request interpreter"
        />

        <main style={{ flex: 1, overflowY: 'auto' }}>

          {/* KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '1px solid #e5e7eb' }}>
            {[
              { label: 'This month',  value: myAppointments.length, color: '#635bff', sub: 'appointments' },
              { label: 'Pending',     value: pending,                color: '#f59e0b', sub: 'need confirmation' },
              { label: 'Balance due', value: formatCurrency(balanceDue), color: balanceDue > 0 ? '#ef4444' : '#12b76a', sub: balanceDue > 0 ? 'overdue invoice' : 'all clear' },
            ].map((k, i) => (
              <div key={i} style={{ padding: '24px', borderRight: i < 2 ? '1px solid #e5e7eb' : 'none' }}>
                <div style={{ fontSize: '11px', fontWeight: 500, color: '#9ca3af', marginBottom: '12px' }}>{k.label}</div>
                <div style={{ fontSize: '28px', fontWeight: 700, color: k.color, letterSpacing: '-1px', lineHeight: 1, marginBottom: '6px' }}>{k.value}</div>
                <div style={{ fontSize: '11px', color: '#9ca3af' }}>{k.sub}</div>
              </div>
            ))}
          </div>

          {/* Main grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', borderBottom: '1px solid #e5e7eb' }}>

            {/* Upcoming appointments */}
            <div style={{ borderRight: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>Upcoming appointments</span>
                <span style={{ fontSize: '11.5px', color: '#635bff', cursor: 'pointer' }}>View all →</span>
              </div>

              {myAppointments.length === 0 ? (
                <div style={{ padding: '32px 24px', textAlign: 'center', color: '#9ca3af', fontSize: '12px' }}>
                  No appointments scheduled
                </div>
              ) : (
                myAppointments.map(appt => (
                  <div key={appt.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 24px', borderBottom: '1px solid #f9fafb' }}>
                    <span style={{ fontSize: '11px', color: '#9ca3af', width: '52px', flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>{appt.time}</span>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0, background: STATUS_DOT[appt.status] ?? '#d1d5db' }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '12.5px', fontWeight: 500, color: '#111827' }}>{appt.language} interpretation</div>
                      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>
                        {appt.interpreter ?? 'Pending assignment'} · {appt.location}
                      </div>
                    </div>
                    <span style={{ fontSize: '10px', fontWeight: 500, padding: '2px 8px', borderRadius: '4px', flexShrink: 0, ...BADGE_STYLE[appt.status] }}>
                      {appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Right panel */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>

              {/* Quick actions */}
              <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ padding: '14px 20px', borderBottom: '1px solid #f3f4f6' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>Quick actions</span>
                </div>
                {[
                  { label: 'Request new interpreter',  sub: 'Schedule an appointment',   color: '#635bff', bg: '#f0efff' },
                  { label: 'Download last invoice',    sub: 'INV-2025-001 · $1,350',     color: '#059669', bg: '#ecfdf5' },
                  { label: 'Contact support',          sub: 'Mon–Fri 9am–6pm EST',        color: '#2563eb', bg: '#eff6ff' },
                ].map((action, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 20px', borderBottom: '1px solid #f9fafb', cursor: 'pointer' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: action.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: action.color }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '12px', fontWeight: 500, color: '#374151' }}>{action.label}</div>
                      <div style={{ fontSize: '10.5px', color: '#9ca3af' }}>{action.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Usage summary */}
              <div style={{ padding: '16px 20px', flex: 1 }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '12px' }}>This month</div>
                {[
                  { label: 'Spanish',   count: myAppointments.filter(a => a.language === 'Spanish').length,   color: '#635bff' },
                  { label: 'Portuguese',count: myAppointments.filter(a => a.language === 'Portuguese').length, color: '#0e7490' },
                  { label: 'Mandarin',  count: myAppointments.filter(a => a.language === 'Mandarin').length,  color: '#065f46' },
                ].filter(l => l.count > 0).map((lang, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: lang.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '11px', color: '#374151', flex: 1 }}>{lang.label}</span>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#111827' }}>{lang.count} session{lang.count !== 1 ? 's' : ''}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Invoices */}
          <div style={{ padding: '20px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>My invoices</span>
              {balanceDue > 0 && (
                <span style={{ fontSize: '11px', fontWeight: 500, color: '#ef4444' }}>{formatCurrency(balanceDue)} outstanding</span>
              )}
            </div>
            {myInvoices.map(inv => (
              <div key={inv.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '10px 0', borderBottom: '1px solid #f9fafb' }}>
                <span style={{ fontSize: '12px', fontWeight: 500, color: '#635bff', width: '120px', flexShrink: 0 }}>{inv.id}</span>
                <span style={{ fontSize: '12.5px', fontWeight: 500, color: '#111827', flex: 1 }}>{inv.services} services</span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>{formatCurrency(inv.amount)}</span>
                <span style={{ fontSize: '10px', fontWeight: 500, padding: '2px 8px', borderRadius: '4px', ...BADGE_STYLE[inv.status] }}>
                  {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
                </span>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  )
}