// параметрический запрос и обратные апострофы

const u = require('./modules/utils06');

const connection = u.conn.promise();

// let query = "SELECT * FROM `curators` WHERE `nameCur` LIKE '%ов%' AND CHARACTER_LENGTH(`nameCur`) <= 5";
let query = "SELECT * FROM `curators` \
WHERE `nameCur` LIKE ? AND CHARACTER_LENGTH(`nameCur`) <= ?";

let params = ['%ов%', 5]

connection
    .query(query, params)
    .then(([rows]) => u.printSorted(rows));

connection.end();
