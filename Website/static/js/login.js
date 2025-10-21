function toggleForms(mode) {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const title = document.getElementById('form-title');

  const fadeDuration = 200;

  if (mode === 'signup') {
    loginForm.style.opacity = 0;
    setTimeout(() => {
      loginForm.classList.add('hidden');
      signupForm.classList.remove('hidden');
      signupForm.style.opacity = 0;
      title.textContent = 'Create Your Account';
      setTimeout(() => signupForm.style.opacity = 1, 50);
    }, fadeDuration);
  } else {
    signupForm.style.opacity = 0;
    setTimeout(() => {
      signupForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
      loginForm.style.opacity = 0;
      title.textContent = 'Welcome Back 👋';
      setTimeout(() => loginForm.style.opacity = 1, 50);
    }, fadeDuration);
  }
}
