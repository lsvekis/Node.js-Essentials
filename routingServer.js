const http = require('http');
function handleRequest(req, res) {
  const { url, method } = req;
  if (url === '/' && method === 'GET') {
    // Home route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page');
  } else if (url === '/about' && method === 'GET') {
    // About route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the About Page');
  } else if (url === '/api' && method === 'POST') {
    // API route (POST)
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Data received via POST' }));
  } else {
    // Fallback (404)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}
const server = http.createServer(handleRequest);
server.listen(5000, () => {
  console.log('Routing server running on http://localhost:5000');
});
