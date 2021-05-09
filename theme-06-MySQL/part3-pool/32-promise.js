// два способа подключения библиотеки

const pool = require('./modules/utils').get_pool_p(); // как промисы

pool
    .query("SELECT * FROM abiturs")
    .then(([rows]) => { 
        console.table(rows); 
        pool.end(); 
    })
    .catch((err) => console.error(err));
