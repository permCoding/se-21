// установить пакет: npm install readline-sync
readln = require('readline-sync'); // подключаем модуль

console.log("- введите целое число");
answer = Number(readln.question('> ')); // читаем с консоли
result = answer%2 == 0? "чётное": "нечётное";

console.log("это число " + result);