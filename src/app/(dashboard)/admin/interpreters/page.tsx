// BIC Platform – Admin Interpreters
// StarBound · DEVGEP+ · 2025

'use client'

import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'
import { INTERPRETERS } from '@/data/mock'

const EXTENDED = [
  { id: '1', name: 'Maria Gonzalez',  initials: 'MG', color: '#635bff', languages: ['Spanish', 'English'],           status: 'available', jobs: 142, rating: 4.9, joined: 'Jan 2023' },
  { id: '2', name: 'Carlos Ruiz',     initials: 'CR', color: '#0e7490', languages: ['Spanish', 'French'],            status: 'available', jobs: 98,  rating: 4.7, joined: 'Mar 2023' },
  { id: '3', name: 'Ana Torres',      initials: 'AT', color: '#065f46', languages: ['Spanish', 'Portuguese'],        status: 'busy',      jobs: 211, rating: 4.8, joined: 'Sep 2022' },
  { id: '4', name: 'Jean Pierre',     initials: 'JP', color: '#92400e', languages: ['Haitian Creole', 'French'],     status: 'available', jobs: 76,  rating: 4.6, joined: 'Jun 2023' },
  { id: '5', name: 'Wei Chen',        initials: 'WC', color: '#1e40af', languages: ['Mandarin', 'Cantonese'],        status: 'busy',      jobs: 189, rating: 4.9, joined: 'Nov 2022' },
  { id: '6', name: 'Sofia Reyes',     initials: 'SR', color: '#7c3aed', languages: ['Spanish', 'English'],           status: 'off',       jobs: 54,  rating: 4.5, joined: 'Aug 2023' },
  { id: '7', name: 'Michel Dupont',   initials: 'MD', color: '#b45309', languages: ['French', 'Haitian Creole'],     status: 'available', jobs: 33,  rating: 4.4, joined: 'Oct 2023' },
  { id: '8', name: 'Yuki Tanaka',     initials: 'YT', color: '#0f766e', languages: ['Japanese', 'English'],          status: 'available', jobs: 67,  rating: 4.8, joined: 'Feb 2023' },
]

const STATUS_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  available: { bg: '#ecfdf5', color: '#059669', label: 'Available' },
  busy:      { bg: '#f0efff', color: '#635bff', label: 'Busy' },
  off:       { bg: '#f3f4f6', color: '#6b7280', label: 'Off today' },
}

const LANG_COLORS = ['#635bff', '#0e7490', '#065f46', '#92400e', '#1e40af', '#7c3aed']

const CARD: React.CSSProperties = {
  background: '#fff', borderRadius: '12px',
  border: '1.5px solid #e4e4e7', overflow: 'hidden',
}

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i <= Math.round(rating) ? '#f59e0b' : '#e5e7eb'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
      <span style={{ fontSize: '11px', fontWeight: 600, color: '#374151', marginLeft: '4px' }}>{rating}</span>
    </div>
  )
}

export default function AdminInterpreters() {
  const available = EXTENDED.filter(i => i.status === 'available').length
  const busy      = EXTENDED.filter(i => i.status === 'busy').length
  const avgRating = (EXTENDED.reduce((s, i) => s + i.rating, 0) / EXTENDED.length).toFixed(1)

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Sidebar role="admin" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#f9fafb' }}>
        <Topbar title="Interpreters" subtitle="Manage your interpreter network" action="Add interpreter" />

        <main style={{ flex: 1, overflowY: 'auto', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              { label: 'Total interpreters', value: EXTENDED.length, color: '#111827', trend: '8 registered' },
              { label: 'Available now',      value: available,        color: '#12b76a', trend: 'ready to assign' },
              { label: 'Currently busy',     value: busy,             color: '#635bff', trend: 'on assignment' },
              { label: 'Avg rating',         value: avgRating,        color: '#f59e0b', trend: 'across all interpreters' },
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
            {['All', 'Available', 'Busy', 'Spanish', 'French', 'Mandarin'].map((f, i) => (
              <button key={f} style={{ padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 500, cursor: 'pointer', border: '1.5px solid #e4e4e7', background: i === 0 ? '#111827' : '#fff', color: i === 0 ? '#fff' : '#6b7280' }}>{f}</button>
            ))}
          </div>

          {/* Table */}
          <div style={CARD}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 120px 80px 100px 120px', padding: '12px 24px', borderBottom: '1.5px solid #e4e4e7', gap: '16px' }}>
              {['Interpreter', 'Languages', 'Status', 'Jobs', 'Rating', ''].map(h => (
                <div key={h} style={{ fontSize: '11px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</div>
              ))}
            </div>

            {EXTENDED.map((interp, i) => {
              const st = STATUS_STYLE[interp.status]
              return (
                <div key={interp.id} style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 120px 80px 100px 120px', padding: '16px 24px', borderBottom: i < EXTENDED.length - 1 ? '1px solid #f4f4f5' : 'none', alignItems: 'center', gap: '16px' }}>

                  {/* Name */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: interp.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: 700, flexShrink: 0 }}>{interp.initials}</div>
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#111827' }}>{interp.name}</div>
                      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Since {interp.joined}</div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {interp.languages.map((lang, li) => (
                      <span key={lang} style={{ fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '6px', background: `${LANG_COLORS[li % LANG_COLORS.length]}18`, color: LANG_COLORS[li % LANG_COLORS.length] }}>{lang}</span>
                    ))}
                  </div>

                  {/* Status */}
                  <span style={{ fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', background: st.bg, color: st.color, display: 'inline-block' }}>{st.label}</span>

                  {/* Jobs */}
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>{interp.jobs}</span>

                  {/* Rating */}
                  <Stars rating={interp.rating} />

                  {/* Action */}
                  <button style={{ padding: '7px 14px', borderRadius: '8px', border: '1.5px solid #e4e4e7', background: '#fff', color: '#374151', fontSize: '12px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    View profile
                  </button>
                </div>
              )
            })}
          </div>

        </main>
      </div>
    </div>
  )
}