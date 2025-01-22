const express = require('express');
const app = express();
// Set EJS as template engine
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  const user = { name: 'Alice', age: 25 };
  // Render the "index.ejs" template with user data
  res.render('index', { user });
});
app.listen(3000, () => {
  console.log('EJS example running on http://localhost:3000');
});
