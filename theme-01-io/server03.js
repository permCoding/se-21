const fs = require('fs');
const http = require("http");

var server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    let myReadStream = fs.createReadStream('./block.html', 'utf8');
    myReadStream.pipe(response);
});

server.listen(3000, "127.0.0.1");