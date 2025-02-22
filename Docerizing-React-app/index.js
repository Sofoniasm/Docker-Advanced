const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Register a new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  // Implement user registration logic here
  res.json({ message: 'User registered successfully' });
});

// Get a registered user
app.get('/user/:username', (req, res) => {
  const { username } = req.params;
  // Implement logic to retrieve user data here
  res.json({ username, email: `${username}@example.com` });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});