// два способа подключения библиотеки

const pool = require('./modules/utils').get_pool();

pool.promise()
    .query("SELECT * FROM abiturs")
    .then(([rows]) => { return rows })
    .then((rows) => console.table(rows))
    .catch((err) => console.error(err))
    .then(() => { 
        pool.end(); 
        console.log('все соединения закрыты'); 
    });
