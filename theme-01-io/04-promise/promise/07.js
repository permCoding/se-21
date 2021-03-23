const fs = require('fs');

let getTxt = function (fileNameIn) {
    return new Promise((resolve, reject) => {
        fs.readFile( // асинхронное чтение
            fileNameIn, 
            'utf8', 
            (error, txt) => resolve(txt)
        );
    });
};

let saveArr = function (fileNameOut, arr) {
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
};

let getArr = function (txt) {
    return txt
    .split(/\r\n|\n/)[0]
    .trim()
    .split(/\s+/)
    .map(x => +x)
    .sort((a,b)=>a-b);
};

async function exec(fileIn, fileOut) {
    console.log(`Чтение данных из файла - ${fileIn}`);
    let txt = await getTxt(fileIn); // только для промисов
    let arr = getArr(txt); // этот метод сам синхронный
    console.log(`Данные - ${arr.join(', ')}`);

    try {
        await saveArr(fileOut, arr); // только для промисов
        console.log(`- записали массив [${arr}]\n- в файл ${fileOut}\n- всего чисел - ${arr.length}`);
    } catch (error) {
        console.error(`Проблемы с записью.\n`, error);
    } finally {
        console.log('___ Работа завершена ___');
    };
}

exec("in.txt", "out.txt"); // fileNameIn -> fileNameOut
