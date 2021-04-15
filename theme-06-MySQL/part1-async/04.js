 // линейность внутри промиса

const u = require('./modules/utils');

const connection = u.conn.promise();

let query = "SELECT * FROM curators";

connection
    .query(query)
    .then(([rows]) => {

        console.log('___start___');
        console.table(rows);
        console.log('___stop___');

    });

connection.end();
