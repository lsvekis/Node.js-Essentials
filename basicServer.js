const http = require('http');
// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Send a response back to the client
  res.end('Hello from my basic Node.js server!');
});
// Define the port and start listening
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
