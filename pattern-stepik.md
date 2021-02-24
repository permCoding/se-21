## Паттерн для решения задач на степике  

Читает все вводимые строки (событие 'line') в один массив lines  
По окончании ввода (событие 'close') ищет решение и выводит на экран  

Для окончания ввода строк с клавиатуры в терминале введите:  
* Ctrl-D в Linux  
* Ctrl-C в Windows  

```
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
    // тут ваше решение
	result = lines[0];
    console.log(result);
});
```

Пример решения задачи  
В данном примере вводятся n строк с целыми числами и вычисляется сумма чётных  

```

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
    let n = parseInt(lines[0], 10);
    let result = lines
        .slice(1, n+1)
        .map(x => +x)
        .filter(x => x%2 == 0)
        .reduce((acc, next) => acc + next, 0);
    console.log(result);
});
  
```

---  