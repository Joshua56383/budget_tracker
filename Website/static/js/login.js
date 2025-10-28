// WARNING: This is extremely insecure and for demo purposes only!
const STATIC_USER = "Joshua";
const STATIC_PASS = "Juswa_19";

function handleLogin(event) {
  event.preventDefault(); // Stop the form from submitting normally

  // We read the input values using the new IDs
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  if (usernameInput === STATIC_USER && passwordInput === STATIC_PASS) {
    // We replace 'alert()' with a console log or a small notification 
    // since alert() is generally disruptive and not allowed in some environments.
    console.log("Login successful! Redirecting to dashboard.");
    
    // FIX 2: Use the global variable defined in the HTML template
    window.location.href = DASHBOARD_URL; 
  } else {
    alert("Invalid username or password. Try 'Joshua' / 'Juswa_19'.");
  }
}

// Keep your existing form toggle function as well:
function toggleForms(mode){
  document.getElementById('login-form').classList.toggle('hidden', mode==='signup');
  document.getElementById('signup-form').classList.toggle('hidden', mode==='login');
  document.getElementById('form-title').textContent = mode==='signup'?'Sign Up':'Login';
}
