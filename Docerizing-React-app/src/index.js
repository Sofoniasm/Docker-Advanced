const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const users = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Get registered users
app.get('/users', (req, res) => {
    return res.json(users);
});

// Register a new user
app.post('/users', (req, res) => {
  const newUserId = req.body.userId;
  if (!newUserId) {
    return res.status(400).send({ error: 'userId is required' });
  }

  if (users.includes(newUserId)) { // Fixed the missing closing parenthesis here
    return res.status(400).send({ error: 'userId already exists' });
  }

  users.push(newUserId);
  return res.status(201).send({ userId: newUserId });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
