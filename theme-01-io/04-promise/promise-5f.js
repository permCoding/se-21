fs = require('fs');

fileNameIn = "in.txt";
fileNameOut = "out.txt";

let getTxt = fileNameIn => {
    return new Promise((resolve, reject) => {
        fs.readFile( // асинхронное чтение
            fileNameIn, 
            'utf8', 
            (error, txt) => resolve(txt)
        );
    });
};

async function work() {
    let txt = await getTxt(fileNameIn);
    console.log(txt);
}

work();
