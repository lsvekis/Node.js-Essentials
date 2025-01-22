const http = require('http');
const fs = require('fs');
const path = require('path');
const publicDir = path.join(__dirname, 'public'); // folder containing static files
function serveStaticFile(filePath, contentType, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}
http.createServer((req, res) => {
  // Default to index.html
  let fileName = req.url === '/' ? 'index.html' : req.url;
  const ext = path.extname(fileName).toLowerCase();
  // Infer Content-Type from file extension
  let contentType = 'text/html';
  if (ext === '.css') contentType = 'text/css';
  else if (ext === '.js') contentType = 'application/javascript';
  else if (ext === '.jpg') contentType = 'image/jpeg';
  else if (ext === '.png') contentType = 'image/png';
  const filePath = path.join(publicDir, fileName);
  serveStaticFile(filePath, contentType, res);
}).listen(3000, () => {
  console.log('Static file server running on http://localhost:3000');
});
