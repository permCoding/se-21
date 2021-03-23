// просто демонстрация как работает группировка в регулярках

line = '[sort:buble]';

let res = line.match(/.(.*)./);

console.log(res);

console.log('->', res[1]);
