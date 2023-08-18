/*
Part1

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

PART2


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
  const inputValue = req.body.value;
  console.log(`Received data from client: ${inputValue}`);
  res.send(`I received your POST request. This is what you sent me: ${inputValue}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

*/