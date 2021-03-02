fs = require('fs'); // создаём объект

fileNameIn = "input.txt"; // имя входного файла
fileNameOut = "output.txt"; // имя выходного файла

text = fs.readFileSync(fileNameIn, 'utf8'); // содержимое файла в переменную

fs.writeFileSync(fileNameOut, text); // выводим в другой файл
console.log(text); // и на экран
