// установить пакет: npm install readline-sync
readln = require('readline-sync'); // подключаем модуль

process.stdout.write("- введите целое число - "); // выводит без переноса
answer = Number(readln.question()); // читаем с консоли
result = answer%2 == 0? "чётное": "нечётное";

console.log("- это число " + result);