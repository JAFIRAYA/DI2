const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let shoppingList = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/addItem', (req, res) => {
  const item = req.body.item;
  const amount = req.body.amount;
  
  shoppingList.push({ item, amount });
  
  res.redirect('/listItems');
});

app.get('/listItems', (req, res) => {
  let items = '';
  for (let i = 0; i < shoppingList.length; i++) {
    items += `<li>${shoppingList[i].item} - ${shoppingList[i].amount}</li>`;
  }
  
  res.send(`
    <h1>Shopping List</h1>
    <ul>${items}</ul>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
