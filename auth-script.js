// JavaScript for Swaastya Authentication

document.addEventListener('DOMContentLoaded', () => {
    const showLoginBtn = document.getElementById('show-login');
    const showSignupBtn = document.getElementById('show-signup');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginUserForm = document.getElementById('login-user-form');
    const signupUserForm = document.getElementById('signup-user-form');

    if (showLoginBtn && showSignupBtn && loginForm && signupForm) {
        showLoginBtn.addEventListener('click', () => {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        });

        showSignupBtn.addEventListener('click', () => {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        });
    }

    if (loginUserForm) {
        loginUserForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login successful! Redirecting to main page.');
            window.location.href = 'index.html'; // Simulate redirection
        });
    }

    if (signupUserForm) {
        signupUserForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Sign up successful! Redirecting to main page.');
            window.location.href = 'index.html'; // Simulate redirection
        });
    }
});
