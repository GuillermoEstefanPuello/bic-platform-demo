// BIC Platform – Sidebar
// StarBound · DEVGEP+ · 2025

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  label: string
  href: string
  group: string
  badge?: number
}

const NAV: Record<string, NavItem[]> = {
  admin: [
    { label: 'Dashboard',    href: '/admin',              group: 'Main' },
    { label: 'Calendar',     href: '/admin/calendar',     group: 'Main',    badge: 3 },
    { label: 'Requests',     href: '/admin/requests',     group: 'Main',    badge: 5 },
    { label: 'Interpreters', href: '/admin/interpreters', group: 'Main' },
    { label: 'Clients',      href: '/admin/clients',      group: 'Main' },
    { label: 'Billing',      href: '/admin/billing',      group: 'Finance' },
    { label: 'Reports',      href: '/admin/reports',      group: 'Finance' },
    { label: 'Integrations', href: '/admin/integrations', group: 'Config' },
    { label: 'Settings',     href: '/admin/settings',     group: 'Config' },
  ],
  client: [
    { label: 'Overview',    href: '/client',          group: 'Main' },
    { label: 'New Request', href: '/client/requests', group: 'Main' },
    { label: 'History',     href: '/client/history',  group: 'Main' },
    { label: 'Settings',    href: '/client/settings', group: 'Main' },
  ],
  interpreter: [
    { label: 'My Schedule', href: '/interpreter',          group: 'Main', badge: 2 },
    { label: 'Find Jobs',   href: '/interpreter/jobs',     group: 'Main', badge: 5 },
    { label: 'Earnings',    href: '/interpreter/earnings', group: 'Main' },
    { label: 'Profile',     href: '/interpreter/profile',  group: 'Main' },
    { label: 'Settings',    href: '/interpreter/settings', group: 'Main' },
  ],
}

const META = {
  admin:       { name: 'Sarah Mitchell',      role: 'Agency Admin',      initials: 'SM', color: '#635bff' },
  client:      { name: 'Dr. Sarah Patterson', role: 'Memorial Hospital', initials: 'SP', color: '#0e7490' },
  interpreter: { name: 'Maria Gonzalez',      role: 'Interpreter',       initials: 'MG', color: '#92400e' },
}

export function Sidebar({ role }: { role: 'admin' | 'client' | 'interpreter' }) {
  const pathname = usePathname()
  const items    = NAV[role]
  const meta     = META[role]
  const groups   = [...new Set(items.map(i => i.group))]

  return (
    <aside style={{
      width: '220px', flexShrink: 0, background: '#fff',
      borderRight: '1.5px solid #e4e4e7', display: 'flex',
      flexDirection: 'column', height: '100vh', position: 'sticky', top: 0,
    }}>

      {/* Brand — misma altura que Topbar: 64px */}
      <div style={{
        height: '64px', padding: '0 20px',
        borderBottom: '1.5px solid #e4e4e7',
        display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0,
      }}>
        <div style={{
          width: '32px', height: '32px', borderRadius: '8px',
          background: '#635bff', display: 'flex', alignItems: 'center',
          justifyContent: 'center', color: '#fff', fontWeight: 700,
          fontSize: '14px', flexShrink: 0,
        }}>B</div>
        <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827', letterSpacing: '-0.3px' }}>
          BIC Platform
        </span>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px', overflowY: 'auto' }}>
        {groups.map(group => (
          <div key={group}>
            <div style={{
              fontSize: '10px', fontWeight: 600, color: '#b0b7c3',
              textTransform: 'uppercase', letterSpacing: '0.7px',
              padding: '14px 10px 6px',
            }}>{group}</div>

            {items.filter(i => i.group === group).map(item => {
              const active = pathname === item.href
              return (
                <Link key={item.href} href={item.href} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '9px 10px', borderRadius: '7px',
                  fontSize: '13.5px', textDecoration: 'none', marginBottom: '2px',
                  fontWeight: active ? 600 : 400,
                  background: active ? '#f0efff' : 'transparent',
                  color: active ? '#635bff' : '#6b7280',
                  position: 'relative',
                }}>
                  {active && (
                    <span style={{
                      position: 'absolute', left: 0, top: '4px', bottom: '4px',
                      width: '3px', background: '#635bff', borderRadius: '0 3px 3px 0',
                    }} />
                  )}
                  <span style={{ flex: 1 }}>{item.label}</span>
                  {item.badge && (
                    <span style={{
                      fontSize: '10px', fontWeight: 700, padding: '1px 6px',
                      borderRadius: '10px', background: '#635bff', color: '#fff',
                    }}>{item.badge}</span>
                  )}
                </Link>
              )
            })}
          </div>
        ))}
      </nav>

      {/* User footer */}
      <div style={{ padding: '12px', borderTop: '1.5px solid #e4e4e7' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '10px', borderRadius: '8px', cursor: 'pointer',
        }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%',
            background: meta.color, display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: '#fff', fontSize: '11px',
            fontWeight: 700, flexShrink: 0,
          }}>{meta.initials}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: '13px', fontWeight: 600, color: '#374151',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>{meta.name}</div>
            <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '1px' }}>{meta.role}</div>
          </div>
        </div>
      </div>

    </aside>
  )
}