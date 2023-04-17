const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Das heutige Datum ist: ${new Date().toLocaleDateString()}`);
});

server.listen(3000, () => {
  console.log('Server läuft auf Port 3000...');
});
