const http = require('http');
const os = require('os');

http.createServer((req, res) => {
  res.write(`This server on container: ${os.hostname()}.`);
  res.end();
}).listen(process.env.PORT || 80);
