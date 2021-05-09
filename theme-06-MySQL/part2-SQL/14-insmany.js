// генерируем один запрос со множеством VALUES с полем id NULL

const ut = require('./modules/utils');

let array = ut.csv_to_json('./csv/abiturs.csv');
let rows = array.map(item => Object.values(item).slice(1));
// console.log(rows);

let query = "INSERT INTO abiturs \
(lastName, rating, gender, birthDate, city) VALUES ? "; // id, 

const conn = ut.get_conn();

conn.promise()
    .query(query, [rows])
    .then(() => console.log('rows inserted'))
    .catch((err) => console.error(err))
    .then(conn.end());
