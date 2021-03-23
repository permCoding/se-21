const fs = require('fs'); // создаём объект

let fileName = "data-in.txt"; // имя файла

// асинхронное чтение
fs.readFile(
    fileName, 
    'utf8', 
    (error, line) => console.log(line)
); // call-back функция будет вызвана после окончания чтения
