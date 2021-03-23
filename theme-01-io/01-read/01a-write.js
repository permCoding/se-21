// установить пакет: npm install readline-sync

const readln = require('readline-sync'); // подключаем модуль

process.stdout.write("- введите целое число - "); // выводит без переноса
let answer = Number(readln.question()); // читаем с консоли
let result = answer%2 == 0? "чётное": "нечётное";

console.log("- это число " + result);