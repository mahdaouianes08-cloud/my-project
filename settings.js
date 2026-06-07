/* ==========================================================================
   Eraani Settings & Configurations Interactivity Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const API_BASE = window.location.protocol === 'file:' ? 'http://localhost:3000' : '';

  // ==========================================================================
  // Session Authentication & Profile Handler
  // ==========================================================================
  const activeUserName = localStorage.getItem('activeUserName') || 'Dr. Sarah Jenkins';
  const activeUserRole = localStorage.getItem('activeUserRole') || 'Clinic Administrator';
  
  const userNameEl = document.getElementById('sidebarUserName');
  const userRoleEl = document.getElementById('sidebarUserRole');
  if (userNameEl) userNameEl.textContent = activeUserName;
  if (userRoleEl) userRoleEl.textContent = activeUserRole;

  const userAvatarEl = document.getElementById('sidebarUserAvatar');
  if (userAvatarEl) {
    const lowercaseName = activeUserName.toLowerCase();
    if (lowercaseName.includes('johnson') || lowercaseName.includes('ismail') || lowercaseName.includes('ahmed') || lowercaseName.includes('marcus') || lowercaseName.includes('julian') || lowercaseName.includes('admin') || lowercaseName.includes('manager')) {
      userAvatarEl.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
    } else {
      userAvatarEl.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150';
    }
  }

  // ==========================================================================
  // Load Settings from Backend
  // ==========================================================================
  const clinicName = document.getElementById('clinicName');
  const clinicPhone = document.getElementById('clinicPhone');
  const clinicAddress = document.getElementById('clinicAddress');
  const displayLanguage = document.getElementById('displayLanguage');
  const timeZone = document.getElementById('timeZone');

  fetch(API_BASE + '/api/settings')
    .then(res => {
      if (!res.ok) throw new Error('Failed to load settings');
      return res.json();
    })
    .then(settings => {
      if (settings.clinicName && clinicName) clinicName.value = settings.clinicName;
      if (settings.clinicPhone && clinicPhone) clinicPhone.value = settings.clinicPhone;
      if (settings.clinicAddress && clinicAddress) clinicAddress.value = settings.clinicAddress;
      if (settings.displayLanguage && displayLanguage) displayLanguage.value = settings.displayLanguage;
      if (settings.timeZone && timeZone) timeZone.value = settings.timeZone;
      
      console.log('Settings successfully synced with backend db.json');
    })
    .catch(err => {
      console.error('Error fetching settings from API:', err);
    });

  // ==========================================================================
  // Double Logout (Deconnexion) Handlers
  // ==========================================================================
  const sidebarLogoutBtn = document.getElementById('sidebarLogoutBtn');
  const securityLogoutBtn = document.getElementById('securityLogoutBtn');

  function handleDeconnexion() {
    // Clear active session credentials
    localStorage.removeItem('authenticated');
    localStorage.removeItem('activeUserName');
    localStorage.removeItem('activeUserRole');
    localStorage.removeItem('activeUserEmail');
    localStorage.removeItem('activeClinicName');

    showToast('Success', 'Deconnexion réussie. Redirection vers la page de connexion...');

    // Redirect to login portal
    setTimeout(() => {
      window.location.replace('login.html');
    }, 1200);
  }

  if (sidebarLogoutBtn) {
    sidebarLogoutBtn.addEventListener('click', handleDeconnexion);
  }
  if (securityLogoutBtn) {
    securityLogoutBtn.addEventListener('click', handleDeconnexion);
  }

  // ==========================================================================
  // Toggle Switch Handler (Client Side State Swapping)
  // ==========================================================================
  const toggleButtons = document.querySelectorAll('button[aria-label^="Toggle"]');
  
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isChecked = btn.getAttribute('checked') === 'true';
      const indicator = btn.querySelector('span');

      if (isChecked) {
        btn.setAttribute('checked', 'false');
        btn.classList.remove('bg-eraani-800');
        btn.classList.add('bg-slate-200');
        if (indicator) {
          indicator.classList.remove('left-6', 'left-4.5');
          indicator.classList.add('left-1', 'left-0.5');
        }
        showToast('Info', 'Preference disabled.');
      } else {
        btn.setAttribute('checked', 'true');
        btn.classList.remove('bg-slate-200');
        btn.classList.add('bg-eraani-800');
        if (indicator) {
          indicator.classList.remove('left-1', 'left-0.5');
          if (btn.classList.contains('w-11')) {
            indicator.classList.add('left-6');
          } else {
            indicator.classList.add('left-4.5');
          }
        }
        showToast('Info', 'Preference enabled.');
      }
    });
  });

  // ==========================================================================
  // Clinic Profile Save Handler
  // ==========================================================================
  const saveClinicProfileBtn = document.getElementById('saveClinicProfileBtn');

  if (saveClinicProfileBtn) {
    saveClinicProfileBtn.addEventListener('click', () => {
      if (!clinicName.value.trim() || !clinicPhone.value.trim() || !clinicAddress.value.trim()) {
        showToast('Error', 'Please fill out all required clinic fields.');
        return;
      }
      
      const payload = {
        clinicName: clinicName.value.trim(),
        clinicPhone: clinicPhone.value.trim(),
        clinicAddress: clinicAddress.value.trim(),
        displayLanguage: displayLanguage ? displayLanguage.value : 'en-US',
        timeZone: timeZone ? timeZone.value : 'PT'
      };

      fetch(API_BASE + '/api/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(res => {
        if (!res.ok) throw new Error('Save failed');
        return res.json();
      })
      .then(data => {
        showToast('Success', 'Clinic configurations saved successfully.');
        localStorage.setItem('activeClinicName', data.settings.clinicName);
      })
      .catch(err => {
        console.error('Error saving settings:', err);
        showToast('Error', 'Failed to save configurations to server.');
      });
    });
  }

  // ==========================================================================
  // Danger Zone Workspace Deletion
  // ==========================================================================
  const deleteWorkspaceBtn = document.getElementById('deleteWorkspaceBtn');
  if (deleteWorkspaceBtn) {
    deleteWorkspaceBtn.addEventListener('click', () => {
      const confirmDelete = confirm('Are you sure you want to permanently delete this clinic workspace? Once deleted, all clinical data and patient records will be permanently removed.');
      if (confirmDelete) {
        localStorage.clear();
        showToast('Error', 'Clinic workspace purged. Session closed.');
        setTimeout(() => {
          window.location.replace('login.html');
        }, 1500);
      }
    });
  }

  // ==========================================================================
  // Toast Alerts Engine
  // ==========================================================================
  const toastContainer = document.getElementById('toastContainer');

  function showToast(type, message) {
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
  }

});
