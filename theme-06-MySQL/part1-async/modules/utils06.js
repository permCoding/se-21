const mysql = require("mysql2");
const _ = require("lodash");

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

let printSorted = (rows) => {
    console.log('\t___start___');        
    _(rows)
        .map(item => item.nameCur)
        .sortBy()
        .forEach((name,i) => console.log(i+1, '|', name));
    console.log('\t___stop___');
};

module.exports.conn = connection;
module.exports.start = start;
module.exports.stop = stop;
module.exports.printSorted = printSorted;
