// split map, filter, reduce, forEach

let line = '2 3 5 10 8';

let arr = line
    .split(' ');
console.log(arr);


line = '2 3 5    10 8';
let numbers = line
    // .split(' ') // [2, 3, 5, 0, 0, 0, 10, 8]
    .split(/\s+/) // re
    .map(x => +x);
console.log(numbers);


line = '2 3 5 10 8';
numbers = line
    .split(' ')
    .map(x => +x)
    .filter(x => x%2 == 0);
console.log(numbers);


line = '2 3 5 10 8';
result = line
    .split(' ')
    .map(x => +x)
    .filter(x => x%2 == 0)
    .reduce((acc, next) => acc + next, 0);
console.log(result);

console.log(line
    .split(' ')
    .map(x => +x)
    .filter(x => x%2 == 0)
    .reduce((acc, next) => acc + next) // без инициализации
);

// = = = = = = = = = =

line = '2 3 5 10 8';
line
    .split(' ')
    .forEach(x => console.log(x));
arr = [];
line
    .split(' ')
    .forEach(x => arr.push(Number(x)));
console.log(arr);
