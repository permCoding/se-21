// теперь удалим таблицу через node.js и запрос
// попробуйте удалить более одного раза

const ut = require('./modules/utils');

const conn = ut.get_conn();

let user = {
    lastName: "Васечкин",
    rating: 200,
    gender: true
};

let query = "INSERT INTO abiturs SET ?";

conn.promise()
    .query(query, user)
    .then(([result]) => {
        console.log('добавлено записей:', result.affectedRows);
        console.log('id добавленной записи:', result.insertId);
    })
    .catch((err) => { console.error(err) })
    .then(conn.end());
