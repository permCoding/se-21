function getFib(n) {
    return n < 3? 1: getFib(n-1) + getFib(n-2);
}

let n = 36;

console.time('time');

console.log(`число Фибоначчи ${n} = ${getFib(n)}`);

console.timeEnd('time');

