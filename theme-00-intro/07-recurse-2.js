function getFib(n) {
    return n < 3? 1: getFib(n-1) + getFib(n-2);
}

let n = 36;

console.time('time');

for (let i = 30; i < 43; i++) {
    console.timeLog('time', `число Фибоначчи ${i} = ${getFib(i)}`);
}

console.timeEnd('time');

