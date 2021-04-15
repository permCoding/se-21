

const _ = require("lodash");
const u = require('./modules/utils');

const connection = u.conn.promise();

let query = "SELECT * FROM curators";

connection
    .query(query)
    .then(([rows]) => {
        console.table(
            _(rows)
                .orderBy(['nameCur','id'], ['asc','desc'])
                .value()
        )
    });

connection.end();
