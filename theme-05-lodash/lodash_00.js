const _ = require('lodash'); // npm install lodash
// documentation: https://lodash.com/docs/4.17.15



console.log('генерация массивов');
let arr, count = 3;

arr = _.times(count, _.stubString);
console.log(arr); // => ['', '', '']

arr = _.times(count, _.stubFalse);
console.log(arr); // => [false, false, false]

arr = _.times(count, _.stubObject);
console.log(arr); // => [{}, {}, {}]

arr = _.times(count, _.stubArray);
console.log(arr); // => [[], [], []]]




console.log('итерации функций');
let a = Math.max;
let b = Math.min;
let func = _.over([a, b]);
arr = func(1, 2, 8, 4);
console.log(arr);  // => [8, 1]

a = !Boolean;
b = x => x%2 == 0;
func = _.overSome([a, b]);
console.log(func(3));

a = Boolean;
b = x => x%2 == 0;
func = _.overEvery([a, b]);
console.log(func(3));




console.log('генерация диапазонов');
_.range(4);
// => [0, 1, 2, 3]
_.range(-4);
// => [0, -1, -2, -3]
_.range(1, 5);
// => [1, 2, 3, 4]
_.range(0, 20, 5);
// => [0, 5, 10, 15]
_.range(0, -4, -1);
// => [0, -1, -2, -3]
_.range(1, 4, 0);
// => [1, 1, 1]
_.range(0);
// => []


_.rangeRight(4);
// => [3, 2, 1, 0]
_.rangeRight(-4);
// => [-3, -2, -1, 0]
_.rangeRight(1, 5);
// => [4, 3, 2, 1]
_.rangeRight(0, 20, 5);
// => [15, 10, 5, 0]
_.rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]
_.rangeRight(1, 4, 0);
// => [1, 1, 1]
_.rangeRight(0);
// => []



console.log('нарезка массивов');
arr = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(arr); // => [['a', 'b'], ['c', 'd']]

arr = _.chunk(['a', 'b', 'c', 'd'], 3);
console.log(arr); // => [['a', 'b', 'c'], ['d']]

arr = _.compact([0, 1, false, 2, '', 3]);
console.log(arr); // => [1, 2, 3]



console.log('сортировка по двум параметрам');
let users = [
  { 'name': 'fred',   'age': 48 },
  { 'name': 'barney', 'age': 34 },
  { 'name': 'fred',   'age': 40 },
  { 'name': 'barney', 'age': 36 }
];
// версия 1 - обычный подход
// www = users.map(x=>x.age>17);
users
	.sort((a,b) => a.name>b.name)
	.map(x => console.log(x));
console.log(users); // проверка сохранения чистоты функций
console.log();

_
	.sortBy(users, obj => obj.name)
	.map(obj => console.log(obj));
_
	.sortBy(_.sortBy(users, obj => obj.name), obj => obj.age)
	.map(obj => console.log(obj));
_
	.sortBy(_.reverse(_.sortBy(users, obj => obj.age)), obj => obj.name)
	.map(obj => console.log(obj));

console.log(users); // проверка сохранения чистоты функций

// версия 2 - параметры сортировки
// шаг 1: сортируем по полю `user` по возрастанию 
// шаг 2: сортируем по полю `age` по убыванию
_
	.orderBy(users, ['name', 'age'], ['asc', 'desc']) // lodash!!!
	.map(obj => console.log(obj));

console.log(users); // проверка сохранения чистоты функций
