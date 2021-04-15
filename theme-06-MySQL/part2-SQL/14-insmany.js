// генерируем один запрос со множеством VALUES

const ut = require('./modules/utils');

function get_rows(array) {
    return array.map(item => Object.values(item));
}

let array = ut.csv_to_json('./csv/abiturs.csv');

// сначала нужно truncate - можно через phpMyAdmin пока

let query = "INSERT INTO abiturs \
(id, lastName, rating, gender, birthDate, city) VALUES ? ";

let rows = get_rows(array);

// console.log(rows);

const conn = ut.get_conn();

conn.promise()
    .query(query, [rows])
    .then(() => console.log('rows inserted'))
    .catch((err) => console.error(err))
    .then(conn.end());
