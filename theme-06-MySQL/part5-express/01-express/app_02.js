const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
    res.send('testing the framework Express ...');
});
 
app.get('/select', function (req, res) {
    res.send('testing the select ...');
});

app.get('/update', function (req, res) {
    res.send('testing the update ...');
});

const server = app.listen(3000, function () {
    let port = server.address().port;
    console.log("смотрим работу через браузер - http://localhost:%s", port);
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+C": "Ctrl+D"; // Windows or Linux
    console.log(`остановить сервер - ${hotKeys}`);
});
