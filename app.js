// index.js
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, Express!!!!5');
});

// Example POST route
app.post('/data', (req, res) => {
  const received = req.body;
  res.json({ message: 'Data received', data: received });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
