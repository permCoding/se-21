// установить пакет: npm install readline-sync

const readln = require('readline-sync'); // подключаем модуль

console.log("- введите целое число");
let answer = Number(readln.question('> ')); // читаем с консоли
let result = answer%2 == 0? "чётное": "нечётное";

console.log("это число " + result);