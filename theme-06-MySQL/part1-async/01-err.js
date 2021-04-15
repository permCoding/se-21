// про обработку исключений

const mysql = require("mysql2"); // npm i mysql2
  
const connection = mysql.createConnection({
    host: "pgsha.ru",
    port: "35006",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
}); // попробуйте внести ошибку в пароль

connection.connect(err => {
    if (err) {
        console.error("Error: " + err.message);
    }
    else {
        console.log("\tПодключение установлено");
    }
});

connection.query("SELECT * FROM curators",
    (err, results) => {
        if (err) console.log(err.message);
        else console.log(results);
});

connection.end();

console.log('\tdisconnection'); // это сработает первым
