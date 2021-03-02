fs = require('fs'); // создаём объект

fileName = "data.txt"; // имя файла

line = fs.readFileSync(fileName, 'utf-8'); // читаем файл

console.log(line);

console.log(line.split(',').reverse().join(' '));