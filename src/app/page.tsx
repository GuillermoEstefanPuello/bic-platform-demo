import Link from 'next/link'

const roles = [
  { href: '/admin',       initials: 'SM', color: '#635bff', label: 'Agency Admin',  sub: 'Full operational control — Sarah Mitchell' },
  { href: '/client',      initials: 'SP', color: '#0e7490', label: 'Client Portal', sub: 'Request and track services — Dr. Sarah Patterson' },
  { href: '/interpreter', initials: 'MG', color: '#92400e', label: 'Interpreter',   sub: 'Schedule, jobs and earnings — Maria Gonzalez' },
]

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '420px', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: '#635bff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '13px' }}>B</div>
            <span style={{ fontSize: '16px', fontWeight: 700, color: '#111827' }}>BIC Platform</span>
          </div>
          <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>Welcome to the demo</h1>
          <p style={{ fontSize: '13px', color: '#9ca3af' }}>Select a role to preview the platform</p>
        </div>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
          {roles.map((r, i) => (
            <Link key={r.href} href={r.href} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 20px', borderBottom: i < 2 ? '1px solid #e5e7eb' : 'none', textDecoration: 'none', background: '#fff' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: 700, flexShrink: 0 }}>{r.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>{r.label}</div>
                <div style={{ fontSize: '11.5px', color: '#9ca3af', marginTop: '2px' }}>{r.sub}</div>
              </div>
              <div style={{ color: '#d1d5db' }}>→</div>
            </Link>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: '11px', color: '#d1d5db', marginTop: '20px' }}>BIC Platform · Built by StarBound · DEVGEP+</p>
      </div>
    </main>
  )
}