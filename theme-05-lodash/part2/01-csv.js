// функции в модуль
// чтение csv

const ut = require('./ut01');

let array = ut.csv_to_json('./csv/curators.csv');

console.log(array);
