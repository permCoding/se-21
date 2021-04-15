// особенности асинхронности
// пропробуем прочитать из БД и записать в csv-файл

const mysql = require("mysql2"); // npm i mysql2
const fastcsv = require('fast-csv'); // npm i fast-csv
const fs = require('fs');

let write_to_csv = (array, nameFile) => {
    let fw = fs.createWriteStream(nameFile);
    fastcsv
        .write(array, {headers: true})
        .pipe(fw);
};

const connection = mysql.createConnection({
    host: "pgsha.ru",
    port: "35006",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
});

connection
    .connect(err => console.log("\tconnection"));

let arr = [{id: 41, 'nameCur': 'Оглоблин'}];

connection
    .query("SELECT * FROM curators", (err, results) => {
        arr = results;
        write_to_csv(arr, './csv/results.csv'); // так норм
    });

connection.end();

// write_to_csv(arr, './csv/results.csv'); // так будет oops

console.log('\tdisconnection'); // это сработает первым
