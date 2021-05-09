// массовая асинхронная вставка записей через пул запросов 

const pool = require('./modules/utils').get_pool();

let queries = [
    "INSERT INTO abiturs (lastName, rating, gender) VALUES ('Шатров', 208, true)",
    "INSERT INTO abiturs (lastName, rating, gender) VALUES ('Кошкина', 189, false)",
    "INSERT INTO abiturs (lastName, rating, gender) VALUES ('Шамова', 191, false)"
];

let count = 0;

queries.forEach((query, index) => {
    pool
        .query(query, function (err) {
            if (err) console.error(err);
            console.log('inserted rows =', ++count);
            if (index === queries.length - 1) pool.end();
        });    
});
