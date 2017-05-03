const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 4815;

const server = http.createServer((req, res) => {
  console.log(req.method + req.url);
  if (req.url == '/data') {
    fs.readFile('data.csv', function(err, data){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(data);
    });
  } else if (req.url == '/') {
    fs.readFile('index.html', function(err, index){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(index);
    });
  } else {
    fs.readFile(req.url.replace('/',''), function(err, file){
      res.statusCode = 200;
      // res.setHeader('Content-Type', 'text/plain');
      res.end(file);
    });
  }
}).listen(port,hostname);

console.log("Serving bet data!");
