// удалим таблицу из базы данных

const get_conn = require('./modules/utils').get_conn;

let query_truncate = "TRUNCATE abiturs";
let query_delete = "DELETE FROM abiturs";

// сравнить DELETE vs TRUNCATE
// delete не обнуляет индексацию 

const conn = get_conn();

conn.promise()
    .query(query_truncate)
    .then(() => console.log('table truncated'))
    .catch((err) => console.error(err))
    .then(conn.end());

