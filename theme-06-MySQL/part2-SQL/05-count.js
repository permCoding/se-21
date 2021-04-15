// узнать количество записей в таблице
// чтобы понять передачу параметров в [rows,fields]
// смотри swap.js

const get_conn = require('./modules/utils').get_conn;

const conn = get_conn();

// conn.promise()
//     .query("SELECT COUNT(*) FROM abiturs")
//     .then(([rows,fields]) => {
//         console.log(rows, '\n', fields);
//     }) // rows => [ TextRow { 'COUNT(*)': 15 } ] 
//     .then(conn.end());

conn.promise()
    .query("SELECT COUNT(*) FROM abiturs")
    .then(([rows]) => { return rows[0]['COUNT(*)']; })
    .then((count) => { console.log('count =', count) })
    .catch((err) => { console.error(err) })
    .then(conn.end());
