// Demo login/signup system (insecure, client-side only)

// Predefined demo users
const STATIC_USERS = {
  "Joshua": "Juswa_19",
  "Kenneth": "Ken8",
  "Retsel": "Kane-2t",
  "Angee": "Angee_12"
};

// Helper: load dynamic users from localStorage
function getDynamicUsers() {
  return JSON.parse(localStorage.getItem('dynamicUsers') || '{}');
}

// Helper: save dynamic users to localStorage
function saveDynamicUser(username, password) {
  const users = getDynamicUsers();
  users[username] = password;
  localStorage.setItem('dynamicUsers', JSON.stringify(users));
}

function handleLogin(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('username').value.trim();
  const passwordInput = document.getElementById('password').value;

  const dynamicUsers = getDynamicUsers();
  const allUsers = {...STATIC_USERS, ...dynamicUsers};

  if (usernameInput in allUsers && allUsers[usernameInput] === passwordInput) {
    showMessage("Login successful! Redirecting...", "success");
    setTimeout(() => { window.location.href = DASHBOARD_URL; }, 1000);
  } else {
    showMessage("Invalid username or password. Please try again.", "error");
  }
}

function handleSignup(event) {
  event.preventDefault();

  const signupForm = document.getElementById('signup-form');
  const fullName = signupForm.querySelector('input[placeholder="Full Name"]').value.trim();
  const username = signupForm.querySelector('input[placeholder="Username"]').value.trim();
  const email = signupForm.querySelector('input[placeholder="Email"]').value.trim();
  const password = signupForm.querySelector('input[placeholder="Password"]').value;
  const confirmPassword = signupForm.querySelector('input[placeholder="Confirm Password"]').value;

  if (password !== confirmPassword) {
    showSignupMessage("Passwords do not match.", "error");
    return;
  }

  const dynamicUsers = getDynamicUsers();
  const allUsers = {...STATIC_USERS, ...dynamicUsers};

  if (username in allUsers) {
    showSignupMessage("Username already exists.", "error");
    return;
  }

  // Save new user to localStorage
  saveDynamicUser(username, password);
  showSignupMessage(`User "${username}" created! You can now log in.`, "success");

  // Optionally switch to login form automatically
  setTimeout(() => {
    toggleForms('login');
    clearSignupMessage();
  }, 1500);
}

function toggleForms(mode) {
  document.getElementById('login-form').classList.toggle('hidden', mode === 'signup');
  document.getElementById('signup-form').classList.toggle('hidden', mode === 'login');
  document.getElementById('form-title').textContent = mode === 'signup' ? 'Sign Up' : 'Login';
  clearMessage();
  clearSignupMessage();
}

// Inline messages for login
function showMessage(msg, type) {
  let msgEl = document.getElementById('login-message');
  if (!msgEl) {
    msgEl = document.createElement('div');
    msgEl.id = 'login-message';
    msgEl.style.marginTop = '15px';
    msgEl.style.fontSize = '0.95em';
    msgEl.style.textAlign = 'center';
    document.getElementById('login-form').appendChild(msgEl);
  }
  msgEl.textContent = msg;
  msgEl.style.color = type === 'error' ? 'red' : 'green';
}

function clearMessage() {
  const msgEl = document.getElementById('login-message');
  if (msgEl) msgEl.textContent = '';
}

// Inline messages for signup
function showSignupMessage(msg, type) {
  let msgEl = document.getElementById('signup-message');
  if (!msgEl) {
    msgEl = document.createElement('div');
    msgEl.id = 'signup-message';
    msgEl.style.marginTop = '15px';
    msgEl.style.fontSize = '0.95em';
    msgEl.style.textAlign = 'center';
    document.getElementById('signup-form').appendChild(msgEl);
  }
  msgEl.textContent = msg;
  msgEl.style.color = type === 'error' ? 'red' : 'green';
}

function clearSignupMessage() {
  const msgEl = document.getElementById('signup-message');
  if (msgEl) msgEl.textContent = '';
}
