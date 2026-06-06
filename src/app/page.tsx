// BIC Platform – Landing Page
// StarBound · DEVGEP+ · 2025

import Link from 'next/link'

export default function Landing() {
  return (
    <main style={{ background: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', height: '64px', borderBottom: '1px solid #f0f0f0', position: 'sticky', top: 0, background: '#fff', zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#635bff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '14px' }}>B</div>
          <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827', letterSpacing: '-0.3px' }}>Bright Interpreting Connect</span>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#635bff', background: '#f0efff', padding: '3px 8px', borderRadius: '6px', letterSpacing: '0.04em' }}>BIC</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: 500, cursor: 'pointer' }}>Features</span>
          <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: 500, cursor: 'pointer' }}>For clients</span>
          <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: 500, cursor: 'pointer' }}>For interpreters</span>
          <Link href="/demo" style={{ background: '#635bff', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', textDecoration: 'none' }}>View demo →</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '88px 48px 80px', textAlign: 'center', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f0efff', color: '#635bff', fontSize: '12px', fontWeight: 600, padding: '5px 14px', borderRadius: '20px', marginBottom: '32px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#635bff' }} />
          Professional interpretation management
        </div>
        <h1 style={{ fontSize: '52px', fontWeight: 800, color: '#111827', letterSpacing: '-2.5px', lineHeight: 1.1, marginBottom: '22px', maxWidth: '660px', marginLeft: 'auto', marginRight: 'auto' }}>
          The platform that connects{' '}
          <span style={{ color: '#635bff' }}>interpreters</span>{' '}
          with those who need them
        </h1>
        <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 12px' }}>
          Schedule, manage, and track interpretation services across all languages — from one elegant platform.
        </p>
        <p style={{ fontSize: '12px', color: '#b0b7c3', fontWeight: 500, letterSpacing: '0.06em', marginBottom: '40px' }}>
          2025 · Bright Interpreting Connect · BIC
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '64px' }}>
          <Link href="/demo" style={{ background: '#635bff', color: '#fff', border: 'none', padding: '13px 30px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}>Explore the demo →</Link>
          <button style={{ background: '#fff', color: '#374151', border: '1.5px solid #e4e4e7', padding: '13px 30px', borderRadius: '10px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>Learn more</button>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '56px' }}>
          {[
            { val: '500+', label: 'Interpreters' },
            { val: '12k+', label: 'Sessions delivered' },
            { val: '98%',  label: 'Client satisfaction' },
            { val: '40+',  label: 'Languages' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '30px', fontWeight: 800, color: '#111827', letterSpacing: '-1px' }}>{s.val}</div>
              <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '3px', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '80px 48px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '52px' }}>
          Everything you need to run a world-class interpretation service
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { icon: '📅', bg: '#f0efff', title: 'Smart scheduling',   desc: 'Assign interpreters to appointments in seconds. See availability, languages, and ratings at a glance.' },
            { icon: '💳', bg: '#ecfdf5', title: 'Automated billing',  desc: 'Generate invoices automatically after each session. Track payments and send reminders effortlessly.' },
            { icon: '🔔', bg: '#fffbeb', title: 'Real-time alerts',   desc: 'Never miss an unassigned appointment. Get instant notifications when urgent requests come in.' },
            { icon: '🌐', bg: '#eff6ff', title: '40+ languages',      desc: 'Spanish, Portuguese, Haitian Creole, Mandarin and more. Always the right interpreter for the job.' },
            { icon: '📊', bg: '#fef3c7', title: 'Reports & insights', desc: 'Track revenue, interpreter performance, and client activity with beautiful real-time dashboards.' },
            { icon: '🔒', bg: '#fef2f2', title: 'HIPAA compliant',    desc: 'Built with healthcare in mind. All data is encrypted and fully compliant with HIPAA regulations.' },
          ].map(f => (
            <div key={f.title} style={{ background: '#fff', border: '1.5px solid #e4e4e7', borderRadius: '12px', padding: '26px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '16px' }}>{f.icon}</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>{f.title}</div>
              <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section style={{ padding: '80px 48px', background: '#f9fafb', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '52px' }}>
          Three portals, one platform
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { href: '/admin',       initials: 'SM', color: '#635bff', title: 'Agency Admin',       desc: 'Full operational control. Manage interpreters, clients, billing, and reports from one dashboard.', link: 'Explore admin portal →' },
            { href: '/client',      initials: 'SP', color: '#0e7490', title: 'Client Portal',      desc: 'Request interpreters, track appointments, and manage invoices — simple and transparent.',           link: 'Explore client portal →' },
            { href: '/interpreter', initials: 'MG', color: '#92400e', title: 'Interpreter Portal', desc: 'Manage your schedule, find new jobs, track earnings, and update your availability with ease.',      link: 'Explore interpreter portal →' },
          ].map(r => (
            <div key={r.href} style={{ background: '#fff', border: '1.5px solid #e4e4e7', borderRadius: '12px', padding: '28px 24px' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>{r.initials}</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>{r.title}</div>
              <div style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.6, marginBottom: '18px' }}>{r.desc}</div>
              <Link href={r.href} style={{ fontSize: '13px', fontWeight: 600, color: '#635bff', textDecoration: 'none' }}>{r.link}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '80px 48px', textAlign: 'center', borderBottom: '1px solid #f0f0f0' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#111827', letterSpacing: '-1.5px', marginBottom: '16px' }}>Ready to see it in action?</h2>
        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '36px' }}>Explore the full interactive demo — no login required.</p>
        <Link href="/demo" style={{ background: '#635bff', color: '#fff', border: 'none', padding: '14px 36px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}>
          Start exploring →
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 48px', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#635bff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '11px' }}>B</div>
          <span style={{ fontSize: '13px', color: '#9ca3af' }}>© 2025 Bright Interpreting Connect · BIC</span>
        </div>
        <span style={{ fontSize: '12px', color: '#d1d5db' }}>Built by StarBound · DEVGEP+</span>
      </footer>

    </main>
  )
}