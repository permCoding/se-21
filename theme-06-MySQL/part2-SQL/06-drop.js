// теперь удалим таблицу через node.js и запрос DROP
// попробуйте удалить более одного раза

const get_conn = require('./modules/utils').get_conn;

let query_drop = "DROP TABLE abiturs";

const conn = get_conn();

conn.promise()
    .query(query_drop)
    .then(() => console.log('table dropped'))
    .catch((err) => console.error(err))
    .then(() => {
        console.log('закрываем соединение');
        conn.end();
    });
