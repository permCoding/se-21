// можно избежать ошибок вставки, используя модификатор ignore 
// тут есть записи с и без повторения id 

const conn = require('./modules/utils').get_conn();

let query_insert = "INSERT INTO abiturs \
(id, lastName, rating, gender) \
VALUES (52, 'Камикадзе', 216, false) \
ON DUPLICATE KEY UPDATE gender = VALUES(gender)";

conn.promise()
    .query(query_insert)
    .then(([result]) => console.log(result.insertId))
    .catch((err) => console.error(err))
    .then(conn.end());
