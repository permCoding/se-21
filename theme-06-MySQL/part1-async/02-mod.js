// особенности асинхронности

const u = require('./modules/utils');

u.start();

let arr = []; // тут будем хранить данные

u.conn.query("SELECT * FROM curators",
    (err, results) => {
        if (err) console.log(err.message);
        console.table(results);
        arr = results;
});

u.stop();

console.log(`\tlen(arr) = ${arr.length}; arr = ${arr}`); // тут oops
console.log('\tdisconnection');
