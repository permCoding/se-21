const fs = require('fs'); // создаём объект

let fileName = "data.txt"; // имя файла

let line = fs.readFileSync(fileName, 'utf-8'); // читаем файл

console.log(line);

console.log(line.split(',').reverse().join(' '));