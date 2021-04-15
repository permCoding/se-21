// два способа подключения библиотеки

const get_pool = require('./modules/utils').get_pool;

const pool = get_pool();

pool.promise()
    .query("SELECT * FROM abiturs")
    .then(([rows]) => { return rows })
    .then((rows) => { console.table(rows); pool.end(); })
    .catch((err) => console.error(err))
    .then(() => console.log('все соединения закрыты'));

