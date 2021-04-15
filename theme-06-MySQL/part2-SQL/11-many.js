/* если нужно вставить массив объектов
1) можно запустить цикл и вставлять асинхронно по-одному
2) можно сгенерировать один запрос со множеством VALUES
3) можно подключить дополнительную библиотеку для асинхронного выполнения запросов
и возможности потом зафиксировать COMMIT или откатить назад */

const ctj = require('./modules/utils').csv_to_json;

let query_pattern = "INSERT INTO abiturs \
(id, lastName, rating, gender, date, city) VALUES ";
/*
    (1, 'Сидоров', 207, true, '2002-08-03', 'Пермь'), 
    (2, 'Иванов', 192, true, '2001-04-22', 'Барда'),
    (3, 'Петров', 197, true, '2003-01-01', 'Лысьва')
*/

let array = ctj('./csv/abiturs.csv');

function ex_1() {
    console.log(array);
}

function ex_2() {
    for (let item of array) {
        // console.log(Object.keys(item));
        console.log(Object.values(item));
    }
}

function ex_3() {
    let rows = array
        .map(item => Object.values(item))
        .map(values => '(' + values.join(',') + ')');
    console.log(rows);
}

function ex_4() {
    let rows = array
        .map(item => Object.values(item).map(value => "'" + String(value) + "'"))
        .map(values => '(' + values.join(',') + ')');
    query = query_pattern + rows.join(',');
    console.log(query);
}

function ex_5() {
    query = query_pattern + array
        .map(item => "('"+Object.values(item).join("','")+"')")
        .join(',');
    console.log(query);
}

ex_5();
