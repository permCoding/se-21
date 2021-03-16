// SELECT age, name FROM student WHERE sex = false ORDER BY age DESC, name ASC

const ut = require('./ut01');
const _ = require('lodash');

let students = ut.csv_to_json('./csv/students.csv');

function select_1(array) {
    _.reverse(
        _.sortBy(
            _.filter(
                array, obj => obj.sex == true
            ), obj => obj.age
        )
    ).forEach(obj => console.log(obj.age, obj.nameSt));
}

function select_2(array) {
    _
        .orderBy(array, ['age','nameSt'], ['desc','asc'])
        .filter(obj => obj.sex == true)
        .map(obj => _.join([obj.age,obj.nameSt], '\t'))
        .forEach(line => console.log(line));
}

function select_3(array) {
    let filtred = _.filter(array, obj => obj.sex == true);
    let sorted = _.orderBy(filtred, ['age','nameSt'], ['desc','asc']);
    let arr = _.map(sorted, obj => _.join([obj.age,obj.nameSt], '\t'));
    let result = _.join(arr, '\n');
    console.log(result);
}

function select_4(array) {
    let filtred = _.filter(array, obj => obj.sex == true);
    let sorted = _.orderBy(filtred, ['age','nameSt'], ['desc','asc']);
    console.table(sorted);
}

// select_1(students);

// select_2(students);

// select_3(students);

select_4(students);
