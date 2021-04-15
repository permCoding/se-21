// теперь удалим таблицу через node.js и запрос
// попробуйте удалить более одного раза

const ut = require('./modules/utils');

const conn = ut.get_conn();

let params = { rating: 180, city: 'Куеда' };

let query = "UPDATE abiturs SET ? WHERE lastName = 'Васечкин'";

conn.promise()
    .query(query, params)
    .then(([result]) => console.log('изменено записей', result.affectedRows))
    .catch((err) => { console.error(err) })
    .then(conn.end());
