const fs = require('fs'); // создаём объект

let fileName = "data-in.txt"; // имя файла

myFunc = function(error, line) {
    console.log("Асинхронное чтение файла");
    if (error) throw error; // если возникла ошибка
    console.log(line); // выводим считанные данные
};

// асинхронное чтение
fs.readFile(fileName, 'utf8', myFunc);

