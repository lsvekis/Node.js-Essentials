const express = require('express');
const app = express();
// GET route
app.get('/users', (req, res) => {
  // Fetch a list of users
  res.send('GET: List of users');
});
// POST route
app.post('/users', (req, res) => {
  // Create a new user (body processing is handled by middleware)
  res.send('POST: User created');
});
// PUT route
app.put('/users/:id', (req, res) => {
  // Update a user with a specific ID
  res.send(`PUT: Update user with ID = ${req.params.id}`);
});
// DELETE route
app.delete('/users/:id', (req, res) => {
  // Delete a user with a specific ID
  res.send(`DELETE: Remove user with ID = ${req.params.id}`);
});
app.get('/products/:productId', (req, res) => {
    const productId = req.params.productId;
    const sortBy = req.query.sort || 'asc';
    res.send(`Product ID: ${productId} | Sort By: ${sortBy}`);
  });
  
// Listen on a port
app.listen(3000, () => {
  console.log('Routes example running on http://localhost:3000');
});
