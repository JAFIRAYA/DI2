const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const users = [];

app.get('/registerForm', (req, res) => {
  res.sendFile(__dirname + '/register.html');
});

app.get('/loginForm', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/register', (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    res.send('error1');
  } else {
    const newUser = {
      id: users.length + 1,
      name,
      lastName,
      email,
      username,
      password,
    };

    users.push(newUser);
    res.send('register');
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    res.send('login');
  } else {
    res.send('error2');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
