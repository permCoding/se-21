const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: "pgsha.ru",
    port: "35006",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
});

let query = "SELECT * FROM view_students";

conn.promise()
    .query(query)
    .then(([rows]) => console.table(rows))
    .catch((err) => { console.error(err) })
    .then(conn.end());
