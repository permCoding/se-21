const http = require("http"); // он есть по умолчанию

http.createServer((request, response) => {
    response.end("Hello World...");
}).listen(3000, "127.0.0.1", () => {
    console.log("смотрим работу через браузер - http://localhost:3000/");
    console.log("остановить сервер Ctrl+C");
    console.log("cервер слушает запросы на порту 3000");
});