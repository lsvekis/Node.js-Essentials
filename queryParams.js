// file: queryParams.js
const http = require('http');
const url = require('url');
http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // 'true' to parse query string
  const query = parsedUrl.query; // e.g., { name: 'Alice', age: '25' }
  if (parsedUrl.pathname === '/user' && req.method === 'GET') {
    const name = query.name || 'Guest';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello, ${name}!`);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(6000, () => {
  console.log('Server with query parameters at http://localhost:6000');
});
