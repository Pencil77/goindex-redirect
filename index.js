const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(302, { Location: 'https://robin.byflow.workers.dev' + (req.url === '/' ? '' : req.url) });
  res.end();
});
server.listen(process.env.PORT || 3000);
