const express = require('express');
const fs = require('fs');

const app = express();

let urlencodedParser = express.urlencoded({ extended: false })

app.get('/', function (req, res) {
    let filePath = __dirname + "/" + "index.htm";
    res.sendFile(filePath);
});

app.post('/post', urlencodedParser, function (req, res) {
    let user = {
        last_name: req.body.last_name,
        rating: req.body.rating
    };
    fs.writeFileSync('user.json', JSON.stringify(user));
    res.end('data post in file');
});

const server = app.listen(3000, function () {
    var port = server.address().port;
    console.log("смотрим работу через браузер - http://localhost:%s/", port);
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+C": "Ctrl+D"; // Windows or Linux
    console.log(`остановить сервер - ${hotKeys}`);
});
