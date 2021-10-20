// const http = require('http');
// const server = http
//   .createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('Hello World!');
//     res.end();
//   })
//   .listen(3000);

const http = require('http');
const hello = require('./modules/hello');

const server = http.createServer((req, res) => {
  const url = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (url === '/blog') {
    res.write('ini blog');
  } else {
    res.write(hello.say);
  }
  res.end();
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
