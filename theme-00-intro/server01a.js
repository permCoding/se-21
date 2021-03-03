const http = require("http"); // он есть по умолчанию

http.createServer((request, response) => {
    response.end("Hello World...");
}).listen(3000, "127.0.0.1", () => {
    console.log("смотрим работу через браузер - http://localhost:3000/");
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+D": "Ctrl+C";
    console.log(`остановить сервер - ${hotKeys}`);
    console.log("cервер слушает запросы на порту 3000");
});