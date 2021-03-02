function getFib(n) {
    return n < 3? 1: getFib(n-1) + getFib(n-2);
}

let n = 38;
let arr = [];

let promise = new Promise((resolve, reject) => {
    let r = getFib(n);
    console.log(`число Фибоначчи ${n} = ${r}`);
    resolve();
});

promise
    .then(() => console.log('_stop_'));
