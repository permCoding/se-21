// особенности асинхронности

const mysql = require("mysql2"); // npm i mysql2
  
const connection = mysql.createConnection({
    host: "pgsha.ru",
    port: "35006",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
});

connection.connect(err => console.log("\tconnection"));

connection.query("SELECT * FROM curators", (err, results) => console.log(results));

connection.end();

console.log('\tdisconnection'); // это сработает первым
