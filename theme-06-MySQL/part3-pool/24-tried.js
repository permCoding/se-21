// используем промисы для построения цепочки запросов

const get_pool = require('./modules/utils').get_pool_p; // как промисы
const wtc = require('./modules/utils').write_to_csv;

let query_update = "UPDATE `abiturs` SET `rating`=? WHERE `lastName`=?";
let update_params = [222, "Бортич"];
let query_select = "SELECT lastName, DATE_FORMAT(birthDate, '%d.%m.%Y') as date \
FROM abiturs ORDER BY birthDate ASC";

const pool = get_pool();

pool
    .execute(query_update, update_params)
    .then(result => {
        console.log('updated rows =', result[0].affectedRows);
        return pool.query(query_select);
    })
    .then(([rows]) => { pool.end(); return rows; })
    .then(rows => { console.table(rows); return rows; })
    .then(rows => wtc(rows, './csv/rows.csv'))
    .then(() => console.log('все соединения закрыты'))
    .catch((err) => console.error(err));
    

