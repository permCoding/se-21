// теперь удалим таблицу через node.js и запрос
// попробуйте удалить более одного раза

const ut = require('./modules/utils');

const conn = ut.get_conn();

let query = "SELECT lastName, rating, city \
FROM abiturs WHERE gender = ? LIMIT ?";

let params = ['false', 5]

conn.promise()
    .query(query, params)
    .then(([rows]) => console.table(rows))
    .catch((err) => { console.error(err) })
    .then(conn.end());
