// BIC Platform – Admin Dashboard
// StarBound · DEVGEP+ · 2025

'use client'

import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'
import { APPOINTMENTS, INTERPRETERS, INVOICES, MONTHLY_REVENUE, STATS } from '@/data/mock'
import { formatCurrency } from '@/lib/utils'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

const STATUS_COLOR: Record<string, string> = {
  confirmed:  '#12b76a',
  unassigned: '#ef4444',
  pending:    '#f59e0b',
}

const BADGE_STYLE: Record<string, { background: string; color: string }> = {
  confirmed:  { background: '#ecfdf5', color: '#059669' },
  unassigned: { background: '#fef2f2', color: '#ef4444' },
  pending:    { background: '#fffbeb', color: '#d97706' },
  paid:       { background: '#ecfdf5', color: '#059669' },
  overdue:    { background: '#fef2f2', color: '#ef4444' },
  sent:       { background: '#eff6ff', color: '#2563eb' },
  draft:      { background: '#f3f4f6', color: '#6b7280' },
  remote:     { background: '#f0efff', color: '#635bff' },
}

const CARD: React.CSSProperties = {
  background: '#fff',
  borderRadius: '12px',
  border: '1.5px solid #e4e4e7',
  overflow: 'hidden',
}

export default function AdminDashboard() {
  const s = STATS

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Sidebar role="admin" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#f9fafb' }}>
        <Topbar title="Dashboard" subtitle="Monday, June 2 · Bright Interpreting Connect" action="New appointment" />

        <main style={{ flex: 1, overflowY: 'auto', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="bic-kpis">
            {[
              { label: "Today's appointments", value: s.todayAppointments,          color: '#635bff', trend: '+12% vs yesterday', trendColor: '#12b76a' },
              { label: 'Active interpreters',  value: s.activeInterpreters,          color: '#111827', trend: 'of 22 registered',   trendColor: '#9ca3af' },
              { label: 'Unassigned',           value: s.unassigned,                  color: '#f59e0b', trend: 'Needs attention',     trendColor: '#f59e0b' },
              { label: 'Revenue this month',   value: formatCurrency(s.monthRevenue), color: '#12b76a', trend: '+8% vs last month',  trendColor: '#12b76a' },
            ].map((k, i) => (
              <div key={i} style={{ ...CARD, padding: '22px 24px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#9ca3af', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k.label}</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: k.color, letterSpacing: '-1.5px', lineHeight: 1, marginBottom: '10px' }}>{k.value}</div>
                <div style={{ fontSize: '12px', color: k.trendColor, fontWeight: 500 }}>{k.trend}</div>
              </div>
            ))}
          </div>

          {/* Main grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '16px' }} className="bic-main-grid">

            {/* Appointments */}
            <div style={CARD}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1.5px solid #e4e4e7' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>Today&apos;s schedule</span>
                <span style={{ fontSize: '13px', color: '#635bff', cursor: 'pointer', fontWeight: 500 }}>View all →</span>
              </div>
              {APPOINTMENTS.map(appt => (
                <div key={appt.id} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 24px', borderBottom: '1px solid #f4f4f5' }}>
                  <span style={{ fontSize: '12px', color: '#9ca3af', width: '58px', flexShrink: 0, fontWeight: 500 }}>{appt.time}</span>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0, background: STATUS_COLOR[appt.status] ?? '#d1d5db' }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#111827', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{appt.client}</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>
                      {appt.language} · {appt.interpreter ?? 'No interpreter'}
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '6px', flexShrink: 0, ...BADGE_STYLE[appt.status] }}>
                    {appt.status === 'confirmed' ? 'Confirmed' : appt.status === 'unassigned' ? 'Unassigned' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>

            {/* Right panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Interpreters */}
              <div style={CARD}>
                <div style={{ padding: '16px 20px', borderBottom: '1.5px solid #e4e4e7' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>Available now</span>
                </div>
                {INTERPRETERS.map(interp => (
                  <div key={interp.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 20px', borderBottom: '1px solid #f4f4f5' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: interp.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: 700, flexShrink: 0 }}>{interp.initials}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>{interp.name}</div>
                      <div style={{ fontSize: '11.5px', color: '#9ca3af', marginTop: '2px' }}>{interp.languages.join(' · ')}</div>
                    </div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: interp.status === 'available' ? '#12b76a' : '#635bff' }} />
                  </div>
                ))}
              </div>

              {/* Revenue chart */}
              <div style={{ ...CARD, padding: '20px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>Monthly revenue</div>
                <ResponsiveContainer width="100%" height={90}>
                  <BarChart data={MONTHLY_REVENUE} barSize={12}>
                    <Bar dataKey="revenue" fill="#635bff" radius={[3, 3, 0, 0]} />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ background: '#fff', border: '1.5px solid #e4e4e7', borderRadius: '8px', fontSize: '12px', boxShadow: 'none' }}
                      formatter={(v: unknown) => [formatCurrency(Number(v)), '']}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Pending invoices */}
          <div style={CARD}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1.5px solid #e4e4e7' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>Pending invoices</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#f59e0b' }}>{formatCurrency(s.pendingInvoices)} outstanding</span>
            </div>
            {INVOICES.filter(i => i.status !== 'paid').map(inv => (
              <div key={inv.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 24px', borderBottom: '1px solid #f4f4f5' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#635bff', width: '130px', flexShrink: 0 }}>{inv.id}</span>
                <span style={{ fontSize: '13.5px', fontWeight: 500, color: '#111827', flex: 1 }}>{inv.client}</span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>{formatCurrency(inv.amount)}</span>
                <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '6px', ...BADGE_STYLE[inv.status] }}>
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