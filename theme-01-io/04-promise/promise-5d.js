// чтение/запись через promises + then

fs = require('fs');

fileNameIn = "in.txt";
fileNameOut = "out.txt";

let promise = new Promise((resolve, reject) => {
    fs.readFile( // асинхронное чтение
        fileNameIn, 
        'utf8', 
        (error, txt) => {
            let arr = txt
                .split(/\r\n|\n/)[0]
                .trim()
                .split(/\s+/)
                .map(x => +x)
                .sort((a,b)=>a-b);
            resolve(arr);
        }   
    );
});

promise
    .then((arr) => {
        console.log(`Данные - ${arr.join(', ')}`);
        return new Promise((resolve, reject) => {
            fs.writeFile( // асинхронная запись
                fileNameOut,
                arr.join(', '),
                'utf8', 
                (err) => { 
                    if (err) throw err;
                    resolve(arr.length);
                }
            );
        });
    })
    .then((amount) => // then
        console.log(`Записали данные в файл ${fileNameOut}\nВсего чисел - ${amount}`)
    );
