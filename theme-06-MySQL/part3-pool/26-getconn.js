// генерируем один запрос со множеством VALUES

const ctj = require('./modules/utils').csv_to_json;
const get_pool = require('./modules/utils').get_pool_p; // как промисы

function get_rows(array) {
    return array.map(item => Object.values(item));
}

let array = ctj('./csv/abiturs.csv');
let query_truncate = "TRUNCATE abiturs";
let query_insert = "INSERT INTO abiturs \
(id, lastName, rating, gender, birthDate, city) VALUES ? ";
let inserted_rows = get_rows(array);
const pool = get_pool();

pool.getConnection((error, connection) => {
    if (error) reject(error);
    resolve(connection);
})
.then((conn) => {
    conn
        .query(query_truncate)
        .then(() => {
            console.log('table truncated');
            // conn.release()
        })
        .then(() => {
            conn
                .query(query_insert, [inserted_rows])
                .then(console.log('rows inserted'))
                .then(() => {conn.release(); pool.end(); })
            })
    });
