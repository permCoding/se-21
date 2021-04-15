// можно сделать пул (множество) запросов
// но, если без промисов, то они будут асинхронны
// и их результаты непредсказуемы и end может сработать раньше

const get_pool = require('./modules/utils').get_pool;

let query_update = "UPDATE `abiturs` SET `rating`=? WHERE `lastName`=?";
let update_params = [224, "Бортич"];
let query_select = "SELECT lastName, DATE_FORMAT(birthDate, '%d.%m.%Y') as date \
FROM abiturs ORDER BY birthDate ASC";

const pool = get_pool();

pool
    .query(query_update, update_params, function (err, result) {
        if (err) console.error(err);
        console.log('updated rows =', result.affectedRows);
    });

pool
    .query(query_select, function (err, rows) {
        if (err) console.error(err);
        console.table(rows)
    });

// pool.end(); // выключим, чтобы запросы успели запускаться
