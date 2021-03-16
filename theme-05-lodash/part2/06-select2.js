// SELECT выбрать всех студентов из группы ПИнб-2

const ut = require('./ut05');
const _ = require('lodash');

let students = ut.csv_to_json('./csv/students.csv');
let groups = ut.csv_to_json('./csv/groups.csv');

function select(arr_s, arr_g, group) {
    let idGr = _.find(arr_g, obj => obj.nameGr == group).id; 
    let filtred = _.filter(arr_s, obj => obj.idGr == idGr);
    return filtred;
}


console.table(select(students, groups, 'ПИнб-2'));
