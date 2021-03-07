let ex_01 = function (arr) {
    return arr.sort(); // сортирует как строки
}

let nums = [8, 6, 10, 22, 9, 4];
let words = ['ab', 'aa', 'zz', 'aaa', 'b'];

console.log(ex_01(nums)); // [10, 22, 4, 6, 8, 9] 
console.log(ex_01(words));
console.log(ex_01(words).reverse());

console.log('= = = = = = = = = =');

let ex_02 = function (arr) {
    return arr.sort((a,b) => a-b);
    /*
    a-b <0  a,b
    a-b =0  остаются как есть
    a-b >0  b,a
    */
}

console.log(ex_01(nums)); // [10, 22, 4, 6, 8, 9] 
console.log(ex_02(nums)); // [4, 6, 8, 9, 10, 22] 

console.log('= = = = = = = = = =');

// id, rating, name
let students = [
    [0, 2.4, 'Aaa'],
    [1, 3.3, 'Zzz'],
    [2, 1.9, 'Mmm'],
    [3, 2.0, 'Bbb']
];

let ex_03 = function (arr) {
    return arr.sort((a,b) => b[1]-a[1]);
}

let ex_04 = function (arr) {
    return arr.sort(
        (a,b) => a[2] < b[2]? -1: 1
    );
}

let ex_05 = function (arr) {
    return arr.sort(
        (a,b) => a[2] < b[2]? -1: a[2] == b[2]? 0: 1
    );
}

// ex_03(students)
//     .map(item => item[1] = 0)
//     .forEach(item => console.log(item));
ex_03(students).forEach(item => console.log(item));
console.log('= = = = = = = = = =');

ex_04(students).forEach(item => console.log(item));
console.log('= = = = = = = = = =');

ex_05(students).forEach(item => console.log(item));
console.log('= = = = = = = = = =');

// id, rating, name
let objects = [
    {'id': 0, 'rating': 2.4, 'name': 'Aaa'},
    {'id': 1, 'rating': 3.3, 'name': 'Zzz'},
    {'id': 2, 'rating': 1.9, 'name': 'Mmm'},
    {'id': 3, 'rating': 2.0, 'name': 'Bbb'}
];

console.log(`name = ${objects[0].name}`);

console.log(
    objects.sort((a,b) => a.rating - b.rating)
);
console.log('= = = = = = = = = =');

objects
    .sort((a,b) => a.rating - b.rating)
    .forEach(obj => console.log(obj));
