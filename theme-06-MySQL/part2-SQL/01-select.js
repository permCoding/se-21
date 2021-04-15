// создадим сначала через phpMyAdmin таблицу
// и там же через запрос добавим данные
// тут проверим доступ к данным

const mysql = require("mysql2"); // npm i mysql2

const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
});

let rows = [];

conn.query("SELECT lastName, rating FROM abiturs", (err, results) => {
    // if (err) console.error(err);
    rows = results;
    console.table(rows);
    // console.table(results);
    // console.log(fields);
    // conn.end();
});

console.table(rows);

conn.end();
