// генерируем один запрос со множеством VALUES

const ut = require('./modules/utils');

let query = "INSERT INTO abiturs \
(id, lastName, rating, gender, birthDate, city) VALUES ? ";

let rows = [
    ['1','Мишкин','217','1','2002-08-23','Кунгур'],
    ['2','Бортич','224','0','2002-06-03','Лысьва'],
    ['3','Деревянко','182','0','2002-02-20','Оса']
];

const conn = ut.get_conn();

conn.promise()
    .query(query, [rows])
    .then(() => console.log('rows inserted'))
    .catch((err) => console.error(err))
    .then(conn.end());
