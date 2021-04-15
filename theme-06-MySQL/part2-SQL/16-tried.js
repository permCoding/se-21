// как реализовать определённую последовательность запросов

const ctj = require('./modules/utils').csv_to_json;
const get_conn = require('./modules/utils').get_conn;

let array = ctj('./csv/abiturs.csv');
let inserted_rows = array.map(item => Object.values(item));

let query_truncate = "TRUNCATE abiturs";
let query_insert = "INSERT INTO abiturs (id, lastName, rating, gender, birthDate, city) VALUES ? ";

const conn = get_conn();

conn.promise()
    .query(query_truncate)
    .then(() => { 
        conn.promise()
            .query(query_insert, [inserted_rows])
            .then(conn.end())
            .then(() => console.log('rows rewrited'))
            .catch((err) => console.error('ins -> ', err));
    })    
    .catch((err) => console.error('tunc ->', err));
