# se-21  

## Software engineering  

### Программная инженерия  

Объём учебной дисциплины (семестр 2): Лекций - 12; л/р - 8; Экзамен  

**БЕЛЯКОВ Андрей Юрьевич**  
| [VK](https://vk.com/permCube) | [telegram](https://t.me/AndreyPerm) | [email](mailto:belyakov@pgatu.ru) |  
  
--- 

### Лекции дистанционно тут:  

* [BBB5](https://bbb5.psaa.ru/b/and-rqi-vdx)  
* [BBB](https://bbb.psaa.ru/b/and-jcn-9at)  
* [Zoom](https://us04web.zoom.us/j/6931731236?pwd=T1lNamFoMjJtMHlSbWVKZHF2d3Qwdz09)  
* [MyWebinar](https://go.mywebinar.com/npkg-qmfz-cgsl-cdtw)  
* [Discord](https://discord.gg/ZK4kgdn)  

--- 

### [Рейтинг группы ПИб-3](https://docs.google.com/spreadsheets/d/189XjCTS8Duof7kzUyPp8pZJd0F9IcxT7rorJR9f3Hnk/edit?usp=sharing)  

### [Контрольные работы на Степике](https://stepik.org/64867/)  

### [Лабораторки - ПРАКТИКУМ](https://pcoding.ru/pdf/jsFuncCoding.pdf)  

### [Вопросы для собеседования](questions.md)  

---

Для каждой темы будет своя директория в репозитории, в каждой из них будет файл package.json, но не будет директории /node_modules (я их все исключил в файле .gitignore, чтобы не занимали место и подгружались самые новые версии). После того как вы скачаете к себе папку с программами, следует сначала установить все зависимости - для этого в консоли для текущей папки выполните команду:
```
npm install
```
Менеджер пакетов создаст папку node_modules и выполнит загрузку туда модулей, указанных в файле package.json.

---  

Полезные материалы:  
[Качаем платформу тут nodejs.org](https://nodejs.org/en/download/)  
[Node.js API документация](https://nodejs.org/api/)  
[Введение в Node JS](https://metanit.com/web/nodejs/1.1.php)  
[Серверное программирование на Node.js](https://code.tutsplus.com/ru/tutorials/learning-server-side-javascript-with-nodejs--net-10044)  
[Node.js для серверной разработки](https://habr.com/ru/company/ruvds/blog/345164/)  
[Простое веб-приложение](https://umbrellait.com/ru/blog/how-to-build-a-simple-web-application-using-node-js/)  

---  

Темы:  

0. [Введение в Node.js](./theme-00-intro/)  
1. [Организация ввода/вывода](./theme-01-io/)  
2. [Обработка массивов]()  
3. [Файлы, объекты]()  
4. [Экспертная система]()  
5. [CSV]()  
6. [JSON]()  
7. [Парсер]()  
8. [SQLite]()  
9. [MySQL]()  

---  

Паттерн для решения задач на степике  
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

ЛЕКЦИИ  

Лекция 01 - 18.02.21  
[Node.js Начало](https://show.zohopublic.com/publish/lgpre0a1454160d4141e8834b825916cafb31)  
[Папка с презентациями](https://drive.google.com/drive/folders/1oIwYQdkQ0gjt4PXG1wOf-2JBIxu3rOUT?usp=sharing)  

---  

ЛАБОРАТОРКИ

---  

```

```

---  

