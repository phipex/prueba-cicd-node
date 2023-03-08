// Hello World sample app.
const http = require('http');
import { platform } from 'node:process';
import { versions } from 'node:process';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello World. This processor architecture is ${process.arch} platform ${platform} versions ${versions}`);
});

server.listen(port, () => {
  console.log(`Server running on processor architecture ${process.arch} puerto ${port}`);
});