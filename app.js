// 1. Get HTML elements using their unique ID
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageBox = document.getElementById('message');

// 2. Add a submit event listener to the form
loginForm.addEventListener('submit', function (event) {
  // Prevent the page from refreshing when form is submitted
  event.preventDefault();

  // Get the values entered by the user
  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  // Clear any previous message styles
  messageBox.style.display = 'none';
  messageBox.className = 'message';

  // 3. Simple validation logic
  // Check if username is 'admin' and password is 'password123'
  if (username === 'admin' && password === 'password123') {
    // Show success message
    messageBox.innerText = 'Login successful! Welcome to your dashboard.';
    messageBox.classList.add('success');
    messageBox.style.display = 'block';
  } else {
    // Show error message
    messageBox.innerText = 'Invalid username or password. Please try again.';
    messageBox.classList.add('error');
    messageBox.style.display = 'block';
  }
});
