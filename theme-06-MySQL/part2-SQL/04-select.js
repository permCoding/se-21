// сделаем функцию и спрячем в модуль

const ut = require('./modules/utils');

const conn = ut.get_conn();

conn.promise()
    .query("SELECT lastName, rating FROM abiturs")
    .then(([rows]) => console.table(rows))
    .catch((err) => console.error(err))
    .then(conn.end());
