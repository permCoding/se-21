let result = Math.pow(2, 3); // чистая функция
console.log(result);


function get1(a) { // нечистая функция 1
    return a + b; // берёт данные извне
}    
let b = 1;
console.log(get1(10));


function get2(user) { // нечистая функция 2
    user.age += 1; // меняет внешние данные 
    return user.age;
}    


let student = {
    name: 'Иван',
    age: 19
};
console.log(student);
console.log(get2(student));
console.log(student);


console.log(Math.random()); // нечистая функция 3
// возвращает разные данные
