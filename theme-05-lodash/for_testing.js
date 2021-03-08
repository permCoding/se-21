const _ = require('lodash');

// сгенерировать массив, заполнить
let count = 10;
let dig = 8;
let arr = Array(count);
console.log(arr);

// let iterator = arr.keys(); // итератор
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (let key of arr.keys()) { // перебрать все
// 	console.log(key);
// }

// // из итератора можно сделать массив
// for (let key of [...arr.keys()]) {
// 	console.log(key);
// }

// способы сделать массив
// arr[0] = 5; arr[arr.length-1] = 5;
// let true_keys = Object.keys(arr); // существующие и заполненные
// let all_keys = [...arr.keys()]; // все, даже пустые
// console.log(true_keys); // ['0', '9']
// console.log(all_keys);  // [0, 1, 2, 4, 5, 6, 7, 8, 9]


// так не работает:
Object.keys(arr).forEach(key => console.log(key));
Object.keys(arr).forEach(key => console.log(arr[key]));
// и так не работает
Object.keys(arr.keys()).forEach(key => console.log(key));
Object.keys(arr.keys()).forEach(key => console.log(arr[key]));
// а через spread работает - заполним массив
console.log([...arr.keys()].map(item => dig))



let arrayObj = [
	{ id: 1, 'name': 'BBB' },
	{ id: 2, 'name': 'AAA' }];

_
	.sortBy(arrayObj, obj => obj.name)
	.map(obj => console.log(obj.name));
console.log(arrayObj);
