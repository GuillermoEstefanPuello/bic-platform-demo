// BIC Platform – Topbar
// StarBound · DEVGEP+ · 2025

'use client'

interface TopbarProps {
  title: string
  subtitle?: string
  action?: string
  onAction?: () => void
}

export function Topbar({ title, subtitle, action }: TopbarProps) {
  return (
    <header style={{
      height: '64px',
      background: '#fff',
      borderBottom: '1.5px solid #e4e4e7',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '0 28px',
      position: 'sticky',
      top: 0,
      zIndex: 20,
      flexShrink: 0,
    }}>

      {/* Title */}
      <div style={{ flex: 1 }}>
        <h1 style={{
          fontSize: '17px', fontWeight: 700, color: '#111827',
          letterSpacing: '-0.3px', lineHeight: 1, margin: 0,
        }}>{title}</h1>
        {subtitle && (
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '3px', lineHeight: 1, margin: '3px 0 0' }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Search */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        background: '#f5f5f7', border: '1.5px solid #e4e4e7',
        borderRadius: '8px', padding: '0 14px',
        height: '36px', width: '200px',
      }}>
        <svg width="13" height="13" fill="none" stroke="#9ca3af" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <span style={{ fontSize: '13px', color: '#b0b7c3' }}>Search...</span>
      </div>

      {/* Bell */}
      <button style={{
        width: '36px', height: '36px', borderRadius: '8px',
        border: '1.5px solid #e4e4e7', background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', position: 'relative', flexShrink: 0,
      }}>
        <svg width="16" height="16" fill="none" stroke="#9ca3af" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        <span style={{
          position: 'absolute', top: '7px', right: '7px',
          width: '6px', height: '6px', borderRadius: '50%', background: '#635bff',
        }} />
      </button>

      {/* CTA */}
      {action && (
        <button style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: '#635bff', color: '#fff',
          fontSize: '13px', fontWeight: 600,
          padding: '0 16px', height: '36px',
          borderRadius: '8px', border: 'none', cursor: 'pointer',
          flexShrink: 0,
        }}>
          <svg width="13" height="13" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          {action}
        </button>
      )}

    </header>
  )
}