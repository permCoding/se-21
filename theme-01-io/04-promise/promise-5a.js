fs = require('fs');

fileNameIn = "in.txt";
fileNameOut = "out.txt";

let arr = [];

fs.readFile( // асинхронное чтение
    fileNameIn, 
    'utf8', 
    (error, txt) => {
        arr = txt
            .split(/\r\n|\n/)[0]
            .trim()
            .split(/\s+/)
            .map(x => +x)
            .sort((a,b)=>a-b);
    }   
);

console.log(`Данные из файла - ${arr.join(', ')}`);

fs.writeFile( // асинхронная запись
    fileNameOut,
    arr.join(', '),
    'utf8', 
    (err) => { 
        if (err) throw err;
        let amount = arr.length;
        console.log(`Записали данные в файл ${fileNameOut}\nВсего чисел - ${amount}`);
    }
);
