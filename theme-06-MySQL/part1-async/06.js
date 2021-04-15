 // lodash для обработки данных

const _ = require("lodash");
const u = require('./modules/utils');

const connection = u.conn.promise();

let query = "SELECT * FROM curators";

connection
    .query(query)
    .then(([rows]) => {
        _(rows)
			.map(item => item.nameCur)
            .sortBy()
            .forEach((name,i) => console.log(i+1, name));
    });

connection.end(); // у промиса нет метода end
