// сортировка массива объектов users по двум параметрам
// задача: 
//   сорт по полю `name` по возрастанию/убыванию + 
//   и в группах по полю `age` возрастанию/по убыванию

const _ = require('lodash'); // npm install lodash

const users = [
    { name: 'fred',   age: 48 },
    { name: 'barney', age: 34 },
    { name: 'fred',   age: 40 },
    { name: 'barney', age: 36 }
];


/**
 * по одному параметру  
 * нативный метод и lodash
 * нативный метод - мутабельный
 * lodash - не мутабельный
 */
function _sort1() {
    _
        .sortBy(users, obj => obj.name)
        .forEach(obj => console.log(obj));

    console.log(users); // проверка сохранения чистоты функций

    users
        .sort((a,b) => a.name < b.name? -1: 1)
        .forEach(obj => console.log(obj));

    console.log(users); // проверка сохранения чистоты функций
}


/**
 * lodash - по двум параметрам  
 * обычный подход
 */
function _sort2() {
    _
        .sortBy(_.sortBy(users, obj => obj.name), obj => obj.age)
        .forEach(obj => console.log(obj));
    _
        .sortBy(_.reverse(_.sortBy(users, obj => obj.age)), obj => obj.name)
        .forEach(obj => console.log(obj));
    
    console.log(users); // проверка сохранения чистоты функций
}


/**
 * lodash - по двум параметрам  
 * подход с параметрами сортировки  
 * и направлениями asc, desc  
 */
function _sort3() {
    _
        .orderBy(users, ['name', 'age'], ['asc', 'desc']) // lodash!!!
        .forEach(obj => console.log(obj));

    console.log(users); // проверка сохранения чистоты функций
}

// _sort1();

// _sort2();

_sort3();
