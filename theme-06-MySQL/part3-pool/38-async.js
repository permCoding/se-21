// используем асинхронные функции для построения цепочки запросов

/* последовательность действий
 * откроем пул запросов
 * удалим таблицу вместе с индексами чтобы записать csv вместе с id
 * прочитаем все строки из csv-файла
 * вставим все записи в БД
 * считаем данные из таблицы и для контроля выведем на экран
 * сохраним данные в csv-файл
 * закроем пул соединений
 */

const ctj = require('./modules/utils').csv_to_json;
const get_pool = require('./modules/utils').get_pool_p; // как промисы
const wtc = require('./modules/utils').write_to_csv;

async function table_truncate(pool, t_name) {
    try {
        let query = "TRUNCATE " + t_name;
        await pool.execute(query);
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}

async function get_rows_table(pool, t_name) {
    try {
        let query = "SELECT * FROM " + t_name;
        let [rows, fields] = await pool.execute(query);
        return rows;
    } catch (err) {
        console.error(err);
        return false;
    }
}

async function insert_rows(pool, array) {
    try { 
        let query_insert = "INSERT INTO abiturs (id, lastName, rating, gender, birthDate, city) VALUES ? ";
        let rows = array.map(item => Object.values(item));
        await pool.query(query_insert, [rows]);
        console.log('rows inserted');
    } catch (err) {
        console.error("inserted rows failed:", err);
    }
}

async function rewrite_rows(array) {
    const pool = get_pool();

    let result = await table_truncate(pool, 'abiturs');
    if (result === false) {
        console.log('Ошибка удаления таблицы');
        pool.end();
        return;
    }
    console.log('table truncated');

    await insert_rows(pool, array);

    console.table(await get_rows_table(pool, 'abiturs'));

    wtc(array, './csv/array.csv'); // запишем результаты в csv-файл
    
    pool.end();
}


rewrite_rows(ctj('./csv/abiturs.csv'));
