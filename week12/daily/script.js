document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${username}&password=${password}`,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === 'login') {
          document.getElementById('result').innerHTML = 'Successfully logged in.';
        } else if (data === 'error2') {
          document.getElementById('result').innerHTML = 'Error: User not found.';
        }
      });
  });
  
  document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${name}&lastName=${lastName}&email=${email}&username=${username}&password=${password}`,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === 'register') {
          document.getElementById('result').innerHTML = 'Successfully registered.';
        } else if (data === 'error1') {
          document.getElementById('result').innerHTML = 'Error: Username or password already exists.';
        }
      });
  });
  