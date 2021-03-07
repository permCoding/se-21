// push pop concat join shift unshift length toString()

let arr1 = [0, 2, 4, 6, 8];
let arr2 = [1, 3, 5, 7, 9];

let last = arr2.pop();
arr1.push(last);

let arr = arr1.concat(arr2);

console.log(arr1);
console.log(arr2);
console.log(arr.join(', '));
console.table(arr.reverse());
console.log(arr);

// = = = = = = = = = =

console.log(arr2);
let first = arr2.shift(); // вырезает слева
console.log(first);
let len = arr2.unshift(55); // добавляет слева
console.log(len);
console.log(arr2.length);   
console.log(arr2);
console.log(arr2.toString());
