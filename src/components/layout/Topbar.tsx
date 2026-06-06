// BIC Platform – Topbar
// StarBound · DEVGEP+ · 2025

'use client'

import { useState } from 'react'

const NOTIFICATIONS = [
  { id: 1, type: 'warning', title: 'Broward Clinic unassigned', sub: '10:30 AM · Haitian Creole · No interpreter', time: '2m ago', color: '#ef4444', bg: '#fef2f2' },
  { id: 2, type: 'warning', title: 'Jackson South unassigned',  sub: '11:00 AM · Portuguese · No interpreter',    time: '5m ago', color: '#ef4444', bg: '#fef2f2' },
  { id: 3, type: 'invoice', title: 'Invoice overdue — Dade County Court', sub: 'INV-2025-002 · $800 · Due May 30', time: '1h ago', color: '#f59e0b', bg: '#fffbeb' },
  { id: 4, type: 'request', title: 'New request from Baptist Health', sub: 'Spanish · Tomorrow 9:00 AM · In-person', time: '2h ago', color: '#635bff', bg: '#f0efff' },
]

interface TopbarProps {
  title: string
  subtitle?: string
  action?: string
  onAction?: () => void
}

export function Topbar({ title, subtitle, action }: TopbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header style={{
      height: '64px', background: '#fff', borderBottom: '1.5px solid #e4e4e7',
      display: 'flex', alignItems: 'center', gap: '12px', padding: '0 28px',
      position: 'sticky', top: 0, zIndex: 20, flexShrink: 0,
    }}>

      {/* Title */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', letterSpacing: '-0.3px', lineHeight: 1, margin: 0 }}>{title}</h1>
        {subtitle && (
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '3px', lineHeight: 1, margin: '3px 0 0' }}>{subtitle}</p>
        )}
      </div>

      {/* Search */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        background: '#f5f5f7', border: '1.5px solid #e4e4e7',
        borderRadius: '8px', padding: '0 14px', height: '36px', width: '200px',
      }}>
        <svg width="13" height="13" fill="none" stroke="#9ca3af" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <span style={{ fontSize: '13px', color: '#b0b7c3' }}>Search...</span>
      </div>

      {/* Bell + Dropdown */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: '36px', height: '36px', borderRadius: '8px',
            border: open ? '1.5px solid #635bff' : '1.5px solid #e4e4e7',
            background: open ? '#f0efff' : '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', position: 'relative',
          }}>
          <svg width="16" height="16" fill="none" stroke={open ? '#635bff' : '#9ca3af'} strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span style={{
            position: 'absolute', top: '7px', right: '7px',
            width: '6px', height: '6px', borderRadius: '50%', background: '#635bff',
          }} />
        </button>

        {/* Dropdown */}
        {open && (
          <div style={{
            position: 'absolute', top: '44px', right: 0,
            width: '340px', background: '#fff',
            border: '1.5px solid #e4e4e7', borderRadius: '12px',
            overflow: 'hidden', zIndex: 100,
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1.5px solid #e4e4e7' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>Notifications</span>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#635bff', cursor: 'pointer' }}>Mark all as read</span>
            </div>

            {/* Items */}
            {NOTIFICATIONS.map((n, i) => (
              <div key={n.id} style={{
                display: 'flex', gap: '12px', padding: '14px 18px',
                borderBottom: i < NOTIFICATIONS.length - 1 ? '1px solid #f4f4f5' : 'none',
                cursor: 'pointer', background: '#fff',
              }}>
                <div style={{
                  width: '34px', height: '34px', borderRadius: '8px',
                  background: n.bg, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', flexShrink: 0,
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: n.color }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#111827', marginBottom: '2px' }}>{n.title}</div>
                  <div style={{ fontSize: '11px', color: '#9ca3af' }}>{n.sub}</div>
                </div>
                <span style={{ fontSize: '10px', color: '#b0b7c3', flexShrink: 0, marginTop: '2px' }}>{n.time}</span>
              </div>
            ))}

            {/* Footer */}
            <div style={{ padding: '12px 18px', borderTop: '1.5px solid #e4e4e7', textAlign: 'center' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#635bff', cursor: 'pointer' }}>View all notifications →</span>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      {action && (
        <button style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: '#635bff', color: '#fff', fontSize: '13px', fontWeight: 600,
          padding: '0 16px', height: '36px', borderRadius: '8px',
          border: 'none', cursor: 'pointer', flexShrink: 0,
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