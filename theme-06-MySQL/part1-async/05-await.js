 // линейность async await

const u = require('./modules/utils');

async function print_rows(query) {
    const conn = u.conn.promise();
    console.log('___start___');
    [rows, fields] = await conn.query(query);
    console.table(rows);
    console.log('___stop___');
    conn.end();
}

print_rows("SELECT * FROM curators");
