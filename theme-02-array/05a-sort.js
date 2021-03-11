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
