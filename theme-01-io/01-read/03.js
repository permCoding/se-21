fs = require('fs'); // создаём объект

line = [...Array(10).keys()].join();

fileName = "data.txt"; // имя файла

fs.writeFileSync(fileName, line); // выводим в файл