const fs = require('fs'); // создаём объект

let fileNameIn = "input.txt"; // имя входного файла
let fileNameOut = "output.txt"; // имя выходного файла

let text = fs
    .readFileSync(fileNameIn, 'utf8'); // содержимое файла в переменную

fs
    .writeFileSync(fileNameOut, text); // выводим в другой файл

console.log(text); // и на экран
