
// чистая функция
let result = Math.pow(2, 3);
console.log(result);

// нечистая функция 1
// берёт данные извне
function get1(a){
    return a + b;
}    

let b = 1;
console.log(get1(10));

// нечистая функция 2
// меняет внешние данные 
function get2(user){
    user.age += 1;
    return user.age;
}    

let student = {
    name: 'Иван',
    age: 19
};
console.log(student);
console.log(get2(student));
console.log(student);

// нечистая функция 3
// возвращает разные данные
console.log(Math.random());
