// можно сделать пул (множество) запросов
// но, если без промисов, то они будут асинхронны
// и их результаты непредсказуемы и end может сработать раньше

const get_pool = require('./modules/utils').get_pool_p;

let query_update = "UPDATE `abiturs` SET `rating`=? WHERE `lastName`=?";
let update_params = [224, "Бортич"];
let query_select = "SELECT lastName, rating, DATE_FORMAT(birthDate, '%d.%m.%Y') as date \
FROM abiturs ORDER BY birthDate ASC";


async function todo(pool) {
    await pool.query(query_update, update_params);
    [rows] = await pool.query(query_select);
    console.table(rows);
    pool.end();
}

todo(get_pool());
