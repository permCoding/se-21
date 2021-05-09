// можно избежать ошибок вставки, используя модификатор ignore 
// тут есть записи с и без повторения id 

const conn = require('./modules/utils').get_conn();

let query_insert = "INSERT ignore INTO abiturs \
(id, lastName, rating, gender, city) \
VALUES \
(52, 'Камикадзе', 216, true, 'Пермь'), \
(1, 'Углова', 196, false, 'Пермь')";

conn.promise()
    .query(query_insert)
    .then(([result]) => { return result.affectedRows })
    .then((count) => console.log(`${count} rows inserted`))
    .catch((err) => console.error(err))
    .then(conn.end());
