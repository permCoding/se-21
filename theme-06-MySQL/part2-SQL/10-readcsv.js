const ut = require('./modules/utils');


let array = ut.csv_to_json('./csv/abiturs.csv');

console.table(array);