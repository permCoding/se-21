// можно в шаблон запроса со множеством VALUES
// передать массив массивов значений по полям 

const ut = require('./modules/utils');

let query = "INSERT INTO abiturs \
(lastName, rating, gender, birthDate, city) VALUES ? ";

let rows = [ // без id
    ['Мишкин','217','1','2002-08-23','Кунгур'],
    ['Бортич','224','0','2002-06-03','Лысьва'],
    ['Деревянко','182','0','2002-02-20','Оса']
];

const conn = ut.get_conn();

conn.promise()
    .query(query, [rows])
    .then(() => console.log('rows inserted'))
    .catch((err) => console.error(err))
    .then(conn.end());
