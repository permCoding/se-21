// INSERT INTO ...

const ut = require('./ut05');
const _ = require('lodash');

let hobbies = ut.csv_to_json('./csv/hobby.csv');

function insert_1(array, item) {
	let next = +array[array.length-1].id + 1;
	array.push(new ut.Hobby(next, item));
}

function insert_2(array, item) {
    let max_id = _.maxBy(array, item => item.id).id;
	let next = +max_id + 1;
	array.push(new ut.Hobby(next, item));
}

let hobby = 'sitcom';

// insert_1(hobbies, hobby);

insert_2(hobbies, hobby);

console.table(hobbies);
