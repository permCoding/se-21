const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let myReadStream = fs.createReadStream('./block.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1", () => {
    console.log("смотрим работу через браузер - http://localhost:3000");
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+C": "Ctrl+D"; // Windows or Linux
    console.log(`остановить сервер - ${hotKeys}`);
});
