// инициализация массива, Array, spread, keys(), from

let arr; // декларация переменной
arr = []; // инициализация пустого массива
let numbers = [2, 3, 5, 10, 8]; // массив с элементами
console.log(numbers); // печать массива
console.log(...numbers); // печать элементов массива - spread

// генерация массива
let amount = 5;

arr = new Array(amount);
for (let i = 0; i < arr.length; i++) {
    arr[i] = i+1;
}
console.log('arr =', arr);

console.log(
    new Array(amount)
);

console.log(
    Array(amount)
    .fill(0)
);

console.log(
    Array(amount)
    .fill(0)
    .map((_, index) => ++index)
);

//   --x    x++

console.log(
    [...Array(amount).keys()] // оператор spread ...
);

console.log(
    [...Array(amount).keys()].map(i => i+1)
);

// статический метод
arr = Array.from('JavaScript');
console.log(arr);

arr = Array.from([0,1,2,3,4], x => x**3);
console.log(arr);

// = = = = = = = = = = 

let arr1 = [1, 2, 3];
let arr2 = [0, arr1, 4, 5]; // spread
let arr3 = [0, ...arr1, 4, 5]; // spread
console.log(arr2);
console.log(arr3);
