// рекурсивные функции и внутреннее имя

// function func(x) {
//     return x? x + func(x-1): 0;
// }

// console.log(func(100)); // имя функции видно

// ==============================

// function func(x) {
//     return x? x + func(x-1): 0;
// }

// let a = func; // присваивается только ссылка
// func = null;

// console.log(a(100));

// ==============================

let b = function func(x) { // функция как объект
    return x? x + func(x-1): 0;
}

let a = b; // присваивается только ссылка
b = null;

console.log(a(100));

console.log(typeof a)
console.log(a.name);
console.log(a.toString());

