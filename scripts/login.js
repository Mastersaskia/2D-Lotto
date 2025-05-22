document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  if (username === 'batangas' && password === 'lotto123') {
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid username or password.');
  }
});
