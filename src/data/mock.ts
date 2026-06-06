// BIC Platform — Mock Data
// StarBound · DEVGEP+ · 2025

export const APPOINTMENTS = [
  { id: '1', time: '9:00 AM', client: 'Memorial Hospital', location: 'Room 3B', language: 'Spanish', interpreter: 'Maria Gonzalez', status: 'confirmed', type: 'onsite' },
  { id: '2', time: '10:30 AM', client: 'Broward Clinic', location: 'Consultation A', language: 'Haitian Creole', interpreter: null, status: 'unassigned', type: 'onsite' },
  { id: '3', time: '11:00 AM', client: 'Jackson South', location: 'ER Bay 4', language: 'Portuguese', interpreter: null, status: 'unassigned', type: 'onsite' },
  { id: '4', time: '2:00 PM', client: 'Dade County Court', location: 'Courtroom 7', language: 'Spanish', interpreter: 'Carlos Ruiz', status: 'confirmed', type: 'onsite' },
  { id: '5', time: '3:30 PM', client: 'Baptist Health', location: 'Pediatrics', language: 'Spanish', interpreter: 'Ana Torres', status: 'confirmed', type: 'onsite' },
  { id: '6', time: '4:00 PM', client: 'Global Trade Corp', location: 'Remote', language: 'Mandarin', interpreter: 'Wei Chen', status: 'confirmed', type: 'remote' },
]

export const INTERPRETERS = [
  { id: '1', name: 'Maria Gonzalez', initials: 'MG', languages: ['Spanish', 'English'], status: 'available', color: '#635bff' },
  { id: '2', name: 'Carlos Ruiz', initials: 'CR', languages: ['Spanish', 'French'], status: 'available', color: '#0e7490' },
  { id: '3', name: 'Ana Torres', initials: 'AT', languages: ['Spanish', 'Portuguese'], status: 'busy', color: '#065f46' },
  { id: '4', name: 'Jean Pierre', initials: 'JP', languages: ['Haitian Creole', 'French'], status: 'available', color: '#92400e' },
  { id: '5', name: 'Wei Chen', initials: 'WC', languages: ['Mandarin', 'Cantonese'], status: 'busy', color: '#1e40af' },
]

export const INVOICES = [
  { id: 'INV-2025-001', client: 'Memorial Hospital', amount: 1350, status: 'paid', date: '2025-05-28', services: 9 },
  { id: 'INV-2025-002', client: 'Dade County Court', amount: 800, status: 'overdue', date: '2025-05-15', dueDate: '2025-05-30', services: 4 },
  { id: 'INV-2025-003', client: 'Broward Clinic', amount: 2100, status: 'sent', date: '2025-06-01', services: 14 },
  { id: 'INV-2025-004', client: 'Baptist Health', amount: 600, status: 'paid', date: '2025-05-20', services: 4 },
  { id: 'INV-2025-005', client: 'Global Trade Corp', amount: 950, status: 'draft', date: '2025-06-03', services: 3 },
]

export const MONTHLY_REVENUE = [
  { month: 'Jan', revenue: 9200 },
  { month: 'Feb', revenue: 10800 },
  { month: 'Mar', revenue: 11200 },
  { month: 'Apr', revenue: 10100 },
  { month: 'May', revenue: 13150 },
  { month: 'Jun', revenue: 14210 },
]

export const STATS = {
  todayAppointments: 24,
  activeInterpreters: 18,
  unassigned: 3,
  monthRevenue: 14210,
  pendingInvoices: 4800,
}