// замыкания 

let inc = function () {
    let x = 0;
    return () => ++x; // из своей области видимости
}

x = 222; // не влияет

let counter1 = inc();
let counter2 = inc();

let res1, res2;

counter1();
res1 = counter1();

counter2();
counter2();
counter2();
res2 = counter2();

console.log(`res1 = ${res1}\nres2 = ${res2}`);
