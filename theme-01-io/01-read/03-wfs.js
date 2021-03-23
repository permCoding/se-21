const fs = require('fs'); // создаём объект

let line = [...Array(10).keys()].join();

let fileName = "data.txt"; // имя файла

fs.writeFileSync(fileName, line); // выводим в файл
