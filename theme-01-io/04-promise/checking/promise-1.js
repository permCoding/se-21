function getFib(n) {
    return n < 3? 1: getFib(n-1) + getFib(n-2);
}

let n = 42;
let arr = [];

console.log('_111_');

let promise = new Promise((resolve, reject) => {
    let r = getFib(n);
    console.log(`число Фибоначчи ${n} = ${r}`);
    resolve();
});

console.log('_222_');

promise
    .then(() => console.log('_333_'));

console.log('_444_');
