// функции в модуль
// чтение csv

const ut = require('./ut00');

let array = ut.csv_to_json('./csv/curators.csv');

console.log(array);
