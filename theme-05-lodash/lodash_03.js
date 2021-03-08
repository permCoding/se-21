const ut = require('./utils');
const _ = require('lodash');

let array = ut.csv_to_json('students.csv');


// DELETE ... many

// проблема - исходный массив изменяется!
// либо читать заново, либо копировать...


// три способа копирования массивов объектов
// let students = array; // --
// let students = JSON.parse(JSON.stringify(array)) // +- работает правильно, но не быстро
let students = _.cloneDeep(array); // ++
console.log(students);

//
let womens = _.remove(students, obj => obj.sex == false);
console.log(womens);
console.log(students);

console.log(array); // для контроля неизменяемости входа
