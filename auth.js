/* ==========================================================================
   Eraani Authentication & Session Logic Controller
   ========================================================================== */

const init = () => {
  const API_BASE = window.location.protocol === 'file:' ? 'http://localhost:3000' : '';
  console.log('Eraani Auth Portal Initializing...');

  // ==========================================================================
  // DOM Elements Selector Cache
  // ==========================================================================
  // Panels/Views
  const loginView = document.getElementById('loginView');
  const signupView = document.getElementById('signupView');
  const forgotView = document.getElementById('forgotView');

  // Switch Buttons
  const logoLink = document.getElementById('logoLink');
  const toRegisterBtn = document.getElementById('toRegisterBtn');
  const toLoginBtn = document.getElementById('toLoginBtn');
  const toForgotBtn = document.getElementById('toForgotBtn');
  const backToLoginBtn = document.getElementById('backToLoginBtn');

  // Forms
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const forgotForm = document.getElementById('forgotForm');

  // Login Inputs & Errors
  const loginEmail = document.getElementById('loginEmail');
  const loginPassword = document.getElementById('loginPassword');
  const rememberMe = document.getElementById('rememberMe');
  const loginEmailError = document.getElementById('loginEmailError');
  const loginPasswordError = document.getElementById('loginPasswordError');

  // Register Inputs & Errors
  const signupName = document.getElementById('signupName');
  const signupClinic = document.getElementById('signupClinic');
  const signupEmail = document.getElementById('signupEmail');
  const signupPhone = document.getElementById('signupPhone');
  const signupPassword = document.getElementById('signupPassword');
  const signupConfirmPassword = document.getElementById('signupConfirmPassword');
  const signupRole = document.getElementById('signupRole');
  const signupTerms = document.getElementById('signupTerms');

  const signupNameError = document.getElementById('signupNameError');
  const signupClinicError = document.getElementById('signupClinicError');
  const signupEmailError = document.getElementById('signupEmailError');
  const signupPhoneError = document.getElementById('signupPhoneError');
  const signupPasswordError = document.getElementById('signupPasswordError');
  const signupConfirmPasswordError = document.getElementById('signupConfirmPasswordError');
  const signupTermsError = document.getElementById('signupTermsError');

  // Forgot Password Inputs & Errors
  const forgotEmail = document.getElementById('forgotEmail');
  const forgotEmailError = document.getElementById('forgotEmailError');

  const toastContainer = document.getElementById('toastContainer');

  // Diagnostic check of queried elements
  const elementsMap = {
    loginView, signupView, forgotView, toRegisterBtn, toLoginBtn, toForgotBtn, backToLoginBtn,
    loginForm, signupForm, forgotForm, loginEmail, loginPassword, rememberMe,
    loginEmailError, loginPasswordError, signupName, signupClinic, signupEmail,
    signupPhone, signupPassword, signupConfirmPassword, signupRole, signupTerms,
    signupNameError, signupClinicError, signupEmailError, signupPhoneError,
    signupPasswordError, signupConfirmPasswordError, signupTermsError,
    forgotEmail, forgotEmailError, toastContainer
  };
  let anyNull = false;
  for (const [key, val] of Object.entries(elementsMap)) {
    if (!val) {
      console.error(`[Eraani Diagnostic] Missing DOM element: "${key}" is null.`);
      anyNull = true;
    }
  }
  if (!anyNull) {
    console.log('[Eraani Diagnostic] All 34 required DOM elements bound successfully.');
  }

  // Regular Expressions
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Allows Algerian phone numbers: e.g. 0550 12 34 56 or +213 550 12 34 56
  const phoneRegex = /^(0|\+213|00213)[2567]([0-9][ -.]?){8}$/;

  // ==========================================================================
  // View State Management (Conditional Transitions)
  // ==========================================================================
  function showView(viewToShow) {
    // Hide all views first
    loginView.classList.add('hidden');
    signupView.classList.add('hidden');
    forgotView.classList.add('hidden');

    // Remove hidden class from targeted view
    viewToShow.classList.remove('hidden');
    
    // Reset all inputs & validation styles when transitioning
    clearAllErrors();
  }

  const logoTargets = document.querySelectorAll('.logo-route-target');
  console.log(`Logo routing elements found: ${logoTargets.length}`);
  logoTargets.forEach((el, index) => {
    el.addEventListener('click', () => {
      console.log(`Logo click target #${index + 1} clicked, routing to Signup view.`);
      showView(signupView);
    });
  });
  toRegisterBtn.addEventListener('click', () => {
    console.log('toRegisterBtn clicked, routing to Signup view.');
    showView(signupView);
  });
  toLoginBtn.addEventListener('click', () => {
    console.log('toLoginBtn clicked, routing to Login view.');
    showView(loginView);
  });
  toForgotBtn.addEventListener('click', () => {
    console.log('toForgotBtn clicked, routing to Forgot view.');
    showView(forgotView);
  });
  backToLoginBtn.addEventListener('click', () => {
    console.log('backToLoginBtn clicked, routing to Login view.');
    showView(loginView);
  });

  // ==========================================================================
  // Password Visibility Toggle Engine
  // ==========================================================================
  document.querySelectorAll('.password-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      const eyeIcon = btn.querySelector('.eye-icon');
      
      if (input.type === 'password') {
        input.type = 'text';
        // Toggle icon visual states (slashed eye vs normal eye)
        eyeIcon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;
      } else {
        input.type = 'password';
        eyeIcon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
      }
    });
  });

  // ==========================================================================
  // Client-Side Validation & Verification
  // ==========================================================================
  function clearAllErrors() {
    // Reset all forms
    loginForm.reset();
    signupForm.reset();
    forgotForm.reset();

    // Remove custom invalid styling classes
    document.querySelectorAll('input, select').forEach(el => {
      el.classList.remove('border-rose-500', 'bg-rose-50', 'focus:border-rose-500', 'focus:ring-rose-100');
    });

    // Hide error subtexts
    document.querySelectorAll('[id$="Error"]').forEach(el => {
      el.classList.add('hidden');
      el.textContent = '';
    });
  }

  function setInvalidState(inputElement, errorElement, errorMessage) {
    inputElement.classList.add('border-rose-500', 'bg-rose-50', 'focus:border-rose-500', 'focus:ring-rose-100');
    errorElement.textContent = errorMessage;
    errorElement.classList.remove('hidden');
  }

  function setValidState(inputElement, errorElement) {
    inputElement.classList.remove('border-rose-500', 'bg-rose-50', 'focus:border-rose-500', 'focus:ring-rose-100');
    errorElement.textContent = '';
    errorElement.classList.add('hidden');
  }

  // Email validation helper
  function validateEmail(input, errorBlock) {
    const value = input.value.trim();
    if (!value) {
      setInvalidState(input, errorBlock, 'Email address is required.');
      return false;
    }
    if (!emailRegex.test(value)) {
      setInvalidState(input, errorBlock, 'Please enter a valid clinic email.');
      return false;
    }
    setValidState(input, errorBlock);
    return true;
  }

  // ==========================================================================
  // Form Submit Handlers
  // ==========================================================================

  // 1. LOGIN FORM VALIDATION & SUBMISSION
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Email check
    if (!validateEmail(loginEmail, loginEmailError)) {
      isValid = false;
    }

    // Password check
    const pwdValue = loginPassword.value;
    if (!pwdValue) {
      setInvalidState(loginPassword, loginPasswordError, 'Password is required.');
      isValid = false;
    } else {
      setValidState(loginPassword, loginPasswordError);
    }

    if (!isValid) return;

    // Call Supabase auth login
    window.supabaseClient.auth.signInWithPassword({
      email: loginEmail.value.trim(),
      password: pwdValue
    })
    .then(({ data, error }) => {
      if (error) {
        if (error.message && error.message.toLowerCase().includes('password')) {
          setInvalidState(loginPassword, loginPasswordError, error.message);
        } else {
          setInvalidState(loginEmail, loginEmailError, error.message || 'Login failed.');
        }
        return;
      }
      
      const user = data.user;
      const metadata = user.user_metadata || {};
      
      // Save active session tokens locally
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('activeUserName', metadata.name || 'Dr. Sarah Jenkins');
      localStorage.setItem('activeUserRole', metadata.role || 'Clinic Administrator');
      localStorage.setItem('activeUserEmail', user.email);
      localStorage.setItem('activeClinicName', metadata.clinic || 'Eraani Clinic Systems');

      showToast('Success', 'Access Granted. Redirecting to Eraani Dashboard...');
      
      // Redirect to dashboard
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1200);
    })
    .catch(err => {
      console.error('Login error:', err);
      showToast('Error', 'Unable to connect to Supabase authentication server.');
    });
  });

  // 2. SIGNUP FORM VALIDATION & SUBMISSION
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Full Name
    const nameVal = signupName.value.trim();
    if (!nameVal) {
      setInvalidState(signupName, signupNameError, 'Full name is required.');
      isValid = false;
    } else if (nameVal.length < 3) {
      setInvalidState(signupName, signupNameError, 'Name must be at least 3 characters.');
      isValid = false;
    } else {
      setValidState(signupName, signupNameError);
    }

    // Clinic Name
    const clinicVal = signupClinic.value.trim();
    if (!clinicVal) {
      setInvalidState(signupClinic, signupClinicError, 'Clinic name is required.');
      isValid = false;
    } else if (clinicVal.length < 3) {
      setInvalidState(signupClinic, signupClinicError, 'Clinic name must be at least 3 characters.');
      isValid = false;
    } else {
      setValidState(signupClinic, signupClinicError);
    }

    // Email
    if (!validateEmail(signupEmail, signupEmailError)) {
      isValid = false;
    }

    // Phone
    const phoneVal = signupPhone.value.trim();
    if (!phoneVal) {
      setInvalidState(signupPhone, signupPhoneError, 'Phone number is required.');
      isValid = false;
    } else if (!phoneRegex.test(phoneVal)) {
      setInvalidState(signupPhone, signupPhoneError, 'Enter a valid format: e.g. 0550 12 34 56 or +213 550 12 34 56');
      isValid = false;
    } else {
      setValidState(signupPhone, signupPhoneError);
    }

    // Password
    const pwdVal = signupPassword.value;
    if (!pwdVal) {
      setInvalidState(signupPassword, signupPasswordError, 'Password is required.');
      isValid = false;
    } else if (pwdVal.length < 6) {
      setInvalidState(signupPassword, signupPasswordError, 'Password must be at least 6 characters.');
      isValid = false;
    } else {
      setValidState(signupPassword, signupPasswordError);
    }

    // Confirm Password
    const confirmPwdVal = signupConfirmPassword.value;
    if (!confirmPwdVal) {
      setInvalidState(signupConfirmPassword, signupConfirmPasswordError, 'Confirm password is required.');
      isValid = false;
    } else if (confirmPwdVal !== pwdVal) {
      setInvalidState(signupConfirmPassword, signupConfirmPasswordError, 'Passwords do not match.');
      isValid = false;
    } else {
      setValidState(signupConfirmPassword, signupConfirmPasswordError);
    }

    // Terms Agreement checkbox check
    if (!signupTerms.checked) {
      signupTermsError.textContent = 'You must agree to the Terms of Service and Privacy Policy.';
      signupTermsError.classList.remove('hidden');
      isValid = false;
    } else {
      signupTermsError.textContent = '';
      signupTermsError.classList.add('hidden');
    }

    if (!isValid) return;

    // Call Supabase auth signup
    window.supabaseClient.auth.signUp({
      email: signupEmail.value.trim(),
      password: pwdVal,
      options: {
        data: {
          name: nameVal,
          clinic: clinicVal,
          phone: phoneVal,
          role: signupRole.value
        }
      }
    })
    .then(({ data, error }) => {
      if (error) {
        setInvalidState(signupEmail, signupEmailError, error.message || 'Registration failed.');
        return;
      }

      const user = data.user;
      const metadata = user.user_metadata || {};

      // Auto log in this session locally
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('activeUserName', metadata.name || nameVal);
      localStorage.setItem('activeUserRole', metadata.role || signupRole.value);
      localStorage.setItem('activeUserEmail', user.email);
      localStorage.setItem('activeClinicName', metadata.clinic || clinicVal);

      showToast('Success', 'Clinic account created successfully. Syncing Workspace...');

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1200);
    })
    .catch(err => {
      console.error('Registration error:', err);
      showToast('Error', 'Unable to connect to Supabase registration server.');
    });
  });

  // 3. FORGOT PASSWORD FORM VALIDATION & SUBMISSION
  forgotForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateEmail(forgotEmail, forgotEmailError)) return;

    // Show simulated success notice
    showToast('Info', `A password reset link has been dispatched to ${forgotEmail.value.trim()}`);
    forgotForm.reset();
  });

  // ==========================================================================
  // Customized Toast Alerts System
  // ==========================================================================
  function showToast(type, message) {
    const toast = document.createElement('div');
    toast.className = 'p-4 rounded-xl text-white font-medium shadow-lg transition duration-300 transform translate-x-full min-w-[320px] max-w-[420px] flex items-center gap-3';
    
    if (type === 'Success') {
      toast.classList.add('bg-slate-900', 'border-l-4', 'border-emerald-500');
      toast.innerHTML = `
        <svg class="w-5 h-5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span class="text-sm">${message}</span>
      `;
    } else {
      toast.classList.add('bg-slate-900', 'border-l-4', 'border-blue-500');
      toast.innerHTML = `
        <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        <span class="text-sm">${message}</span>
      `;
    }

    toastContainer.appendChild(toast);
    
    // Slid in entry
    setTimeout(() => {
      toast.classList.remove('translate-x-full');
    }, 50);

    // Fade out and remove
    setTimeout(() => {
      toast.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4500);
  }

};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
