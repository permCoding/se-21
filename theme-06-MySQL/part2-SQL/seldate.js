const get_conn = require('./modules/utils').get_conn;

const conn = get_conn();

let query1 = "SELECT lastName, DATE_FORMAT(birthDate, '%d.%m.%Y') \
FROM abiturs ORDER BY birthDate";

conn.promise()
    .query(query1)
    .then(([rows]) => console.table(rows))
    .catch((err) => { console.error(err) })
    .then(conn.end());
