// генерируем один запрос со множеством VALUES

const ut = require('./modules/utils');

function get_query(pattern, array) {
    return pattern + array
        .map(item => "('"+Object.values(item).join("','")+"')")
        .join(',');
}

let array = ut.csv_to_json('./csv/abiturs.csv');

let query_pattern = "INSERT INTO abiturs \
(id, lastName, rating, gender, birthDate, city) VALUES ";
let query_insert = get_query(query_pattern, array);

const conn = ut.get_conn();

conn.promise()
    .query(query_insert)
    .then(() => console.log('rows inserted'))
    .catch((err) => console.error(err))
    .then(conn.end());
