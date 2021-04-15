const mysql = require("mysql2"); // npm i mysql2


const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
}).promise();

let query1 = "SELECT lastName, DATE_FORMAT(date, '%d.%m.%Y') \
FROM abiturs \
ORDER BY date";

conn
    .query(query1)
    .then(([rows]) => console.table(rows))
    .catch((err) => { console.error(err) })
    .then(conn.end());
