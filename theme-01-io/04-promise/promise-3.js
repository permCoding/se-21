function getFib(n) {
    return n < 3? 1: n > 42? -1: getFib(n-1) + getFib(n-2);
}

let n = 42;
let arr = [];

let promise = new Promise((resolve, reject) => {
    let answer = getFib(n)
    if (answer > 0) {
        resolve(answer);
    }
    else {
        reject(new Error(`Слишком большое число - ${n}!`));
    }
});

promise
    .then(r => console.log(`число Фибоначчи ${n} = ${r}`))
    .catch(r => console.error(r.toString()));
