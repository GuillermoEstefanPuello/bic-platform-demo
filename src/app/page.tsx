// BIC Platform – Landing / Role Selector
// StarBound · DEVGEP+ · 2025

import Link from 'next/link'

const roles = [
  { href: '/admin',       initials: 'SM', color: '#635bff', label: 'Agency Admin',  sub: 'Full operational control — Sarah Mitchell' },
  { href: '/client',      initials: 'SP', color: '#0e7490', label: 'Client Portal', sub: 'Request and track services — Dr. Sarah Patterson' },
  { href: '/interpreter', initials: 'MG', color: '#92400e', label: 'Interpreter',   sub: 'Schedule, jobs and earnings — Maria Gonzalez' },
]

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '460px', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#635bff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '14px' }}>B</div>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827', letterSpacing: '-0.2px' }}>BIC Platform</span>
          </div>

          {/* Nombre completo elegante */}
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#111827', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: '8px' }}>
            Bright Interpreting Connect
          </h1>
          <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '6px' }}>
            Professional interpretation management platform
          </p>
          <div style={{ display: 'inline-block', background: '#f0efff', color: '#635bff', fontSize: '11px', fontWeight: 600, padding: '3px 12px', borderRadius: '20px', letterSpacing: '0.02em' }}>
            Interactive Demo
          </div>
        </div>

        {/* Role selector */}
        <div style={{ border: '1.5px solid #e4e4e7', borderRadius: '12px', overflow: 'hidden' }}>
          {roles.map((r, i) => (
            <Link key={r.href} href={r.href} style={{
              display: 'flex', alignItems: 'center', gap: '16px',
              padding: '18px 22px',
              borderBottom: i < 2 ? '1px solid #f4f4f5' : 'none',
              textDecoration: 'none', background: '#fff',
            }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>{r.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>{r.label}</div>
                <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '3px' }}>{r.sub}</div>
              </div>
              <div style={{ color: '#d1d5db', fontSize: '16px' }}>→</div>
            </Link>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: '11px', color: '#d1d5db', marginTop: '24px' }}>
          Built by StarBound · DEVGEP+
        </p>
      </div>
    </main>
  )
}