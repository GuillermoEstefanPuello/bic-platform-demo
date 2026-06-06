// BIC Platform — Dashboard Layout
// StarBound · DEVGEP+ · 2025

import React from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#fff' }}>
      {children}
    </div>
  )
}