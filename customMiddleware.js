// file: customMiddleware.js
const http = require('http');
// A simple middleware to log request method and URL
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  // Call the next function
  next();
}
// Another middleware to check if the user is authorized
function checkAuth(req, res, next) {
  // Imagine we have an "authorization" header
  if (req.headers.authorization === 'secret-token') {
    next(); // user is authorized
  } else {
    res.writeHead(401, { 'Content-Type': 'text/plain' });
    res.end('Unauthorized');
  }
}
function finalHandler(req, res) {
  // If we reached here, user is authorized
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Access granted!');
}
// Function to execute middlewares in order
function applyMiddleware(req, res, middlewares) {
  let index = 0;
  function next() {
    const middleware = middlewares[index++];
    if (middleware) {
      middleware(req, res, next);
    }
  }
  next();
}
http.createServer((req, res) => {
  // Our "middleware chain"
  applyMiddleware(req, res, [logger, checkAuth, finalHandler]);
}).listen(3000, () => {
  console.log('Server with custom middleware on http://localhost:3000');
});
