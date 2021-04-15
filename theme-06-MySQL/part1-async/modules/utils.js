const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "pgsha.ru",
    port: "35006",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
}); // параметры для соединения с БД

let start = () => {
    connection.connect(err => {
        if (err) { console.error(err.message); }
        else { console.log("\t___start___"); }
    });
};

let stop = () => connection.end();

module.exports.conn = connection;
module.exports.start = start;
module.exports.stop = stop;
