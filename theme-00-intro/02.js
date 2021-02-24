// не чистая функция меняет внешние данные

function summa() {
    a += 1;
    return a + b;
}

let a = 10, b = 20;

console.log(`a = ${a}, b = ${b}`);

console.log(`summa = ${summa(a, b)}`);

console.log(`a = ${a}, b = ${b}`);


