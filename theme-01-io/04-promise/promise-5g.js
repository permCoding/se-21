fs = require('fs');

let getTxt = fileNameIn => {
    return new Promise((resolve, reject) => {
        fs.readFile( // асинхронное чтение
            fileNameIn, 
            'utf8', 
            (error, txt) => resolve(txt)
        );
    });
};

let arrWrite = (fileNameOut, arr) => {
    return new Promise((resolve, reject) => {
        fs.writeFile( // асинхронная запись
            fileNameOut,
            arr.join(', '),
            'utf8', 
            (err) => { 
                if (err) reject(err);
                // для проверки установите запрет на запись файла
                resolve();
            }
        );
    });
}

async function exec(fileIn, fileOut) {
    let txt = await getTxt(fileIn);
    let arr = txt
        .split(/\r\n|\n/)[0]
        .trim()
        .split(/\s+/)
        .map(x => +x)
        .sort((a,b)=>a-b);
    console.log(`Данные - ${arr.join(', ')}`);
    try {
        await arrWrite(fileOut, arr);
        console.log(`Записали массив [${arr}] в файл ${fileOut}`);
        let amount = arr.length;
        console.log(`Всего чисел - ${amount}`)
    } catch (error) {
        console.error(`Проблемы с записью.\n`, error);
    } finally {
        console.log('Работа завершена');
    }
    
}

fileNameIn = "in.txt";
fileNameOut = "out.txt";

exec(fileNameIn, fileNameOut);
