let fs = require('fs');

let fileNameIn = "data.txt";
let fileNameOut = 'data-out.txt';

let funcReadFile = (err, line) => {
    console.log(`Прочитали файл ${fileNameIn} асинхронно`);
    if (err) throw err;
    funcWriteFile(fileNameOut, line.split('').reverse().join(''));
};

let funcWriteFile = (fileName, data) => fs.writeFile(
    fileName, 
    data, 
    'utf8', 
    (err) => {
        if (err) throw err;
        console.log(`Записали данные в файл ${fileNameOut}`);
    });

fs.readFile(fileNameIn, 'utf8', funcReadFile);

