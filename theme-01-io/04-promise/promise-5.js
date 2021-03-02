fs = require('fs');

fileNameIn = "in.txt";
fileNameOut = "out.txt";

let arr = []; // тут будет массив чисел из файла

let txt = fs.readFileSync( // синхронное чтение
    fileNameIn, 
    'utf8'
);

arr = txt
    .split(/\r\n|\n/)[0]
    .trim()
    .split(/\s+/)
    .map(x => +x)
    .sort((a,b)=>a-b);

console.log(`Данные из файла - ${arr.join(', ')}`);

fs.writeFileSync( // синхронная запись
    fileNameOut,
    arr.join(', '),
    'utf8'
);

let amount = arr.length;
console.log(
    `Записали данные в файл ${fileNameOut}\nВсего чисел - ${amount}`
);
