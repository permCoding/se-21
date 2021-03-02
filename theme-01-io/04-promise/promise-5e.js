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
    .then(arr => {
        console.log(`Данные - ${arr.join(', ')}`);
        return new Promise((resolve, reject) => {
            fs.writeFile( // асинхронная запись
                fileNameOut,
                arr.join(', '),
                'utf8', 
                (err) => { 
                    if (err) reject(err);
                    // для проверки установите запрет на запись файла
                    resolve(arr);
                }
            );
        });
    })
    .then(arr => {
        console.log(`Записали массив [${arr}] в файл ${fileNameOut}`);
        return arr.length; // данные можно передавать так
    })
    .then(amount =>
        console.log(`Всего чисел - ${amount}`)
    )
    .catch(err => 
        console.error(`Проблемы с записью.\n`, err)
    )
    .finally(() => console.log('Работа завершена'));
