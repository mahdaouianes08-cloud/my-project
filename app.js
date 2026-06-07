// ==========================================
// MOCK DATA LAYER
// ==========================================
const API_BASE = window.location.protocol === 'file:' ? 'http://localhost:3000' : '';


const dashboardData = {
  kpis: [
    { title: 'Total Patients', value: '2,540', icon: 'users', trend: '+12%', trendType: 'up', color: 'emerald' },
    { title: 'Appointments Today', value: '42', icon: 'calendar', trend: '8 Pending', trendType: 'pending', color: 'orange' },
    { title: 'Total Revenue', value: '$12,840', icon: 'credit-card', trend: '+5.4%', trendType: 'up', color: 'emerald' },
    { title: 'Doctors on Duty', value: '8/12', icon: 'user-check', trend: 'Active', trendType: 'neutral', color: 'slate' }
  ],
  analytics: {
    monthly: {
      categories: ['Oct 1', 'Oct 8', 'Oct 15', 'Oct 22', 'Oct 30'],
      data: [150, 230, 180, 290, 240]
    },
    weekly: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [35, 42, 28, 48, 52, 20, 15]
    }
  },
  schedule: [
    { time: '09:00', patient: 'Robert Fox', status: 'WAITING', badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-100', doctor: 'Dr. Ahmed', specialty: 'General' },
    { time: '10:30', patient: 'Leslie Alexander', status: 'IN PROGRESS', badgeClass: 'bg-blue-50/80 text-blue-700 border-blue-100', doctor: 'Dr. Sarah', specialty: 'Cardio' },
    { time: '11:15', patient: 'Jenny Wilson', status: 'COMPLETED', badgeClass: 'bg-slate-100 text-slate-600 border-slate-200', doctor: 'Dr. Lee', specialty: 'Dental' }
  ],
  financials: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    data: [1200, 1900, 1500, 2100, 1800]
  },
  efficiency: [
    { department: 'Cardiology', progress: 88, colorClass: 'bg-clinic-800' },
    { department: 'General Medicine', progress: 94, colorClass: 'bg-teal-500' },
    { department: 'Pediatrics', progress: 72, colorClass: 'bg-amber-500' }
  ],
  activity: [
    { icon: 'log-in', colorClass: 'bg-emerald-50 text-emerald-600', text: 'Dr. Ahmed checked in', time: '2 minutes ago' },
    { icon: 'check-circle-2', colorClass: 'bg-blue-50 text-blue-600', text: 'Medical Report for #4421 verified', time: '15 minutes ago' },
    { icon: 'alert-triangle', colorClass: 'bg-amber-50 text-amber-600', text: 'Equipment Alert: Lab Fridge Room 4', time: '1 hour ago' }
  ]
};

const patientsData = {
  kpis: [
    { title: 'Total Patients', value: '2,540', icon: 'users', trend: '+12%', trendType: 'up', color: 'emerald' },
    { title: 'New This Month', value: '124', icon: 'user-plus', trend: '+4.5%', trendType: 'up', color: 'emerald' },
    { title: 'Active Cases', value: '45', icon: 'activity', trend: '-2%', trendType: 'down', color: 'rose' }
  ],
  patients: [
    { id: 'PT-0294', name: 'Eleanor Higgins', email: 'eleanor.h@example.com', initials: 'EH', gender: 'Female', age: 34, lastVisit: 'May 24, 2026', status: 'ACTIVE', statusClass: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { id: 'PT-0182', name: 'Albert Flores', email: 'albert.f@example.com', initials: 'AL', gender: 'Male', age: 45, lastVisit: 'May 28, 2026', status: 'PENDING', statusClass: 'bg-orange-50 text-orange-700 border-orange-100' },
    { id: 'PT-0311', name: 'Kathryn Murphy', email: 'kathryn.m@example.com', initials: 'KM', gender: 'Female', age: 29, lastVisit: 'May 12, 2026', status: 'ACTIVE', statusClass: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { id: 'PT-0095', name: 'Dianne Russell', email: 'dianne.r@example.com', initials: 'DR', gender: 'Female', age: 62, lastVisit: 'Apr 18, 2026', status: 'INACTIVE', statusClass: 'bg-slate-100 text-slate-600 border-slate-200' },
    { id: 'PT-0251', name: 'Devon Lane', email: 'devon.l@example.com', initials: 'DL', gender: 'Male', age: 21, lastVisit: 'Jun 02, 2026', status: 'ACTIVE', statusClass: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { id: 'PT-0104', name: 'Jane Cooper', email: 'jane.c@example.com', initials: 'JC', gender: 'Female', age: 38, lastVisit: 'May 30, 2026', status: 'ACTIVE', statusClass: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { id: 'PT-0392', name: 'Guy Hawkins', email: 'guy.h@example.com', initials: 'GH', gender: 'Male', age: 50, lastVisit: 'May 15, 2026', status: 'PENDING', statusClass: 'bg-orange-50 text-orange-700 border-orange-100' }
  ],
  trends: {
    categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    data: [320, 410, 380, 480, 520, 590, 510, 610, 680, 720, 780, 890]
  }
};

// ==========================================
// ADDITIONAL MOCK DATA LAYER
// ==========================================

const medicalRecordsData = {
  kpis: [
    { title: 'Total Records', value: '12,450', trend: '↗ 12% from last month', trendClass: 'text-emerald-700 bg-emerald-50', icon: 'file-text', iconBgClass: 'bg-blue-50 text-clinic-800' },
    { title: 'Recent Lab Results', value: '85', trend: 'Pending verification', trendClass: 'text-amber-800 bg-amber-50/50', icon: 'microscope', iconBgClass: 'bg-amber-50 text-amber-700' },
    { title: 'New Prescriptions Today', value: '42', trend: 'Updated 5m ago', trendClass: 'text-slate-500 bg-slate-50 border border-slate-100', icon: 'clipboard-list', iconBgClass: 'bg-teal-50 text-teal-600' }
  ],
  clinicalHistory: [
    { name: 'Adeline Rossi', gender: 'Female', age: '42y', recordId: '#REC-9021', date: 'Oct 24, 2023', specialist: 'Dr. Marcus Thorne', specialty: 'Cardiology', avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=60&h=60', initials: 'AR', diagnosis: 'Hypertension Stage' },
    { name: 'Julian Vane', gender: 'Male', age: '68y', recordId: '#REC-8842', date: 'Oct 23, 2023', specialist: 'Dr. Sarah Chen', specialty: 'Neurology', avatar: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=60&h=60', initials: 'JV', diagnosis: 'Post-Op Evaluation' },
    { name: 'Elena Wright', gender: 'Female', age: '29y', recordId: '#REC-8755', date: 'Oct 23, 2023', specialist: 'Dr. Simon Lee', specialty: 'Orthopedics', avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=60&h=60', initials: 'EW', diagnosis: 'L4–L5 Disc Herniation' },
    { name: 'Thomas Baker', gender: 'Male', age: '35y', recordId: '#REC-8740', date: 'Oct 22, 2023', specialist: 'Dr. Maria Garcia', specialty: 'Internal Med', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=60&h=60', initials: 'TB', diagnosis: 'Acute Bronchitis' },
    { name: 'Sophia Miller', gender: 'Female', age: '54y', recordId: '#REC-8611', date: 'Oct 22, 2023', specialist: 'Dr. Marcus Thorne', specialty: 'Cardiology', avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=60&h=60', initials: 'SM', diagnosis: 'Atrial Fibrillation' }
  ],
  labReports: [
    { title: 'Blood Panel (Full)', patient: 'Adeline Rossi', time: '2 hours ago' },
    { title: 'Lipid Profile', patient: 'Julian Vane', time: '5 hours ago' },
    { title: 'Urinalysis Result', patient: 'Elena Wright', time: 'Yesterday' },
    { title: 'Glucose Tolerance', patient: 'Thomas Baker', time: 'Yesterday' }
  ],
  alerts: [
    { type: 'Drug Allergy Warning', badge: 'CRITICAL', badgeClass: 'text-rose-700 bg-rose-100', bgClass: 'bg-rose-50 border-rose-100 text-rose-800 text-rose-900', description: 'Patient <strong class="font-extrabold text-rose-900">Julian Vane</strong> is allergic to <strong class="font-extrabold text-rose-900">Lisinopril</strong>. Please check alternatives before finalization.' },
    { type: 'Dosage Adjustment', badge: 'ALERT', badgeClass: 'text-amber-700 bg-amber-100', bgClass: 'bg-amber-50 border-amber-100 text-amber-800 text-amber-950', description: 'Metformin dosage for <strong class="font-extrabold text-amber-950">Adeline Rossi</strong> increased to <strong class="font-extrabold text-amber-950">1000mg</strong> based on recent HbA1c results.' }
  ]
};

const paymentsData = {
  kpis: [
    { title: 'Total Revenue', value: '$128,430.00', trend: '↗ +12.5%', trendType: 'up', subtext: 'vs. $114,200 last month', icon: 'wallet', color: 'blue' },
    { title: 'Outstanding Invoices', value: '$18,245.50', trend: '42 Unpaid', trendType: 'neutral', subtext: 'Average overdue: 14 days', icon: 'clock', color: 'orange' },
    { title: 'Recent Payments (Today)', value: '$4,120.00', trend: '80%', trendType: 'progress', subtext: '', icon: 'history', color: 'emerald' },
    { title: 'Insurance Claims Pending', value: '156', trend: '18 New', trendType: 'neutral-blue', subtext: 'Total Value: $64,200.00', icon: 'shield', color: 'blue' }
  ],
  transactions: [
    { name: 'Maria Garcia', initials: 'MG', invoiceId: '#INV-1234', date: 'Oct 24, 2023', amount: '$450.00', method: 'Card', methodIcon: 'credit-card' },
    { name: 'James Smith', initials: 'JS', invoiceId: '#INV-1235', date: 'Oct 24, 2023', amount: '$1,200.00', method: 'Insurance', methodIcon: 'shield' },
    { name: 'Robert King', initials: 'RK', invoiceId: '#INV-1236', date: 'Oct 23, 2023', amount: '$75.00', method: 'Cash', methodIcon: 'wallet' },
    { name: 'Linda White', initials: 'LW', invoiceId: '#INV-1237', date: 'Oct 23, 2023', amount: '$310.00', method: 'Card', methodIcon: 'credit-card' }
  ],
  departments: [
    { name: 'General Medicine', progress: 100, colorClass: 'bg-clinic-800', value: '$42,500' },
    { name: 'Pediatrics', progress: 75, colorClass: 'bg-teal-600', value: '$31,200' },
    { name: 'Cardiology', progress: 65, colorClass: 'bg-blue-600', value: '$28,900' },
    { name: 'Dentistry', progress: 30, colorClass: 'bg-amber-600', value: '$15,400' }
  ],
  activities: [
    { text: 'Invoice #1234 paid', subtext: 'Maria G. • $450.00 • 2m ago', icon: 'check-circle-2', colorClass: 'bg-emerald-500 text-white' },
    { text: 'New Invoice Generated', subtext: 'Samuel T. • $2,400.00 • 15m ago', icon: 'file-text', colorClass: 'bg-blue-500 text-white' },
    { text: 'Claim Rejected', subtext: 'HealthFirst Inc. • #CLM-99 • 1h ago', icon: 'alert-triangle', colorClass: 'bg-rose-600 text-white' },
    { text: 'Payment Reminder Sent', subtext: 'James Smith • 3h ago', icon: 'mail', colorClass: 'bg-amber-500 text-white' }
  ]
};

const reportsData = {
  kpis: [
    { title: 'Total Consultations', value: '2,840', trend: '↗ +12.5%', trendClass: 'text-emerald-700 bg-emerald-50', icon: 'stethoscope', iconClass: 'bg-blue-50 text-clinic-800' },
    { title: 'Gross Revenue', value: '$142.5k', trend: '↗ +8.2%', trendClass: 'text-emerald-700 bg-emerald-50', icon: 'wallet', iconClass: 'bg-teal-50 text-teal-600' },
    { title: 'Patient Satisfaction', value: '4.8 / 5', trend: 'stars', trendClass: '', icon: 'star', iconClass: 'bg-amber-50 text-amber-600' },
    { title: 'Avg. Wait Time', value: '14m', trend: '↘ -2m', trendClass: 'text-rose-700 bg-rose-50', icon: 'clock', iconClass: 'bg-rose-50 text-rose-600' }
  ],
  revenueTrends: {
    months: ['MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT'],
    columnData: [85, 110, 95, 130, 115, 150],
    lineData: [90, 105, 100, 125, 120, 145]
  },
  ageGroups: {
    shares: [45, 30, 15]
  },
  departments: [
    { name: 'Cardiology', visits: '840 visits', progress: 75, score: '4.9 SCORE' },
    { name: 'Pediatrics', visits: '620 visits', progress: 55, score: '4.7 SCORE' },
    { name: 'General Medicine', visits: '1,120 visits', progress: 95, score: '4.8 SCORE' }
  ],
  doctors: [
    { name: 'Dr. Robert Chen', title: 'Senior Consultant', department: 'Cardiology', consultations: 342, revenue: '$42,500', satisfaction: '4.9 ⭐', status: 'OPTIMAL', badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { name: 'Dr. Sarah Smith', title: 'Pediatric Specialist', department: 'Pediatrics', consultations: 288, revenue: '$31,200', satisfaction: '4.7 ⭐', status: 'OPTIMAL', badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { name: 'Dr. James Wilson', title: 'General Physician', department: 'General Med.', consultations: 512, revenue: '$38,900', satisfaction: '4.8 ⭐', status: 'BUSY', badgeClass: 'bg-orange-50 text-orange-700 border-orange-100' }
  ]
};

// ==========================================
// CONTROLLER & VIEW LOGIC
// ==========================================

let currentView = 'dashboard';
let appointmentChartObj = null;

// App Startup Listener
window.addEventListener('DOMContentLoaded', () => {
  // Set initial navigation highlight
  updateSidebarActiveItem();
  
  // Load initial backend records
  loadBackendData();
  
  renderDepartmentEfficiency();
  renderRecentActivity();
  
  renderPatientsKpis();
  renderPatientsTable(patientsData.patients);
  
  // Render Medical Records initial dynamic lists
  renderMedicalRecordsKpis();
  renderClinicalHistoryTable(medicalRecordsData.clinicalHistory);
  renderRecentReports();
  renderMedicationAlerts();

  // Render Payments initial dynamic lists
  renderPaymentsKpis();
  renderTransactionsTable(paymentsData.transactions);
  renderDeptRevenue();
  renderPaymentsActivity();

  // Render Reports initial dynamic lists
  renderReportsKpis();
  renderDeptPerformance();
  renderDetailedPerformanceLog();
  
  // Build and link interactive charts
  initDashboardCharts();
  initPatientsCharts();
  
  // Render Lucide SVGs
  lucide.createIcons();

  // URL Hash/Query parameter view router for SPA views navigated from settings.html
  const urlParams = new URLSearchParams(window.location.search);
  const viewParam = urlParams.get('view') || window.location.hash.replace('#', '');
  const validViews = ['dashboard', 'patients', 'appointments', 'staff', 'records', 'payments', 'reports'];
  if (viewParam && validViews.includes(viewParam)) {
    switchView(viewParam);
  }

  // Modals form submit hooks
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const payload = {
        patientName: document.getElementById('aptPatientName').value.trim(),
        doctorName: document.getElementById('aptDoctorName').value,
        department: document.getElementById('aptDepartment').value,
        time: `${document.getElementById('aptDay').value}, ${document.getElementById('aptTime').value}`,
        status: document.getElementById('aptStatus').value
      };
      
      fetch(API_BASE + '/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(res => {
        if (!res.ok) throw new Error('Booking failed');
        return res.json();
      })
      .then(() => {
        showToast('Success', 'Clinic appointment slot booked successfully.');
        appointmentForm.reset();
        closeModal('appointment');
        loadBackendData();
      })
      .catch(err => {
        console.error(err);
        showToast('Error', 'Failed to save appointment booking to backend database.');
      });
    });
  }

  const staffForm = document.getElementById('staffForm');
  if (staffForm) {
    staffForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const payload = {
        name: document.getElementById('staffName').value.trim(),
        specialty: document.getElementById('staffSpecialty').value.trim(),
        status: document.getElementById('staffStatus').value,
        appointmentsCount: 0
      };
      
      fetch(API_BASE + '/api/doctors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(res => {
        if (!res.ok) throw new Error('Registration failed');
        return res.json();
      })
      .then(() => {
        showToast('Success', 'New healthcare specialist added to clinic roster.');
        staffForm.reset();
        closeModal('staff');
        loadBackendData();
      })
      .catch(err => {
        console.error(err);
        showToast('Error', 'Failed to register doctor to backend roster.');
      });
    });
  }

  const triageForm = document.getElementById('triageForm');
  if (triageForm) {
    triageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const payload = {
        patientName: document.getElementById('triagePatientName').value.trim(),
        vitals: {
          bp: document.getElementById('triageBP').value.trim(),
          temp: `${document.getElementById('triageTemp').value.trim()}°F`,
          weight: `${document.getElementById('triageWeight').value.trim()} kg`
        }
      };
      
      fetch(API_BASE + '/api/triage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(res => {
        if (!res.ok) throw new Error('Triage logging failed');
        return res.json();
      })
      .then(() => {
        showToast('Success', 'Patient physiological triage vitals submitted.');
        triageForm.reset();
        closeModal('triage');
        loadBackendData();
      })
      .catch(err => {
        console.error(err);
        showToast('Error', 'Failed to save triage records.');
      });
    });
  }

  updateUserWidget();
});

// Switch view dynamic router
function switchView(viewName) {
  if (currentView === viewName) return;

  // Default sidebar user card layout (restored for non-reports views)
  if (viewName !== 'reports') {
    const userCard = document.getElementById('sidebar-user-card');
    if (userCard) {
      userCard.innerHTML = `
        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150" alt="Avatar" class="w-10 h-10 rounded-xl object-cover bg-slate-200 ring-2 ring-white shadow-sm" id="sidebar-user-avatar">
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-bold text-slate-800 truncate" id="sidebar-user-name">Dr. Sarah Jenkins</h4>
          <p class="text-xs text-slate-400 font-medium truncate" id="sidebar-user-role">Senior Admin</p>
        </div>
        <button id="sidebarLogoutBtn" class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition focus:outline-none" title="Log Out / Deconnexion" onclick="localStorage.removeItem('authenticated'); localStorage.removeItem('activeUserName'); localStorage.removeItem('activeUserRole'); localStorage.removeItem('activeUserEmail'); window.location.replace('login.html');">
          <i data-lucide="log-out" class="w-5 h-5 pointer-events-none"></i>
        </button>
      `;
    }
  }
  
  const dashboardSec = document.getElementById('dashboard-view');
  const patientsSec = document.getElementById('patients-view');
  const appointmentsSec = document.getElementById('appointments-view');
  const staffSec = document.getElementById('staff-view');
  const recordsSec = document.getElementById('records-view');
  const paymentsSec = document.getElementById('payments-view');
  const reportsSec = document.getElementById('reports-view');
  
  // Hide all screens
  dashboardSec.classList.add('hidden');
  patientsSec.classList.add('hidden');
  appointmentsSec.classList.add('hidden');
  if (staffSec) staffSec.classList.add('hidden');
  if (recordsSec) recordsSec.classList.add('hidden');
  if (paymentsSec) paymentsSec.classList.add('hidden');
  if (reportsSec) reportsSec.classList.add('hidden');
  
  // Show target screen
  const targetSec = document.getElementById(`${viewName}-view`);
  if (targetSec) {
    targetSec.classList.remove('hidden');
    targetSec.classList.add('fade-enter-active');
  }
  
  // Reset action utilities header buttons by default
  document.getElementById('header-action-buttons').innerHTML = `
    <button class="relative p-2.5 rounded-xl border border-slate-100 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all duration-200">
      <i data-lucide="bell" class="w-5 h-5"></i>
      <span class="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
    </button>
    <button class="p-2.5 rounded-xl border border-slate-100 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all duration-200">
      <i data-lucide="sliders" class="w-5 h-5"></i>
    </button>
  `;
  
  // Default Brand Subtitle
  if (viewName === 'records') {
    document.getElementById('brand-subtitle').innerText = 'Clinic Admin';
  } else {
    document.getElementById('brand-subtitle').innerText = 'Clinic Management';
  }
  
  // Update user profiles and ordering dynamically to match pixel mock specs
  if (viewName === 'patients') {
    document.getElementById('online-status-text').innerText = 'Saraé J. ONLINE';
    document.getElementById('sidebar-user-avatar').src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
    document.getElementById('sidebar-user-name').innerText = 'Dr. Johnson';
    document.getElementById('sidebar-user-role').innerText = 'Administrator';
    
    // Header search placeholder
    document.getElementById('global-search').placeholder = 'Global search records...';
    
    // Normal ordering: text left, avatar right
    document.getElementById('header-user-widget').className = "flex items-center gap-3 flex-row";
    document.getElementById('header-profile-text-container').innerHTML = `
      <h4 class="text-sm font-bold text-slate-800" id="header-user-name">Dr. Johnson</h4>
      <p class="text-xs text-slate-400 font-medium" id="header-user-role">Administrator</p>
    `;
    document.getElementById('header-avatar-container').innerHTML = `
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Dr. Johnson" class="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-sm" id="header-user-avatar">
    `;
    
  } else if (viewName === 'appointments') {
    document.getElementById('online-status-text').innerText = 'Dr. Ismail ONLINE';
    document.getElementById('sidebar-user-avatar').src = 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150&h=150';
    document.getElementById('sidebar-user-name').innerText = 'Dr. Ismail';
    document.getElementById('sidebar-user-role').innerText = 'Chief Administrator';
    document.getElementById('global-search').placeholder = 'Search patients, appointments, or staff...';
    
    // Swap: initials chip MI on left, name Mohamed Ismail on right
    document.getElementById('header-user-widget').className = "flex items-center gap-3 flex-row-reverse";
    document.getElementById('header-profile-text-container').innerHTML = `
      <h4 class="text-sm font-extrabold text-slate-800" id="header-user-name">Mohamed Ismail</h4>
    `;
    document.getElementById('header-avatar-container').innerHTML = `
      <div class="w-9 h-9 rounded-full bg-clinic-800 text-white flex items-center justify-center font-extrabold font-display shadow-md shadow-clinic-800/10 text-xs flex-shrink-0">
        MI
      </div>
    `;
    
  } else if (viewName === 'staff') {
    // Dr. Sarah Wilson credentials
    document.getElementById('online-status-text').innerText = 'Dr. Wilson ONLINE';
    document.getElementById('sidebar-user-avatar').src = 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=150&h=150';
    document.getElementById('sidebar-user-name').innerText = 'Dr. Sarah Wilson';
    document.getElementById('sidebar-user-role').innerText = 'Administrator';
    document.getElementById('global-search').placeholder = 'Search staff members, schedules...';
    
    // Normal ordering: text left, circular avatar right (rounded-full)
    document.getElementById('header-user-widget').className = "flex items-center gap-3 flex-row";
    document.getElementById('header-profile-text-container').innerHTML = `
      <h4 class="text-sm font-extrabold text-slate-800" id="header-user-name">Dr. Sarah Wilson</h4>
      <p class="text-xs text-slate-400 font-semibold mt-0.5" id="header-user-role">Administrator</p>
    `;
    document.getElementById('header-avatar-container').innerHTML = `
      <img src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=150&h=150" alt="Dr. Sarah Wilson" class="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" id="header-user-avatar">
    `;
    
  } else if (viewName === 'records') {
    // Dr. Sarah Chen credentials for medical records
    document.getElementById('online-status-text').innerText = 'Dr. Chen ONLINE';
    document.getElementById('sidebar-user-avatar').src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150';
    document.getElementById('sidebar-user-name').innerText = 'Dr. Sarah Chen';
    document.getElementById('sidebar-user-role').innerText = 'Administrator';
    document.getElementById('global-search').placeholder = 'Global search...';

    // Top Action buttons: bell icon and informational help icon (question mark circle)
    document.getElementById('header-action-buttons').innerHTML = `
      <button class="relative p-2.5 rounded-xl border border-slate-100 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all duration-200">
        <i data-lucide="bell" class="w-5 h-5"></i>
        <span class="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
      </button>
      <button class="p-2.5 rounded-xl border border-slate-100 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all duration-200">
        <i data-lucide="help-circle" class="w-5 h-5"></i>
      </button>
    `;

    // Normal ordering: text left, circular avatar right (rounded-full)
    document.getElementById('header-user-widget').className = "flex items-center gap-3 flex-row";
    document.getElementById('header-profile-text-container').innerHTML = `
      <h4 class="text-sm font-bold text-slate-800" id="header-user-name">Dr. Sarah Chen</h4>
      <p class="text-xs text-slate-400 font-medium" id="header-user-role">Administrator</p>
    `;
    document.getElementById('header-avatar-container').innerHTML = `
      <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150" alt="Dr. Sarah Chen" class="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" id="header-user-avatar">
    `;

    // Refresh records metrics
    renderMedicalRecordsKpis();
    renderClinicalHistoryTable(medicalRecordsData.clinicalHistory);
    renderRecentReports();
    renderMedicationAlerts();

  } else if (viewName === 'payments') {
    // Dr. Ismail as sidebar user, Admin User (Clinic Manager) as top header user
    document.getElementById('online-status-text').innerText = 'Admin ONLINE';
    document.getElementById('sidebar-user-avatar').src = 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150&h=150';
    document.getElementById('sidebar-user-name').innerText = 'Dr. Ismail';
    document.getElementById('sidebar-user-role').innerText = 'Chief Administrator';
    document.getElementById('global-search').placeholder = 'Search invoices or patients...';

    // Top action buttons: notification bell icon and chat/message square icon
    document.getElementById('header-action-buttons').innerHTML = `
      <button class="relative p-2.5 rounded-xl border border-slate-100 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all duration-200">
        <i data-lucide="bell" class="w-5 h-5"></i>
        <span class="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
      </button>
      <button class="p-2.5 rounded-xl border border-slate-100 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all duration-200">
        <i data-lucide="message-square" class="w-5 h-5"></i>
      </button>
    `;

    // Normal ordering: text left, circular avatar right (rounded-full)
    document.getElementById('header-user-widget').className = "flex items-center gap-3 flex-row";
    document.getElementById('header-profile-text-container').innerHTML = `
      <h4 class="text-sm font-bold text-slate-800" id="header-user-name">Admin User</h4>
      <p class="text-xs text-slate-400 font-medium" id="header-user-role">Clinic Manager</p>
    `;
    document.getElementById('header-avatar-container').innerHTML = `
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Admin User" class="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" id="header-user-avatar">
    `;

    // Refresh Payments metrics
    renderPaymentsKpis();
    renderTransactionsTable(paymentsData.transactions);
    renderDeptRevenue();
    renderPaymentsActivity();

  } else if (viewName === 'reports') {
    // Dr. Jane Doe credentials for reports view
    document.getElementById('online-status-text').innerText = 'Dr. Doe ONLINE';
    
    // Sidebar User Profile card initials JD
    const userCard = document.getElementById('sidebar-user-card');
    if (userCard) {
      userCard.innerHTML = `
        <div class="w-10 h-10 rounded-xl bg-clinic-800 text-white flex items-center justify-center font-black text-sm ring-2 ring-white shadow-md shadow-clinic-500/20 flex-shrink-0" id="sidebar-user-avatar">
          JD
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-bold text-slate-800 truncate" id="sidebar-user-name">Dr. Jane Doe</h4>
          <p class="text-xs text-slate-400 font-medium truncate" id="sidebar-user-role">Medical Director</p>
        </div>
        <button id="sidebarLogoutBtn" class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition focus:outline-none" title="Log Out / Deconnexion" onclick="localStorage.removeItem('authenticated'); localStorage.removeItem('activeUserName'); localStorage.removeItem('activeUserRole'); localStorage.removeItem('activeUserEmail'); window.location.replace('login.html');">
          <i data-lucide="log-out" class="w-5 h-5 pointer-events-none"></i>
        </button>
      `;
    }
    
    document.getElementById('global-search').placeholder = 'Search analytics, records, or staff...';

    // Top action buttons: bell icon and informational circle-question mark help icon
    document.getElementById('header-action-buttons').innerHTML = `
      <button class="relative p-2.5 rounded-xl border border-slate-100 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all duration-200">
        <i data-lucide="bell" class="w-5 h-5"></i>
        <span class="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
      </button>
      <button class="p-2.5 rounded-xl border border-slate-100 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all duration-200">
        <i data-lucide="help-circle" class="w-5 h-5"></i>
      </button>
    `;

    // Normal ordering: text left, circular avatar right (rounded-full)
    document.getElementById('header-user-widget').className = "flex items-center gap-3 flex-row";
    document.getElementById('header-profile-text-container').innerHTML = `
      <h4 class="text-sm font-bold text-slate-800" id="header-user-name">Dr. Jane Doe</h4>
      <p class="text-xs text-slate-400 font-medium" id="header-user-role">Medical Director</p>
    `;
    document.getElementById('header-avatar-container').innerHTML = `
      <img src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=150&h=150" alt="Dr. Jane Doe" class="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" id="header-user-avatar">
    `;

    // Render components
    renderReportsKpis();
    renderDeptPerformance();
    renderDetailedPerformanceLog();
    
    setTimeout(() => {
      initRevenueTrendsChart();
      initPatientAgeChart();
    }, 50);

  } else {
    document.getElementById('online-status-text').innerText = 'Dr. Jenkins ONLINE';
    document.getElementById('sidebar-user-avatar').src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150';
    document.getElementById('sidebar-user-name').innerText = 'Dr. Sarah Jenkins';
    document.getElementById('sidebar-user-role').innerText = 'Senior Admin';
    
    document.getElementById('global-search').placeholder = 'Search patients, records, or doctors...';
    
    // Normal ordering: text left, avatar right
    document.getElementById('header-user-widget').className = "flex items-center gap-3 flex-row";
    document.getElementById('header-profile-text-container').innerHTML = `
      <h4 class="text-sm font-bold text-slate-800" id="header-user-name">Dr. Sarah Jenkins</h4>
      <p class="text-xs text-slate-400 font-medium" id="header-user-role">Senior Administrator</p>
    `;
    document.getElementById('header-avatar-container').innerHTML = `
      <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150" alt="Sarah Jenkins" class="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-sm" id="header-user-avatar">
    `;
  }
  
  updateUserWidget();
  currentView = viewName;
  updateSidebarActiveItem();
  
  // Re-initialize dynamic Lucide icons for header actions or profile card changes
  lucide.createIcons();
  
  // Trigger window resize to adjust ApexCharts widths
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 50);
}

function getInitials(name) {
  if (!name) return 'DR';
  let cleanName = name.replace(/^(Dr\.|Dr)\s+/i, '');
  const parts = cleanName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getAvatarUrl(name) {
  const lowercaseName = (name || '').toLowerCase();
  if (lowercaseName.includes('johnson') || lowercaseName.includes('ismail') || lowercaseName.includes('ahmed') || lowercaseName.includes('marcus') || lowercaseName.includes('julian') || lowercaseName.includes('admin') || lowercaseName.includes('manager')) {
    return 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
  }
  return 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150';
}

function updateUserWidget() {
  const activeUserName = localStorage.getItem('activeUserName') || 'Dr. Sarah Jenkins';
  const activeUserRole = localStorage.getItem('activeUserRole') || 'Senior Admin';
  const initials = getInitials(activeUserName);

  // Update sidebar-user-name if it exists
  const sidebarUserNameEl = document.getElementById('sidebar-user-name');
  if (sidebarUserNameEl) {
    sidebarUserNameEl.innerText = activeUserName;
  }

  // Update sidebar-user-role if it exists
  const sidebarUserRoleEl = document.getElementById('sidebar-user-role');
  if (sidebarUserRoleEl) {
    sidebarUserRoleEl.innerText = activeUserRole;
  }

  // Update online-status-text
  const onlineStatusTextEl = document.getElementById('online-status-text');
  if (onlineStatusTextEl) {
    onlineStatusTextEl.innerText = activeUserName + ' ONLINE';
  }

  // Update header-user-name
  const headerUserNameEl = document.getElementById('header-user-name');
  if (headerUserNameEl) {
    headerUserNameEl.innerText = activeUserName;
  }

  // Update header-user-role
  const headerUserRoleEl = document.getElementById('header-user-role');
  if (headerUserRoleEl) {
    headerUserRoleEl.innerText = activeUserRole;
  }

  // Update header initials chip if it exists in DOM
  const headerAvatarContainer = document.getElementById('header-avatar-container');
  if (headerAvatarContainer) {
    const initialsDiv = headerAvatarContainer.querySelector('div');
    if (initialsDiv && initialsDiv.innerText.trim().length <= 3) {
      initialsDiv.innerText = initials;
    }
  }

  // Update sidebar-user-avatar image source if it's an image element
  const sidebarUserAvatar = document.getElementById('sidebar-user-avatar');
  if (sidebarUserAvatar) {
    if (sidebarUserAvatar.tagName === 'IMG') {
      sidebarUserAvatar.src = getAvatarUrl(activeUserName);
    } else if (sidebarUserAvatar.tagName === 'DIV') {
      sidebarUserAvatar.innerText = initials;
    }
  }

  // Update header-user-avatar image source if it exists
  const headerUserAvatar = document.getElementById('header-user-avatar');
  if (headerUserAvatar && headerUserAvatar.tagName === 'IMG') {
    headerUserAvatar.src = getAvatarUrl(activeUserName);
  }
}

function updateSidebarActiveItem() {
  const views = ['dashboard', 'patients', 'appointments', 'staff', 'records', 'payments', 'reports'];
  views.forEach(v => {
    const el = document.getElementById(`nav-${v}`);
    if (el) el.classList.remove('nav-item-active');
  });
  
  const activeEl = document.getElementById(`nav-${currentView}`);
  if (activeEl) {
    activeEl.classList.add('nav-item-active');
  }
}

// ==========================================
// RENDERERS (DASHBOARD)
// ==========================================

function renderDashboardKpis() {
  const container = document.getElementById('dashboard-kpi-grid');
  container.innerHTML = '';
  
  dashboardData.kpis.forEach(kpi => {
    let trendColor = 'text-slate-400 bg-slate-100';
    let trendIcon = '';
    
    if (kpi.trendType === 'up') {
      trendColor = 'text-emerald-700 bg-emerald-50';
      trendIcon = '<i data-lucide="trending-up" class="w-3.5 h-3.5"></i>';
    } else if (kpi.trendType === 'pending') {
      trendColor = 'text-orange-700 bg-orange-50';
      trendIcon = '<i data-lucide="clock" class="w-3.5 h-3.5"></i>';
    } else if (kpi.trendType === 'neutral') {
      trendColor = 'text-clinic-800 bg-clinic-50';
    }
    
    container.innerHTML += `
      <div class="bg-white rounded-24 border border-slate-100 p-6 shadow-sm card-hover-lift flex flex-col justify-between">
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold text-slate-400">${kpi.title}</span>
          <div class="p-2.5 bg-slate-50 text-slate-500 rounded-xl">
            <i data-lucide="${kpi.icon}" class="w-5 h-5"></i>
          </div>
        </div>
        <div class="mt-4 flex items-baseline justify-between">
          <span class="text-3xl font-extrabold text-slate-800 tracking-tight font-display">${kpi.value}</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${trendColor}">
            ${trendIcon} ${kpi.trend}
          </span>
        </div>
      </div>
    `;
  });
}

function renderTodaySchedule() {
  const timeline = document.getElementById('schedule-timeline');
  timeline.innerHTML = '';
  
  dashboardData.schedule.forEach(item => {
    timeline.innerHTML += `
      <div class="relative pl-6 border-l-2 border-slate-100 pb-1 last:pb-0">
        <div class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-clinic-500 ring-2 ring-white"></div>
        <div class="p-4 bg-slate-50/50 hover:bg-slate-50 border border-slate-100/50 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-all duration-200">
          <div class="flex items-center gap-3">
            <span class="text-xs font-bold text-clinic-800 font-display">${item.time}</span>
            <div class="h-4 w-px bg-slate-200"></div>
            <div>
              <h4 class="text-sm font-bold text-slate-800 leading-tight">${item.patient}</h4>
              <p class="text-xs font-medium text-slate-400 mt-0.5">${item.doctor} <span class="text-[10px] text-slate-300">•</span> ${item.specialty}</p>
            </div>
          </div>
          <span class="self-start sm:self-auto px-2 py-0.5 text-[9px] font-extrabold rounded-md tracking-wider border ${item.badgeClass}">
            ${item.status}
          </span>
        </div>
      </div>
    `;
  });
}

function renderDepartmentEfficiency() {
  const container = document.getElementById('efficiency-list');
  container.innerHTML = '';
  
  dashboardData.efficiency.forEach(dept => {
    container.innerHTML += `
      <div class="space-y-1.5">
        <div class="flex justify-between items-center text-xs font-bold text-slate-600">
          <span>${dept.department}</span>
          <span class="text-slate-800">${dept.progress}%</span>
        </div>
        <div class="w-full bg-slate-100 rounded-full h-2">
          <div class="${dept.colorClass} h-2 rounded-full" style="width: ${dept.progress}%"></div>
        </div>
      </div>
    `;
  });
}

function renderRecentActivity() {
  const container = document.getElementById('recent-activity-list');
  container.innerHTML = '';
  
  dashboardData.activity.forEach(item => {
    container.innerHTML += `
      <div class="flex items-start gap-3">
        <div class="p-2 rounded-xl flex-shrink-0 ${item.colorClass}">
          <i data-lucide="${item.icon}" class="w-4 h-4"></i>
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-xs font-bold text-slate-700 leading-tight truncate">${item.text}</p>
          <span class="text-[10px] font-semibold text-slate-400 mt-0.5 block">${item.time}</span>
        </div>
      </div>
    `;
  });
}

// ==========================================
// RENDERERS (PATIENTS)
// ==========================================

function renderPatientsKpis() {
  const container = document.getElementById('patients-kpi-grid');
  container.innerHTML = '';
  
  patientsData.kpis.forEach(kpi => {
    let trendColor = '';
    let trendIcon = '';
    
    if (kpi.trendType === 'up') {
      trendColor = 'text-emerald-700 bg-emerald-50';
      trendIcon = '<i data-lucide="trending-up" class="w-3.5 h-3.5"></i>';
    } else if (kpi.trendType === 'down') {
      trendColor = 'text-rose-700 bg-rose-50';
      trendIcon = '<i data-lucide="trending-down" class="w-3.5 h-3.5"></i>';
    }
    
    container.innerHTML += `
      <div class="bg-white rounded-24 border border-slate-100 p-6 shadow-sm card-hover-lift flex flex-col justify-between">
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold text-slate-400">${kpi.title}</span>
          <div class="p-2.5 bg-slate-50 text-slate-500 rounded-xl">
            <i data-lucide="${kpi.icon}" class="w-5 h-5"></i>
          </div>
        </div>
        <div class="mt-4 flex items-baseline justify-between">
          <span class="text-3xl font-extrabold text-slate-800 tracking-tight font-display">${kpi.value}</span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${trendColor}">
            ${trendIcon} ${kpi.trend}
          </span>
        </div>
      </div>
    `;
  });
}

function renderPatientsTable(list) {
  const tbody = document.getElementById('patients-table-body');
  tbody.innerHTML = '';
  
  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-12 text-sm font-semibold text-slate-400">
          No patient records found matching the query.
        </td>
      </tr>
    `;
    return;
  }
  
  list.forEach(patient => {
    tbody.innerHTML += `
      <tr class="hover:bg-slate-50/50 transition-colors duration-150">
        <td class="py-4 px-6">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-clinic-50 border border-clinic-100 flex items-center justify-center text-xs font-bold text-clinic-800 font-display">
              ${patient.initials}
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-800">${patient.name}</h4>
              <p class="text-xs text-slate-400">${patient.email}</p>
            </div>
          </div>
        </td>
        <td class="py-4 px-6 text-sm font-semibold text-slate-600">${patient.id}</td>
        <td class="py-4 px-6 text-sm font-medium text-slate-500">${patient.gender}, ${patient.age} yrs</td>
        <td class="py-4 px-6 text-sm font-medium text-slate-500">${patient.lastVisit}</td>
        <td class="py-4 px-6">
          <span class="inline-flex items-center px-2 py-0.5 text-[9px] font-extrabold rounded-md tracking-wide ${patient.statusClass}">
            ${patient.status}
          </span>
        </td>
        <td class="py-4 px-6 text-center">
          <button onclick="alert('Options for ${patient.name}')" class="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors">
            <i data-lucide="more-vertical" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `;
  });
  
  document.getElementById('pagination-info').innerText = `Showing 1–${list.length} of 2,540 patients`;
  lucide.createIcons();
}

// Search & Filter execution
function filterPatients() {
  const query = document.getElementById('patients-search').value.toLowerCase().trim();
  const statusValue = document.getElementById('status-filter').value;
  
  let filtered = patientsData.patients.filter(p => {
    const matchesQuery = p.name.toLowerCase().includes(query) || 
                         p.id.toLowerCase().includes(query) || 
                         p.email.toLowerCase().includes(query);
    const matchesStatus = statusValue === 'ALL' || p.status === statusValue;
    
    return matchesQuery && matchesStatus;
  });
  
  renderPatientsTable(filtered);
}

// ==========================================
// CHARTS SETUP (APEXCHARTS)
// ==========================================

function initDashboardCharts() {
  const appointmentOptions = {
    series: [{
      name: 'Appointments',
      data: dashboardData.analytics.monthly.data
    }],
    chart: {
      type: 'area',
      height: '100%',
      fontFamily: 'Inter, sans-serif',
      toolbar: { show: false }
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: 3.5,
      colors: ['#1e40af']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.25,
        opacityTo: 0,
        stops: [0, 95, 100],
        colorStops: [
          { offset: 0, color: '#1e40af', opacity: 0.25 },
          { offset: 100, color: '#1e40af', opacity: 0 }
        ]
      }
    },
    markers: {
      size: 6,
      colors: ['#1e40af'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: { size: 8 }
    },
    grid: {
      borderColor: '#f1f5f9',
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    xaxis: {
      categories: dashboardData.analytics.monthly.categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: '#94a3b8', fontSize: '11px', fontWeight: 500 }
      }
    },
    yaxis: {
      labels: {
        style: { colors: '#94a3b8', fontSize: '11px', fontWeight: 500 }
      }
    },
    tooltip: {
      theme: 'light',
      x: { show: true },
      marker: { show: true },
      style: { fontSize: '12px' }
    }
  };

  appointmentChartObj = new ApexCharts(document.querySelector("#appointment-chart"), appointmentOptions);
  appointmentChartObj.render();

  const financialOptions = {
    series: [{
      name: 'Revenue',
      data: dashboardData.financials.data
    }],
    chart: {
      type: 'bar',
      height: 180,
      fontFamily: 'Inter, sans-serif',
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '40%',
        colors: {
          backgroundBarColors: ['#f8fafc'],
          backgroundBarRadius: 6
        }
      }
    },
    colors: ['#1e40af'],
    dataLabels: { enabled: false },
    grid: { show: false },
    xaxis: {
      categories: dashboardData.financials.categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: '#94a3b8', fontSize: '11px', fontWeight: 600 }
      }
    },
    yaxis: { show: false },
    tooltip: {
      theme: 'light',
      y: {
        formatter: function (val) {
          return "$" + val;
        }
      }
    }
  };

  const financialChart = new ApexCharts(document.querySelector("#financial-bar-chart"), financialOptions);
  financialChart.render();
}

function toggleAnalytics(type) {
  const monthlyBtn = document.getElementById('btn-analytics-monthly');
  const weeklyBtn = document.getElementById('btn-analytics-weekly');
  
  if (type === 'monthly') {
    monthlyBtn.className = 'px-4 py-1.5 text-xs font-semibold rounded-lg bg-white text-clinic-800 shadow-sm transition-all duration-200';
    weeklyBtn.className = 'px-4 py-1.5 text-xs font-semibold rounded-lg text-slate-500 hover:text-slate-800 transition-all duration-200';
    
    appointmentChartObj.updateSeries([{
      name: 'Appointments',
      data: dashboardData.analytics.monthly.data
    }]);
    appointmentChartObj.updateOptions({
      xaxis: { categories: dashboardData.analytics.monthly.categories }
    });
  } else {
    weeklyBtn.className = 'px-4 py-1.5 text-xs font-semibold rounded-lg bg-white text-clinic-800 shadow-sm transition-all duration-200';
    monthlyBtn.className = 'px-4 py-1.5 text-xs font-semibold rounded-lg text-slate-500 hover:text-slate-800 transition-all duration-200';
    
    appointmentChartObj.updateSeries([{
      name: 'Appointments',
      data: dashboardData.analytics.weekly.data
    }]);
    appointmentChartObj.updateOptions({
      xaxis: { categories: dashboardData.analytics.weekly.categories }
    });
  }
}

function initPatientsCharts() {
  const trendOptions = {
    series: [{
      name: 'New Registrations',
      data: patientsData.trends.data
    }],
    chart: {
      type: 'bar',
      height: '100%',
      fontFamily: 'Inter, sans-serif',
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '55%',
        distributed: true
      }
    },
    colors: [
      'rgba(30, 64, 175, 0.12)', 'rgba(30, 64, 175, 0.12)', 'rgba(30, 64, 175, 0.12)', 
      'rgba(30, 64, 175, 0.12)', 'rgba(30, 64, 175, 0.12)', 'rgba(30, 64, 175, 0.12)', 
      'rgba(30, 64, 175, 0.12)', 'rgba(30, 64, 175, 0.12)', 'rgba(30, 64, 175, 0.12)', 
      'rgba(30, 64, 175, 0.12)', 'rgba(30, 64, 175, 0.12)', '#1e40af'
    ],
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: {
      borderColor: '#f1f5f9',
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } }
    },
    xaxis: {
      categories: patientsData.trends.categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: '#94a3b8', fontSize: '11px', fontWeight: 600 }
      }
    },
    yaxis: {
      labels: {
        style: { colors: '#94a3b8', fontSize: '11px', fontWeight: 500 }
      }
    },
    tooltip: {
      theme: 'dark',
      custom: function({series, seriesIndex, dataPointIndex, w}) {
        if (dataPointIndex === 11) {
          return '<div class="px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-lg border border-slate-800">' +
            '<span>Dec: 890</span>' +
            '</div>';
        }
        return '<div class="px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg shadow-md">' +
          '<span>Registrations: ' + series[seriesIndex][dataPointIndex] + '</span>' +
          '</div>';
      }
    }
  };

  const trendChart = new ApexCharts(document.querySelector("#registration-trend-chart"), trendOptions);
  trendChart.render();
}

// ==========================================
// RENDERERS (MEDICAL RECORDS VIEW)
// ==========================================

function renderMedicalRecordsKpis() {
  const container = document.getElementById('records-kpi-grid');
  if (!container) return;
  container.innerHTML = '';
  
  medicalRecordsData.kpis.forEach(kpi => {
    container.innerHTML += `
      <div class="bg-white rounded-24 border border-slate-100 p-6 shadow-sm card-hover-lift flex flex-col justify-between">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-black text-slate-400 tracking-wider uppercase">${kpi.title}</span>
          <div class="p-3 rounded-xl ${kpi.iconBgClass}">
            <i data-lucide="${kpi.icon}" class="w-5.5 h-5.5"></i>
          </div>
        </div>
        <div class="mt-4 flex items-baseline justify-between">
          <span class="text-3xl font-extrabold text-slate-800 tracking-tight font-display">${kpi.value}</span>
          <span class="px-2.5 py-0.5 rounded-full text-[10px] tracking-wide font-extrabold ${kpi.trendClass}">
            ${kpi.trend}
          </span>
        </div>
      </div>
    `;
  });
}

function renderClinicalHistoryTable(list) {
  const tbody = document.getElementById('records-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-12 text-sm font-semibold text-slate-400">
          No medical records found matching search query.
        </td>
      </tr>
    `;
    return;
  }
  
  list.forEach(row => {
    tbody.innerHTML += `
      <tr class="hover:bg-slate-50/50 transition-colors duration-150">
        <td class="py-4 px-6">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-clinic-50 border border-clinic-100 flex items-center justify-center text-xs font-bold text-clinic-800 font-display flex-shrink-0">
              ${row.initials}
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-800">${row.name}</h4>
              <p class="text-[10px] text-slate-400 font-semibold">${row.gender}, ${row.age}</p>
            </div>
          </div>
        </td>
        <td class="py-4 px-6 text-xs font-extrabold text-slate-600">${row.recordId}</td>
        <td class="py-4 px-6 text-xs font-medium text-slate-500">${row.date}</td>
        <td class="py-4 px-6">
          <div class="flex items-center gap-2">
            <img src="${row.avatar}" class="w-6 h-6 rounded-full object-cover shadow-sm">
            <div>
              <h5 class="text-xs font-bold text-slate-700 leading-none">${row.specialist}</h5>
              <span class="text-[9px] text-slate-400 mt-0.5 block">${row.specialty}</span>
            </div>
          </div>
        </td>
        <td class="py-4 px-6">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
            ${row.diagnosis}
          </span>
        </td>
        <td class="py-4 px-6 text-center">
          <button onclick="alert('Menu ${row.recordId}')" class="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors">
            <i data-lucide="more-vertical" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `;
  });
}

function renderRecentReports() {
  const container = document.getElementById('records-reports-list');
  if (!container) return;
  container.innerHTML = '';
  
  medicalRecordsData.labReports.forEach(report => {
    container.innerHTML += `
      <div class="flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-100/60 rounded-2xl transition-all duration-200">
        <div class="min-w-0 flex-1">
          <h4 class="text-xs font-bold text-slate-800 truncate">${report.title}</h4>
          <p class="text-[10px] font-semibold text-slate-400 mt-1">Patient: ${report.patient} <span class="text-slate-300 mx-1">•</span> ${report.time}</p>
        </div>
        <button onclick="alert('Viewing ${report.title} PDF...')" class="ml-3 p-2 bg-white text-clinic-800 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all duration-150 flex-shrink-0">
          <i data-lucide="file-text" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  });
}

function renderMedicationAlerts() {
  const container = document.getElementById('records-alerts-list');
  if (!container) return;
  container.innerHTML = '';
  
  medicalRecordsData.alerts.forEach(alert => {
    container.innerHTML += `
      <div class="p-4 rounded-2xl ${alert.bgClass} border space-y-2.5 relative">
        <div class="flex justify-between items-center">
          <span class="inline-flex px-2 py-0.5 text-[9px] font-black ${alert.badgeClass} rounded-md tracking-wider">${alert.badge}</span>
          <span class="text-[9px] font-bold text-slate-400">${alert.type.split(' ')[0]}</span>
        </div>
        <p class="text-[11px] font-medium leading-relaxed">
          ${alert.description}
        </p>
      </div>
    `;
  });
}

function filterRecords() {
  const query = document.getElementById('records-filter-input').value.toLowerCase().trim();
  const filtered = medicalRecordsData.clinicalHistory.filter(row => {
    return row.name.toLowerCase().includes(query) || row.recordId.toLowerCase().includes(query) || row.diagnosis.toLowerCase().includes(query);
  });
  renderClinicalHistoryTable(filtered);
  lucide.createIcons();
}

// ==========================================
// RENDERERS (PAYMENTS VIEW)
// ==========================================

function renderPaymentsKpis() {
  const container = document.getElementById('payments-kpi-grid');
  if (!container) return;
  container.innerHTML = '';
  
  paymentsData.kpis.forEach(kpi => {
    let trendBadge = '';
    let bottomText = '';
    
    if (kpi.trendType === 'up') {
      trendBadge = `
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50">
          ${kpi.trend}
        </span>
      `;
      bottomText = `<div class="pt-4 border-t border-slate-50 mt-4 text-xs font-medium text-slate-400">${kpi.subtext}</div>`;
    } else if (kpi.trendType === 'neutral') {
      trendBadge = `
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200">
          ${kpi.trend}
        </span>
      `;
      bottomText = `<div class="pt-4 border-t border-slate-50 mt-4 text-xs font-medium text-slate-400">${kpi.subtext}</div>`;
    } else if (kpi.trendType === 'neutral-blue') {
      trendBadge = `
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-clinic-800 bg-clinic-50 border border-clinic-100">
          ${kpi.trend}
        </span>
      `;
      bottomText = `<div class="pt-4 border-t border-slate-50 mt-4 text-xs font-medium text-slate-400">${kpi.subtext}</div>`;
    } else if (kpi.trendType === 'progress') {
      bottomText = `
        <div class="mt-5 space-y-1.5">
          <div class="w-full bg-slate-100 rounded-full h-2">
            <div class="bg-emerald-500 h-2 rounded-full" style="width: ${kpi.trend}"></div>
          </div>
          <div class="flex justify-between text-[10px] font-bold text-slate-400">
            <span>Daily Target</span>
            <span>${kpi.trend} Completed</span>
          </div>
        </div>
      `;
    }
    
    let iconColorClass = '';
    if (kpi.color === 'blue') {
      iconColorClass = 'bg-blue-500 text-white';
    } else if (kpi.color === 'orange') {
      iconColorClass = 'bg-orange-500 text-white';
    } else if (kpi.color === 'emerald') {
      iconColorClass = 'bg-emerald-500 text-white';
    }
    
    container.innerHTML += `
      <div class="bg-white rounded-24 border border-slate-100 p-6 shadow-sm card-hover-lift flex flex-col justify-between">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="p-3.5 ${iconColorClass} rounded-xl flex-shrink-0">
              <i data-lucide="${kpi.icon}" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">${kpi.title}</span>
              <span class="text-2xl font-extrabold text-slate-800 tracking-tight font-display mt-0.5 block">${kpi.value}</span>
            </div>
          </div>
          ${trendBadge}
        </div>
        ${bottomText}
      </div>
    `;
  });
}

function renderTransactionsTable(list) {
  const tbody = document.getElementById('payments-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-12 text-sm font-semibold text-slate-400">
          No transactions found matching search query.
        </td>
      </tr>
    `;
    return;
  }
  
  list.forEach(row => {
    tbody.innerHTML += `
      <tr class="hover:bg-slate-50/50 transition-colors duration-150">
        <td class="py-4 px-6">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-clinic-50 border border-clinic-100 flex items-center justify-center text-xs font-bold text-clinic-800 font-display flex-shrink-0">
              ${row.initials}
            </div>
            <h4 class="text-sm font-bold text-slate-800">${row.name}</h4>
          </div>
        </td>
        <td class="py-4 px-6 text-xs font-extrabold text-slate-600">${row.invoiceId}</td>
        <td class="py-4 px-6 text-xs font-medium text-slate-500">${row.date}</td>
        <td class="py-4 px-6 text-xs font-extrabold text-slate-800">${row.amount}</td>
        <td class="py-4 px-6">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
            <i data-lucide="${row.methodIcon}" class="w-3.5 h-3.5"></i> ${row.method}
          </span>
        </td>
        <td class="py-4 px-6 text-center">
          <button onclick="alert('Options for ${row.invoiceId}')" class="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors">
            <i data-lucide="more-vertical" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `;
  });
  
  document.getElementById('payments-pagination-info').innerText = `Showing ${list.length} of 128 transactions`;
}

function renderDeptRevenue() {
  const container = document.getElementById('payments-dept-revenue');
  if (!container) return;
  container.innerHTML = '';
  
  paymentsData.departments.forEach(dept => {
    container.innerHTML += `
      <div class="space-y-1.5">
        <div class="flex justify-between items-center text-xs font-bold text-slate-600">
          <span>${dept.name}</span>
          <span class="text-slate-800 font-extrabold">${dept.value}</span>
        </div>
        <div class="w-full bg-slate-100 rounded-full h-2">
          <div class="${dept.colorClass} h-2 rounded-full" style="width: ${dept.progress}%"></div>
        </div>
      </div>
    `;
  });
}

function renderPaymentsActivity() {
  const container = document.getElementById('payments-activity-list');
  if (!container) return;
  container.innerHTML = '';
  
  paymentsData.activities.forEach(activity => {
    container.innerHTML += `
      <div class="flex items-start gap-3 p-2 hover:bg-slate-50 border border-transparent hover:border-slate-100 rounded-2xl transition-all duration-200">
        <div class="p-2.5 rounded-xl flex-shrink-0 ${activity.colorClass}">
          <i data-lucide="${activity.icon}" class="w-4.5 h-4.5"></i>
        </div>
        <div class="min-w-0 flex-1">
          <h4 class="text-xs font-bold text-slate-800 leading-tight">${activity.text}</h4>
          <p class="text-[10px] font-semibold text-slate-400 mt-1">${activity.subtext}</p>
        </div>
      </div>
    `;
  });
}

function filterTransactions() {
  const query = document.getElementById('payments-search-input').value.toLowerCase().trim();
  const filtered = paymentsData.transactions.filter(row => {
    return row.name.toLowerCase().includes(query) || row.invoiceId.toLowerCase().includes(query) || row.method.toLowerCase().includes(query);
  });
  renderTransactionsTable(filtered);
  lucide.createIcons();
}

// ==========================================
// RENDERERS (REPORTS & ANALYTICS VIEW)
// ==========================================

function renderReportsKpis() {
  const container = document.getElementById('reports-kpi-grid');
  if (!container) return;
  container.innerHTML = '';
  
  reportsData.kpis.forEach((kpi, idx) => {
    let trendBadge = '';
    
    if (idx === 2) {
      // Patient Satisfaction has 5 gold stars in top right corner
      trendBadge = `
        <div class="flex items-center gap-0.5 text-amber-400">
          <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
          <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
          <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
          <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
          <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
        </div>
      `;
    } else {
      trendBadge = `
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${kpi.trendClass}">
          ${kpi.trend}
        </span>
      `;
    }
    
    container.innerHTML += `
      <div class="bg-white rounded-24 border border-slate-100 p-6 shadow-sm card-hover-lift flex flex-col justify-between">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="p-3.5 rounded-xl ${kpi.iconClass} flex-shrink-0">
              <i data-lucide="${kpi.icon}" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">${kpi.title}</span>
              <span class="text-2xl font-extrabold text-slate-800 tracking-tight font-display mt-0.5 block">${kpi.value}</span>
            </div>
          </div>
          ${trendBadge}
        </div>
      </div>
    `;
  });
}

let reportsMixedChart = null;
function initRevenueTrendsChart() {
  const container = document.querySelector("#revenue-trends-chart");
  if (!container) return;
  
  if (reportsMixedChart) {
    reportsMixedChart.destroy();
  }
  
  const options = {
    series: [{
      name: 'Revenue (Column)',
      type: 'column',
      data: reportsData.revenueTrends.columnData
    }, {
      name: 'Revenue Trend (Line)',
      type: 'line',
      data: reportsData.revenueTrends.lineData
    }],
    chart: {
      height: '100%',
      type: 'line',
      fontFamily: 'Inter, sans-serif',
      toolbar: { show: false }
    },
    stroke: {
      width: [0, 3],
      curve: 'smooth',
      colors: ['#1e40af']
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        borderRadius: 6
      }
    },
    colors: [
      function({ value, seriesIndex, dataPointIndex }) {
        if (seriesIndex === 0) {
          if (dataPointIndex === 5) {
            return '#1e40af'; // OCTOBER peak
          }
          return 'rgba(59, 130, 246, 0.3)';
        }
        return '#1e40af';
      }
    ],
    grid: {
      borderColor: '#f1f5f9',
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } }
    },
    xaxis: {
      categories: reportsData.revenueTrends.months,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: '#94a3b8', fontSize: '11px', fontWeight: 500 }
      }
    },
    yaxis: {
      labels: {
        style: { colors: '#94a3b8', fontSize: '11px', fontWeight: 500 }
      }
    },
    legend: { show: false },
    tooltip: {
      theme: 'light',
      shared: true,
      intersect: false
    }
  };
  
  reportsMixedChart = new ApexCharts(container, options);
  reportsMixedChart.render();
}

let reportsDonutChart = null;
function initPatientAgeChart() {
  const container = document.querySelector("#patient-age-donut-chart");
  if (!container) return;
  
  if (reportsDonutChart) {
    reportsDonutChart.destroy();
  }
  
  const options = {
    series: reportsData.ageGroups.shares,
    chart: {
      type: 'donut',
      height: 240,
      fontFamily: 'Inter, sans-serif'
    },
    labels: ['18 - 35 yrs', '36 - 55 yrs', '55+ yrs'],
    colors: ['#2563eb', '#14b8a6', '#b45309'],
    dataLabels: { enabled: false },
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '11px',
              fontWeight: 600,
              color: '#94a3b8',
              offsetY: 20
            },
            value: {
              show: true,
              fontSize: '22px',
              fontWeight: 800,
              color: '#1e293b',
              offsetY: -16,
              formatter: function (val) {
                return "2.8k";
              }
            },
            total: {
              show: true,
              label: 'PATIENTS',
              fontSize: '11px',
              fontWeight: 700,
              color: '#94a3b8',
              formatter: function (w) {
                return "2.8k";
              }
            }
          }
        }
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        }
      }
    }
  };
  
  reportsDonutChart = new ApexCharts(container, options);
  reportsDonutChart.render();
}

function renderDeptPerformance() {
  const container = document.getElementById('reports-dept-performance');
  if (!container) return;
  container.innerHTML = '';
  
  reportsData.departments.forEach(dept => {
    container.innerHTML += `
      <div class="space-y-2 p-4 bg-slate-50 border border-slate-100/60 rounded-2xl">
        <div class="flex justify-between items-center text-xs font-bold text-slate-600">
          <span>${dept.name}</span>
          <span class="text-slate-800 font-extrabold">${dept.visits}</span>
        </div>
        <div class="w-full bg-slate-200/60 rounded-full h-2">
          <div class="bg-clinic-800 h-2 rounded-full" style="width: ${dept.progress}%"></div>
        </div>
        <div class="text-[10px] font-bold text-slate-400 flex items-center gap-1">
          <i data-lucide="star" class="w-3.5 h-3.5 text-amber-400 fill-current"></i> ${dept.score}
        </div>
      </div>
    `;
  });
}

function renderDetailedPerformanceLog() {
  const tbody = document.getElementById('reports-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  reportsData.doctors.forEach((doc, idx) => {
    const photoUrl = idx === 0 
      ? 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=80&h=80'
      : idx === 1 
      ? 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=80&h=80'
      : 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=80&h=80';
      
    tbody.innerHTML += `
      <tr class="hover:bg-slate-50/50 transition-colors duration-150">
        <td class="py-4 px-6">
          <div class="flex items-center gap-3">
            <img src="${photoUrl}" alt="${doc.name}" class="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-white flex-shrink-0">
            <div>
              <h4 class="text-sm font-bold text-slate-800 leading-tight">${doc.name}</h4>
              <p class="text-[10px] text-slate-400 font-semibold mt-0.5">${doc.title}</p>
            </div>
          </div>
        </td>
        <td class="py-4 px-6 text-xs font-semibold text-slate-600">${doc.department}</td>
        <td class="py-4 px-6 text-xs font-bold text-slate-600">${doc.consultations}</td>
        <td class="py-4 px-6 text-xs font-extrabold text-slate-800">${doc.revenue}</td>
        <td class="py-4 px-6">
          <div class="flex items-center gap-1 text-xs font-bold text-slate-700">
            <i data-lucide="star" class="w-3.5 h-3.5 text-amber-400 fill-current"></i> ${doc.satisfaction.split(' ')[0]}
          </div>
        </td>
        <td class="py-4 px-6">
          <span class="inline-flex items-center px-2.5 py-0.5 text-[9px] font-black rounded-md tracking-wider border ${doc.badgeClass}">
            ${doc.status}
          </span>
        </td>
        <td class="py-4 px-6 text-center">
          <button onclick="alert('Options for ${doc.name}')" class="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors">
            <i data-lucide="more-vertical" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `;
  });
}

// ==========================================
// BACKEND API SYNC & CRUD CONTROLLER
// ==========================================
let doctorsList = [];
let appointmentsList = [];
let triageList = [];

window.loadBackendData = function() {
  return Promise.all([
    fetch(API_BASE + '/api/doctors').then(res => res.json()),
    fetch(API_BASE + '/api/appointments').then(res => res.json()),
    fetch(API_BASE + '/api/triage').then(res => res.json())
  ])
  .then(([doctors, appointments, triage]) => {
    doctorsList = doctors;
    appointmentsList = appointments;
    triageList = triage;
    
    // Dynamic Dropdown Population for booking modal
    const docSelect = document.getElementById('aptDoctorName');
    if (docSelect) {
      docSelect.innerHTML = doctorsList.map(d => `<option value="${d.name}">${d.name}</option>`).join('');
    }
    
    // Trigger Renders
    renderDashboardKpis();
    renderTodaySchedule();
    renderCalendarSheet();
    renderDoctorAvailability();
    renderWaitlist();
    renderStaffTable();
    
    // Recalculate KPIs from DB
    const kpiPatientsVal = document.querySelector('#dashboard-kpi-grid > div:nth-child(1) span.text-3xl');
    if (kpiPatientsVal) {
      kpiPatientsVal.textContent = (2540 + appointmentsList.length);
    }
    const kpiAppointmentsVal = document.querySelector('#dashboard-kpi-grid > div:nth-child(2) span.text-3xl');
    if (kpiAppointmentsVal) {
      kpiAppointmentsVal.textContent = appointmentsList.length;
    }
    const kpiDoctorsVal = document.querySelector('#dashboard-kpi-grid > div:nth-child(4) span.text-3xl');
    if (kpiDoctorsVal) {
      const activeCount = doctorsList.filter(d => d.status.toLowerCase() === 'active').length;
      kpiDoctorsVal.textContent = `${activeCount}/${doctorsList.length}`;
    }
    
    // Also update Appointments View KPIs
    const kpiAptsTotal = document.querySelector('#appointments-kpi-grid > div:nth-child(1) span.text-3xl');
    if (kpiAptsTotal) {
      kpiAptsTotal.textContent = appointmentsList.length;
    }
    const kpiAptsPending = document.querySelector('#appointments-kpi-grid > div:nth-child(2) span.text-3xl');
    if (kpiAptsPending) {
      const pendingCount = appointmentsList.filter(a => a.status.toLowerCase() === 'scheduled' || a.status.toLowerCase() === 'pending').length;
      kpiAptsPending.textContent = String(pendingCount).padStart(2, '0');
    }
    
    console.log('Successfully synchronized client with backend database.');
  })
  .catch(err => {
    console.error('Error fetching data from server:', err);
    showToast('Error', 'Unable to sync database state with Express server.');
  });
};

// ==========================================
// MODAL STATE MANAGEMENT
// ==========================================
window.openModal = function(modalName) {
  const backdrop = document.getElementById('modalBackdrop');
  const modal = document.getElementById(`${modalName}Modal`);
  
  if (!backdrop || !modal) return;
  
  backdrop.classList.remove('hidden');
  modal.classList.remove('hidden');
  
  setTimeout(() => {
    backdrop.classList.add('opacity-100');
    modal.classList.remove('scale-95');
    modal.classList.add('scale-100');
  }, 10);
  
  lucide.createIcons();
};

window.closeModal = function(modalName) {
  const backdrop = document.getElementById('modalBackdrop');
  const modal = document.getElementById(`${modalName}Modal`);
  
  if (!backdrop || !modal) return;
  
  modal.classList.remove('scale-100');
  modal.classList.add('scale-95');
  
  setTimeout(() => {
    backdrop.classList.add('hidden');
    modal.classList.add('hidden');
  }, 300);
};

// ==========================================
// TOAST ALERTS ENGINE
// ==========================================
window.showToast = function(type, message) {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;
  
  const toast = document.createElement('div');
  toast.className = 'p-4 rounded-xl text-white font-medium shadow-lg transition duration-300 transform translate-x-full min-w-[320px] max-w-[420px] flex items-center gap-3 bg-slate-900';
  
  if (type === 'Success') {
    toast.classList.add('border-l-4', 'border-emerald-500');
    toast.innerHTML = `
      <svg class="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <span class="text-sm">${message}</span>
    `;
  } else if (type === 'Error') {
    toast.classList.add('border-l-4', 'border-rose-500');
    toast.innerHTML = `
      <svg class="w-5 h-5 text-rose-500 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="8"/><line x1="12" y1="12" x2="12" y2="12"/></svg>
      <span class="text-sm">${message}</span>
    `;
  } else {
    toast.classList.add('border-l-4', 'border-blue-500');
    toast.innerHTML = `
      <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      <span class="text-sm">${message}</span>
    `;
  }

  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.remove('translate-x-full');
  }, 50);

  setTimeout(() => {
    toast.classList.add('translate-x-full', 'opacity-0');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
};

// ==========================================
// DETAILED CALENDAR & LIST RENDERING
// ==========================================
window.renderTodaySchedule = function() {
  const timeline = document.getElementById('schedule-timeline');
  if (!timeline) return;
  timeline.innerHTML = '';
  
  if (appointmentsList.length === 0) {
    timeline.innerHTML = '<p class="text-xs font-semibold text-slate-400 text-center py-6">No appointments booked today.</p>';
    return;
  }
  
  appointmentsList.forEach(item => {
    const badgeClass = item.status === 'Confirmed' || item.status === 'Completed'
      ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
      : item.status === 'In Progress'
      ? 'bg-blue-50/80 text-blue-700 border-blue-100'
      : 'bg-orange-50 text-orange-700 border-orange-100'; 
      
    timeline.innerHTML += `
      <div class="relative pl-6 border-l-2 border-slate-100 pb-1 last:pb-0">
        <div class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-clinic-500 ring-2 ring-white"></div>
        <div class="p-4 bg-slate-50/50 hover:bg-slate-50 border border-slate-100/50 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-all duration-200">
          <div class="flex items-center gap-3">
            <span class="text-xs font-bold text-clinic-800 font-display">${item.time.includes(',') ? item.time.split(',')[1].trim() : item.time}</span>
            <div class="h-4 w-px bg-slate-200"></div>
            <div>
              <h4 class="text-sm font-bold text-slate-800 leading-tight">${item.patientName}</h4>
              <p class="text-xs font-medium text-slate-400 mt-0.5">${item.doctorName} <span class="text-[10px] text-slate-300">•</span> ${item.department}</p>
            </div>
          </div>
          <span class="self-start sm:self-auto px-2 py-0.5 text-[9px] font-extrabold rounded-md tracking-wider border ${badgeClass}">
            ${item.status.toUpperCase()}
          </span>
        </div>
      </div>
    `;
  });
};

window.renderCalendarSheet = function() {
  const container = document.getElementById('appointments-calendar-sheet');
  if (!container) return;
  
  let html = `
    <div class="grid grid-cols-[80px_repeat(6,1fr)] gap-4 items-center mb-6">
      <div class="w-20"></div>
      <div class="flex flex-col items-center justify-center font-display text-[11px] text-slate-400 font-bold"><span class="tracking-wider block">MON 15</span></div>
      <div class="flex flex-col items-center justify-center font-display text-[11px] text-slate-400 font-bold"><span class="tracking-wider block">TUE 16</span></div>
      <div class="flex flex-col items-center justify-center font-display text-[11px] text-clinic-800 font-extrabold"><span class="tracking-wider block">WED 17</span></div>
      <div class="flex flex-col items-center justify-center font-display text-[11px] text-slate-400 font-bold"><span class="tracking-wider block">THU 18</span></div>
      <div class="flex flex-col items-center justify-center font-display text-[11px] text-slate-400 font-bold"><span class="tracking-wider block">FRI 19</span></div>
      <div class="flex flex-col items-center justify-center font-display text-[11px] text-slate-400 font-bold"><span class="tracking-wider block">SAT 20</span></div>
    </div>
    
    <div class="space-y-4">
  `;
  
  const hours = ['09:00', '10:00', '11:00', '12:00', '01:00', '02:00'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  hours.forEach(hour => {
    html += `<div class="grid grid-cols-[80px_repeat(6,1fr)] gap-4 items-center">`;
    html += `<div class="text-[11px] font-bold text-slate-400/80">${hour}</div>`;
    
    if (hour === '12:00') {
      html += `
        <div class="col-span-6 bg-slate-100/70 border border-slate-200/30 rounded-xl flex items-center justify-center h-12 relative overflow-hidden shadow-inner">
          <span class="text-[10px] font-black tracking-widest text-slate-400 font-display flex items-center gap-2">LUNCH BREAK</span>
        </div>
      `;
    } else {
      days.forEach(day => {
        const apt = appointmentsList.find(a => {
          let aptDay = 'Wednesday';
          let aptTimeStr = a.time;
          if (a.time.includes(',')) {
            const parts = a.time.split(',');
            aptDay = parts[0].trim();
            aptTimeStr = parts[1].trim();
          }
          
          const hourNum = hour.split(':')[0]; 
          const aptHourNum = aptTimeStr.split(':')[0]; 
          const aptPeriod = aptTimeStr.toLowerCase().includes('pm') ? 'pm' : 'am';
          const hourPeriod = parseInt(hourNum) >= 12 || hourNum === '01' || hourNum === '02' ? 'pm' : 'am';
          
          return aptDay.toLowerCase() === day.toLowerCase() && aptHourNum === hourNum && aptPeriod === hourPeriod;
        });
        
        if (apt) {
          let blockClass = 'block-blue';
          let textClass = 'text-clinic-900';
          let subtextClass = 'text-clinic-700';
          if (apt.department.toLowerCase().includes('pediatric')) {
            blockClass = 'block-teal';
            textClass = 'text-teal-900';
            subtextClass = 'text-teal-700';
          } else if (apt.department.toLowerCase().includes('cardio')) {
            blockClass = 'block-sage';
            textClass = 'text-emerald-950';
            subtextClass = 'text-emerald-700';
          } else if (apt.department.toLowerCase().includes('dermatology') || apt.department.toLowerCase().includes('ortho')) {
            blockClass = 'block-tan';
            textClass = 'text-amber-950';
            subtextClass = 'text-amber-700';
          }
          
          const displayTime = apt.time.includes(',') ? apt.time.split(',')[1].trim() : apt.time;
          
          html += `
            <div onclick="alert('Appointment details for ${apt.patientName}')" class="${blockClass} p-3 border-l-4 rounded-xl block-card-hover flex flex-col justify-center h-20 shadow-sm cursor-pointer">
              <span class="text-xs font-bold block leading-tight ${textClass}">${displayTime} – ${apt.patientName}</span>
              <span class="text-[10px] opacity-75 mt-0.5 block leading-none font-medium ${subtextClass}">${apt.department}</span>
            </div>
          `;
        } else {
          html += `<div class="border border-dashed border-slate-200/80 rounded-xl h-20"></div>`;
        }
      });
    }
    
    html += `</div>`;
  });
  
  html += `</div>`;
  container.innerHTML = html;
};

window.renderDoctorAvailability = function() {
  const container = document.getElementById('doctor-availability-list');
  if (!container) return;
  container.innerHTML = '';
  
  if (doctorsList.length === 0) {
    container.innerHTML = '<p class="text-xs font-semibold text-slate-400 text-center py-4">No practitioners registered.</p>';
    return;
  }
  
  doctorsList.forEach(doc => {
    let statusColor = 'bg-slate-400';
    let statusClass = 'bg-slate-100 text-slate-600 border-slate-200';
    if (doc.status.toLowerCase() === 'active' || doc.status.toLowerCase() === 'available') {
      statusColor = 'bg-emerald-500';
      statusClass = 'bg-emerald-50 text-emerald-700 border-emerald-100';
    } else if (doc.status.toLowerCase() === 'on break' || doc.status.toLowerCase() === 'busy') {
      statusColor = 'bg-orange-500';
      statusClass = 'bg-orange-50 text-orange-850 border-orange-100';
    }
    
    container.innerHTML += `
      <div class="flex items-center justify-between p-2 hover:bg-slate-50 border border-transparent hover:border-slate-100 rounded-2xl transition-all duration-200">
        <div class="flex items-center gap-3">
          <div class="relative flex-shrink-0">
            <img src="${doc.avatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&h=100'}" class="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm">
            <span class="absolute right-0 bottom-0 w-2.5 h-2.5 rounded-full border-2 border-white ${statusColor}"></span>
          </div>
          <div>
            <h4 class="text-sm font-bold text-slate-800 leading-tight">${doc.name}</h4>
            <p class="text-[10px] font-semibold text-slate-400 mt-0.5">${doc.specialty}</p>
          </div>
        </div>
        <span class="px-2.5 py-0.5 text-[9px] font-extrabold tracking-wider rounded-full border ${statusClass}">${doc.status.toUpperCase()}</span>
      </div>
    `;
  });
};

window.renderWaitlist = function() {
  const container = document.getElementById('waitlist-container-list');
  const counter = document.getElementById('waitlist-counter');
  if (!container) return;
  
  const pendingTriage = triageList.filter(t => t.status.toLowerCase() === 'pending');
  if (counter) counter.textContent = pendingTriage.length;
  
  container.innerHTML = '';
  
  if (pendingTriage.length === 0) {
    container.innerHTML = `
      <p class="text-xs font-semibold text-slate-400 text-center py-6">
        No patients currently queued.
      </p>
    `;
    return;
  }
  
  pendingTriage.forEach((item, index) => {
    const num = String(index + 1).padStart(2, '0');
    container.innerHTML += `
      <div class="flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-2xl transition-all duration-200">
        <div class="flex items-center gap-3">
          <span class="text-[10px] font-black text-slate-400 font-display bg-white border border-slate-200/50 w-6 h-6 rounded-lg flex items-center justify-center shadow-sm">${num}</span>
          <div>
            <h4 class="text-sm font-bold text-slate-800">${item.patientName}</h4>
            <p class="text-[10px] font-semibold text-slate-400 mt-0.5">Vitals: BP ${item.vitals.bp} • Temp ${item.vitals.temp} • ${item.vitals.weight}</p>
          </div>
        </div>
        <button onclick="admitPatient('${item.id}')" class="p-1.5 text-clinic-800 hover:text-clinic-900 transition-colors" title="Complete / Admit Patient">
          <i data-lucide="check" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  });
  lucide.createIcons();
};

window.admitPatient = function(triageId) {
  showToast('Success', 'Patient vitals verified. Admitted to general practitioner queue.');
  triageList = triageList.map(t => t.id === triageId ? { ...t, status: 'Completed' } : t);
  renderWaitlist();
};

window.renderStaffTable = function() {
  const tbody = document.getElementById('staff-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  if (doctorsList.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-12 text-sm font-semibold text-slate-400">
          No personnel registered.
        </td>
      </tr>
    `;
    return;
  }
  
  doctorsList.forEach(doc => {
    let statusText = 'Available';
    let statusClass = 'text-emerald-600';
    let statusDot = 'bg-emerald-500';
    if (doc.status.toLowerCase() === 'on break') {
      statusText = 'In Consultation';
      statusClass = 'text-orange-600';
      statusDot = 'bg-orange-500';
    } else if (doc.status.toLowerCase() === 'off-duty') {
      statusText = 'Off-Duty';
      statusClass = 'text-slate-400';
      statusDot = 'bg-slate-400';
    }
    
    tbody.innerHTML += `
      <tr class="hover:bg-slate-50/50 transition-colors duration-150">
        <td class="py-4 px-6">
          <div class="flex items-center gap-3">
            <div class="relative flex-shrink-0">
              <img src="${doc.avatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&h=100'}" class="w-10 h-10 rounded-full object-cover">
              <span class="absolute -right-0.5 -bottom-0.5 w-3 h-3 rounded-full border-2 border-white ${statusDot}"></span>
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-800">${doc.name}</h4>
              <p class="text-[10px] ${statusClass} font-semibold">${statusText}</p>
            </div>
          </div>
        </td>
        <td class="py-4 px-6">
          <span class="inline-flex items-center px-3 py-1 text-[10px] font-bold rounded-full bg-clinic-50 text-clinic-800">${doc.specialty}</span>
        </td>
        <td class="py-4 px-6 text-xs font-bold text-slate-600">${doc.appointmentsCount || 0} Consultations</td>
        <td class="py-4 px-6">
          <div class="flex items-center gap-1 text-xs font-bold text-slate-700">
            <i data-lucide="star" class="w-3.5 h-3.5 text-amber-400 fill-current"></i> 4.9
          </div>
        </td>
        <td class="py-4 px-6 text-xs font-medium text-slate-500">08:00 AM - 02:00 PM</td>
        <td class="py-4 px-6 text-center">
          <button onclick="alert('Options for ${doc.name}')" class="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors">
            <i data-lucide="more-vertical" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `;
  });
  lucide.createIcons();
};
