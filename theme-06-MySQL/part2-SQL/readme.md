# Library mysql2

## Подготовительный раздел  

Если вы хотите проводить эксперименты с представленными в этом пособии данными, запросами и программами, то можете самостоятельно создать таблицу и наполнить её подходящими значениями или просто сделать два запроса по созданию таблицы и по наполнению её данными:  

```SQL
CREATE TABLE `abiturs` (
    `id` INT NOT NULL AUTO_INCREMENT , 
    `lastName` VARCHAR(20) NOT NULL , 
    `rating` INT NOT NULL , 
    `gender` BOOLEAN NOT NULL , 
    `birthDate` DATE NULL , 
    `city` VARCHAR(20) NULL , 
    PRIMARY KEY (`id`)
);
```

```SQL
INSERT INTO abiturs (id, lastName, rating, gender, birthDate, city) 
VALUES 
    ('1','Мишкин','217','1','2002-08-23','Кунгур'),
    ('2','Бортич','224','0','2002-06-03','Лысьва'),
    ('3','Деревянко','182','0','2002-02-20','Оса'),
    ('4','Столбова','194','0','2003-01-22','Кунгур'),
    ('5','Хомич','205','0','2002-04-23','Кунгур'),
    ('6','Круглов','191','1','2002-04-23','Березники'),
    ('7','Иванов','192','1','2002-05-17','Кунгур'),
    ('8','Петров','191','1','2002-11-25','Кунгур'),
    ('9','Сидоров','196','1','2004-01-20','Кунгур'),
    ('10','Капустин','196','1','2002-06-04','Кунгур'),
    ('11','Томатова','201','0','2003-04-16','Кунгур'),
    ('12','Ежова','214','0','2001-10-07','Лысьва'),
    ('13','Микова','222','0','2001-10-07','Пермь'),
    ('14','Мамин','199','1','2001-11-10','Пермь'),
    ('15','Комов','195','1','2002-01-17','Пермь');
```

Создайте через панель управления phpMyAdmin в своём аккаунте базу данных и выполните последовательно приведённые выше два запроса в разделе SQL.  
По результатам этих запросов будет создана и заполнена таблица, которую можно посмотреть в разделе "Дизайнера" базы данных:  

![table-abiturs](./images/table-abiturs.jpg)  

а содержимое можно увидеть в разделе Обзор:  

![table-abiturs-rows](./images/table-abiturs-rows.jpg)  

---  
---  

## Директория part2-SQL - разбор программ  

В этой директории представлены примеры программ организации базовых запросов по работе с одной таблицей: CREATE, DROP, INSERT, UPDATE, DELETE, TRUNCATE, SELECT  
Список программ этой директории:  

```txt
00-select.js
01-select.js
02-select.js
03-select.js
04-select.js
05-count.js
06-drop.js
07-create.js
08-insert.js
09-truncate.js
10-readcsv.js
10-readjson.js
11-many.js
12-insmany.js
13-insmany.js
14-insmany.js
15-tried.js
16-ignore.js
21-select.js
22-params.js
23-params.js
24-params.js
seldate.js
swap.js
```

Первый пример простой - чтение данных из одной таблицы.  
Для его реализации нужно сначала создать вручную через панель phpMyAdmin базу данных и в ней таблицу abiturs с некоторым количеством записей. Чуть позже будет программа, которая сама создаёт таблицу и заполняет её данными.  
Порядок работы такой: нужно сначала создать объект клиента для подсоединения и через него отправить запрос SELECT, например, так:  

### 00-select.js  

```js
const mysql = require("mysql2"); // подключаем библиотеку

const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
});

conn.query("SELECT lastName, rating FROM abiturs", (err, results, fields) => {
    if (err) console.error(err);
    console.table(results);
    conn.end();
});
```

Объект клиента conn в качестве параметра принимает объект с параметрами (host, port, user, ...) подключения к базе данных.  
При обращении к методу query (есть аналогичный метод execute) будет выполнен запрос к базе данных.  
По результатам работы метода query в соотвествующих переменных будут находиться:  

- в переменной err код ошибки при возникновении исключительной ситуации во время выполнения запроса  
- в переменной results - результаты выполнения запроса в виде массива объектов  
- в переменной fields массив метаданных по полям таблицы - вы можете самостоятельно вывести на экран этот массив  

Обратите внимание, что эти данные передаются в callback функцию, которая написана после запроса вторым аргументом метода query.  
Только после того как запрос выполнится будет вызвана эта анонимная функция.  
В качестве тела функции вы можете написать дополнительный алгоритм по обработке полученных данных, сделать ещё запрос к базе данных, вывести результаты на экран или в файл.  
После одного или нескольких запросов к базе данных следует закрыть соединение - conn.end().  

Результаты работы программы:  

```js
┌─────────┬─────────────┬────────┐
│ (index) │  lastName   │ rating │
├─────────┼─────────────┼────────┤
│    0    │  'Мишкин'   │  217   │
│    1    │  'Бортич'   │  224   │
│    2    │ 'Деревянко' │  182   │
│    3    │ 'Столбова'  │  194   │
│    4    │   'Хомич'   │  205   │
│    5    │  'Круглов'  │  191   │
│    6    │  'Иванов'   │  192   │
│    7    │  'Петров'   │  191   │
│    8    │  'Сидоров'  │  196   │
│    9    │ 'Капустин'  │  196   │
│   10    │ 'Томатова'  │  201   │
│   11    │   'Ежова'   │  214   │
│   12    │  'Микова'   │  222   │
│   13    │   'Мамин'   │  199   │
│   14    │   'Комов'   │  195   │
└─────────┴─────────────┴────────┘
```

Метод query по умолчанию запускается в асинхронном режиме. Что это означает?  
Это значит, что строчки кода, написанные после запуска метода query будут запускаться независимо и сразу, не дожидаясь окончания работы query. От этого общий результат работы будет непредсказуем. Это можно увидеть на простом примере:

### 01-select.js  

```js
const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
});

let rows = []; // тут хотим хранить результат запроса к БД

conn.query("SELECT lastName, rating FROM abiturs", (err, results) => {
    rows = results;
    console.table(rows); // этот вывод будет вторым
});

console.table(rows); // этот вывод будет первым

conn.end();
```

Что в этой программе рискованного?  
Сначала будет инициализация пустого массива.  
Потом в асинхронном режиме запустится запрос на выборку из БД.  
И, не дожидаясь результата, запустится метод печати результатов на экран - console.table(rows).  
Но, так как данные ещё не будут получены из таблицы БД, то этот вывод будет пустым.  
Потом уже будут получены данные и будет совершён вывод из callback-функции метода query.  
Можете посмотреть что получится:  

```js
┌─────────┐
│ (index) │
├─────────┤
└─────────┘
┌─────────┬─────────────┬────────┐
│ (index) │  lastName   │ rating │
├─────────┼─────────────┼────────┤
│    0    │  'Мишкин'   │  197   │
│    1    │  'Бортич'   │  224   │
│    2    │ 'Деревянко' │  182   │
│    3    │ 'Столбова'  │  194   │
│    4    │   'Хомич'   │  205   │
│    5    │  'Круглов'  │  191   │
│    6    │  'Иванов'   │  192   │
│    7    │  'Петров'   │  191   │
│    8    │  'Сидоров'  │  196   │
│    9    │ 'Капустин'  │  196   │
│   10    │ 'Томатова'  │  201   │
│   11    │   'Ежова'   │  214   │
│   12    │  'Микова'   │  222   │
│   13    │   'Мамин'   │  199   │
│   14    │   'Комов'   │  195   │
└─────────┴─────────────┴────────┘
```

То есть логика последовательного исполнения инструкций в программе с асинхронными методами нарушается.  

Если вам нужна определённая последовательность выполнения операций обработки данных, то можно использовать три способа реализации:  

- через callback-функции  
- через промисы  
- через функции async/await  

Организацию таких последовательных запросов рассмотрим в другом разделе. А сейчас мы остановимся только на выполнении одиночного запроса к базе данных. Однако, даже в этом случае следует учитывать асинхронность выполнения самого запроса, так как вывод данных на экран или в файл может начаться раньше, чем будут получены результаты SQL-запроса. Поэтому все запросы будут реализованы в формате промисов.  

### 02-select.js

```js
const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
});

conn.promise()
    .query("SELECT lastName, rating FROM abiturs")
    .then(([rows]) => console.table(rows))
    .catch((err) => console.error(err))
    .then(conn.end());
```

В этой программе сначала получаем объект conn для соединения с БД.  
Потом получаем из него промис promise(), в котором последовательно реализуем методы:  
> сначала делаем запрос к БД методом query()  
> дождавшись ответа (метод then()), выводим результаты на экран в виде таблицы  
> в случае каких-то неполадок с запросом промис нас перебросит сразу на метод catch - там выведем > сообщение об ошибке  
> в самом конце закроем соединение  

Обратите внимание на странную организацию приёма параметров в анонимную collback-функцию в рамках метода then:  .then(([rows]) => console.table(rows)  
На самом деле, как и ранее (см. 00-select.js), туда передаются два массива (в качестве первого аргумента - результаты выполнения запроса в виде массива объектов, в качестве второго аргумента массив метаданных по полям таблицы). Но мы можем не принимать второй аргумент, однако данные передаются именно массивом, поэтому в шапке анонимной функции пишем именно так: [rows] - в переменную rows будет передан массив объектов как результат работы запроса SELECT.  

Чтобы особенность присваивания в массив, реализованная в js, вам была чуть более понятна, приведу такой пример по обмену значениями двух переменных не используя третью:  

### swap.js

```js
let x = 2;
let y = 7;

console.log(`x = ${x}; y = ${y}`);

[x,y] = [y,x];

console.log(`x = ${x}; y = ${y}`);
```

Результаты работы программы:

```js
x = 2; y = 7
x = 7; y = 2
```

Однако, продолжим по нашей теме...  
Можно в переменную conn сразу получить промис:  

### 03-select.js

```js
const mysql = require("mysql2"); // npm i mysql2

const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
}).promise();

conn
    .query("SELECT lastName, rating FROM abiturs")
    .then(([rows]) => console.table(rows))
    .catch((err) => console.error(err))
    .then(conn.end());

```

Или оформить получение такого промиса в виде отдельной функции и убрать её в модуль, так как сами параметры подсоединения в дальнейшем будут одинаковы для всех последующих программ.  

### Модуль utils.js  

```js
const mysql = require("mysql2");

const paramsDB = {
    host: "localhost",
    port: "3306",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
};

function get_connection() {
    return mysql.createConnection(paramsDB);
}

module.exports.get_conn = get_connection;
```

Не забывайте делать публичными (module.exports.***) необходимые классы, функции, переменные, константы...  

И сама программа:  

### 04-select.js

```js
const ut = require('./modules/utils'); // модуль utils из папки modules

const conn = ut.get_conn();

conn.promise() // промис делаем тут
    .query("SELECT lastName, rating FROM abiturs")
    .then(([rows]) => console.table(rows))
    .catch((err) => console.error(err))
    .then(conn.end());
```

А так можно получить количество записей в таблице:  

### 05-count.js

```js
const get_conn = require('./modules/utils').get_conn;

const conn = get_conn();

conn.promise()
    .query("SELECT COUNT(*) FROM abiturs")
    .then(([rows]) => rows[0]['COUNT(*)'])
    .then((count) => { console.log('count =', count) })
    .catch((err) => { console.error(err) })
    .then(conn.end());

```

Тут есть ряд особенностей:  

1) показан способ как можно импортировать не весь модуль (если в нём много классов, функций), а только необходимый метод:  
const get_conn = require('./modules/utils').get_conn;  

2) в переменную rows попадает массив строк из SQL-запроса, но в данном случае запрос возвращает только одно значение, поэтому можно из массива взять только первое значение rows[0], этот первый элемент массива - это объект с именем поля 'COUNT(*)', из которого мы и извлекаем интересующее нас значение  

```js
// вот так выглядит массив rows  
rows == [ TextRow { 'COUNT(*)': 15 } ]  
```

3) метод then() что-то возвращает из своей callback-функции и может это передать на следующий этап (в следующий then) - это может быть как простое значение, так и очередной промис (будет показано в других примерах), инструкцию return можно задать явно, вот эти два варианта эквиваленты:  

```js
.then(([rows]) => rows[0]['COUNT(*)'])  

.then(([rows]) => { return rows[0]['COUNT(*)']; })  
```

Так можно оформить удаление таблицы:  

### 06-drop.js  

```js
const get_conn = require('./modules/utils').get_conn;

let query_drop = "DROP TABLE abiturs";

const conn = get_conn();

conn.promise()
    .query(query_drop)
    .then(() => console.log('table dropped'))
    .catch((err) => console.error(err))
    .then(() => {
        console.log('закрываем соединение');
        conn.end();
    });
```

Так можно отправить запрос на создание таблицы:  

### 07-create.js  

```js
const get_conn = require('./modules/utils').get_conn;

let query_create = "CREATE TABLE `abiturs` ( \
    `id` INT NOT NULL AUTO_INCREMENT , \
    `lastName` VARCHAR(20) NOT NULL , \
    `rating` INT NOT NULL , \
    `gender` BOOLEAN NOT NULL , \
    `birthDate` DATE NULL , \
    `city` VARCHAR(20) NULL , \
    PRIMARY KEY (`id`))";

const conn = get_conn();

conn.promise()
    .query(query_create)
    .then(() => console.log('table created'))
    .catch((err) => console.error(err))
    .then(conn.end());
```

Отметим особенности данного кода:  
В данном коде **обратный слеш** позволяет переносить длинную строку.  
**Обратный апостроф** в SQL-запросе тут использован для общего стиля.  
Обязательным он является, если имя поля в таблице с пробелом или название таблицы, столбца совпадает с зарезервированным словом MySQL, например, group.  

Добавим одну запись в таблицу:  

### 08-insert.js

```js
const ut = require('./modules/utils');  

let query_insert = "INSERT INTO abiturs \
(id, lastName, rating, gender, birthDate, city) \
VALUES \
(NULL, 'Сидоров', 207, true, '2002-08-03', 'Пермь')";

const conn = ut.get_conn();

conn.promise()
    .query(query_insert)
    .then(() => console.log('row inserted'))
    .catch((err) => console.error(err))
    .then(conn.end());
```

Обратите внимание, что в этой программе в SQL-запросе в качестве значения первого поля id передаётся NULL - это сделано намеренно, так как поле id мы раньше назначили автоинкрементным - при передаче NULL-значения в такое поле оно будет само формироваться.  

Если вы захотите очистить содержимое таблицы, то сделать это можно двумя похожими способами: через команду DELETE или через команду TRUNCATE:  

### 09-truncate.js  

```js
const get_conn = require('./modules/utils').get_conn;

let query_truncate = "TRUNCATE abiturs";
let query_delete = "DELETE FROM abiturs";

// сравнить DELETE vs TRUNCATE - delete не обнуляет индексацию 

const conn = get_conn();

conn.promise()
    .query(query_truncate)
    .then(() => console.log('table truncated'))
    .catch((err) => console.error(err))
    .then(conn.end());
```

Тут особенность состоит в том, что SQL-команда DELETE удаляет записи из таблицы не стирая индексацию автоинкрементного поля. Это значит, что после очистки таблицы и последующей вставки в неё записей их индексаци продолжится не с нуля. У вас есть возможность самостоятельно провести этот эксперимент...  

### 10-readcsv.js  

Если у нас есть данные по объектам в виде csv-файла, то можно автоматизировать их перенос в базу данных.  
Пусть в папке csv лежит файл abiturs.csv:  

```js
id,lastName,rating,gender,birthDate,city
1,Мишкин,217,1,2002-08-23,Кунгур
2,Бортич,224,0,2002-06-03,Лысьва
3,Деревянко,182,0,2002-02-20,Оса
4,Столбова,194,0,2003-01-22,Кунгур
5,Хомич,205,0,2002-04-23,Кунгур
6,Круглов,191,1,2002-04-23,Березники
7,Иванов,192,1,2002-05-17,Кунгур
8,Петров,191,1,2002-11-25,Кунгур
9,Сидоров,196,1,2004-01-20,Кунгур
10,Капустин,196,1,2002-06-04,Кунгур
11,Томатова,201,0,2003-04-16,Кунгур
12,Ежова,214,0,2001-10-07,Лысьва
13,Микова,222,0,2001-10-07,Пермь
14,Мамин,199,1,2001-11-10,Пермь
15,Комов,195,1,2002-01-17,Пермь
```

Для начала нужно научиться читать данные из csv-файла и формировать из них массив объектов для дальнейшего использования.  
Добавим в наш модуль **utils.js**, созданный ранее, две зависимости, одну функцию csv_to_json(nameFile) и её экспорт:  

```js
const fs = require('fs');
const csvjson = require('csvjson');

function csv_to_json(nameFile) {
	let textCSV = fs.readFileSync(nameFile, 'utf-8');
	return csvjson.toObject(textCSV, { delimiter: ',' });
}

module.exports.csv_to_json = csv_to_json;
```

Функция **csv_to_json** использует синхронный метод для чтения файла. Синхронный метод чтения csv-файла позволяет нам без промисов дождаться окончания его выполнения и потом все полученные данные отправить в базу данных. Метод csvjson.toObject(textCSV, { delimiter: ',' }) позволяет перевести полученный csv-файл в массив json-объектов. В качестве разделителя полей указали символ ','.  

В основной программе так можно использовать этот метод для вывода на экран массива объектов из csv-файла:  

```js
function ex_1(file_csv) {
    console.table(require('./modules/utils')
        .csv_to_json(file_csv)
    );    
}

ex_1('./csv/abiturs.csv');
```

Из примера вы видите, что не обязательно подключаемый модуль присваивать какой-то переменной и потом её использовать, можно непосредственно из подключаемого модуля выбирать необходимую функцию и сразу запускать её на исполнение: require('./modules/utils').csv_to_json(file_csv)  

Если же требуется использовать именно асинхронный вариант обработки данных, то можно подключить асинхронный метод чтения из файла readFile() и передать в его callback-функцию прочитанный файл.  
Шапка callback-функции принимает два аргумента - код ошибки (при наличии) и прочитанные из файла данные.  
В теле анонимной callback-функции будет произведён парсинг данных: мы подключаем библиотеку csvjson, из неё берём метод toObject, в который передаём считанные только что данные из файла (переменная text) и указываем разделитель данных ({ delimiter: ',' }):  

```js
function ex_2(file_csv) {
    require('fs')
        .readFile(file_csv, 'utf-8', (err, text) => {
            if (err) console.error(err);
            console.table(require('csvjson')
                .toObject(text, { delimiter: ',' })
            );
        });
}

ex_2('./csv/abiturs.csv');
```
Результаты работы функций ex_1 и ex_2 идентичны.  

От callback-функций можно перейти к промисам - при большом количестве последовательных этапов обработки данных это может дать преимущество в лаконичности кода и меньшем количестве ошибок:  

```js
function ex_4(file_csv) {
    const rp = require('request-promise');
    rp(file_csv)
        .then((text) => console.table(require('csvjson')
            .toObject(text, { delimiter: ',' })))
        .catch((err) => console.error(err))
        .finally(() => console.log('\tThe end...'));
}

ex_4('https://pCoding.ru/csv/abiturs.csv');
```

В данном примере (ex_4()) csv-файл загружается из интернета (по содержанию это тот же самый abiturs.csv), для чего используется специальная библиотека - request-promise.  
Документация по этой библиотеке тут: https://github.com/request/request-promise  
Тут мы создали объект запроса к url-адресу c возвращением функции промиса: const rp = require('request-promise');  
Далее передаём в него адрес файла, после его получения организуем обработку и вывод на экран в табличной форме как было описано ранее.  

Рассмотрим также вариант с сохранением полученного из сети файла на локальный диск:

```js
function ex_5(file_csv, file_local) {
    require('request-promise')(file_csv)
        .then((text) => require('fs')
            .writeFile(file_local, text, () => ex_1(file_local)));
}

ex_5('https://pCoding.ru/csv/abiturs.csv', './csv/load.csv');
```

Файл берём из сети - 'https://pCoding.ru/csv/abiturs.csv', адрес файла через переменную file_csv передаём в функцию промиса, после получения данных запускаем асинхронную функцию записи .then((text) => require('fs').writeFile()), после записи в локальный файл './csv/load.csv' вызывается callback-функция (с использованием ранее разработанной ex_01()) вывода данных из файла на экран: () => ex_1(file_local)  
Очевидно, что разные стили организации асинхронной работы можно смешивать - в этом примере это промисы и callback-функции.  

### 10-readjson.js  

Анологичным образом можно получать из сети json-данные и обрабатывать у себя в программе:  

```js
const fetch = require('node-fetch'); // npm i node-fetch
const _ = require('lodash');

function ex_6(url) {
    fetch(url)
        .then(resp => resp.json())
        .then((json)=>console.table(
            _.orderBy(json, ['rating','lastName'],['desc','asc']))
        );
}

ex_6('https://pCoding.ru/csv/abiturs.json');
```

В этом примере мы передаём url-адрес json-файла в промис запроса, он возвращает объект Response, из которого мы извлекаем массив json-объектов, сортируем его по двум параметрам и в табличном формате выводим на экран.  
Данные берутся из сети интернет из json-файла - содержание файла такое же как и в abiturs.csv:  

```js
[
    {
        "id": "1",
        "lastName": "Мишкин",
        "rating": "217",
        "gender": "1",
        "birthDate": "2002-08-23",
        "city": "Кунгур"
    },
    {
        "id": "2",
        "lastName": "Бортич",
        "rating": "224",
        "gender": "0",
        "birthDate": "2002-06-03",
        "city": "Лысьва"
    },
    {
        "id": "3",
        "lastName": "Деревянко",
        "rating": "182",
        "gender": "0",
        "birthDate": "2002-02-20",
        "city": "Оса"
    },
    {
        "id": "4",
        "lastName": "Столбова",
        "rating": "194",
        "gender": "0",
        "birthDate": "2003-01-22",
        "city": "Кунгур"
    },
    {
        "id": "5",
        "lastName": "Хомич",
        "rating": "205",
        "gender": "0",
        "birthDate": "2002-04-23",
        "city": "Кунгур"
    },
    {
        "id": "6",
        "lastName": "Круглов",
        "rating": "191",
        "gender": "1",
        "birthDate": "2002-04-23",
        "city": "Березники"
    },
    {
        "id": "7",
        "lastName": "Иванов",
        "rating": "192",
        "gender": "1",
        "birthDate": "2002-05-17",
        "city": "Кунгур"
    },
    {
        "id": "8",
        "lastName": "Петров",
        "rating": "191",
        "gender": "1",
        "birthDate": "2002-11-25",
        "city": "Кунгур"
    },
    {
        "id": "9",
        "lastName": "Сидоров",
        "rating": "196",
        "gender": "1",
        "birthDate": "2004-01-20",
        "city": "Кунгур"
    },
    {
        "id": "10",
        "lastName": "Капустин",
        "rating": "196",
        "gender": "1",
        "birthDate": "2002-06-04",
        "city": "Кунгур"
    },
    {
        "id": "11",
        "lastName": "Томатова",
        "rating": "201",
        "gender": "0",
        "birthDate": "2003-04-16",
        "city": "Кунгур"
    },
    {
        "id": "12",
        "lastName": "Ежова",
        "rating": "214",
        "gender": "0",
        "birthDate": "2001-10-07",
        "city": "Лысьва"
    },
    {
        "id": "13",
        "lastName": "Микова",
        "rating": "222",
        "gender": "0",
        "birthDate": "2001-10-07",
        "city": "Пермь"
    },
    {
        "id": "14",
        "lastName": "Мамин",
        "rating": "199",
        "gender": "1",
        "birthDate": "2001-11-10",
        "city": "Пермь"
    },
    {
        "id": "15",
        "lastName": "Комов",
        "rating": "195",
        "gender": "1",
        "birthDate": "2002-01-17",
        "city": "Пермь"
    }
]
```

Итак, мы уже можем получить массив объектов из разных источников данных, но как же их все записать в базу данных в виде отдельных записей в таблицу?  
  
Есть несколько альтернатив:  

1) можно запустить цикл по массиву объектов и вставлять их асинхронно по-одному по отдельности,  
2) можно сгенерировать один большой SQL-запрос со множеством VALUES (с объектами),  
3) можно подключить дополнительную библиотеку для асинхронного выполнения запросов и возможности потом их все зафиксировать (COMMIT) или откатить назад.  

Подход 2 (сгенерировать один большой SQL-запрос со множеством VALUES) разобран в примерах 11-many.js и 12-insmany.js - их можете изучить самостоятельно.  

В этом пособии рассмотрим другой вариант - воспользуемся возможностью передачи параметров в SQL-запрос и передадим в качестве VALUES массив массивов значений - именно в таком формате и нужно передавать.  

Сначала исследуйте подготовительный пример:  

```js
const ut = require('./modules/utils');

let array = ut.csv_to_json('./csv/abiturs.csv');
let rows = array.map(item => Object.values(item).slice(1));
console.log(rows);
```

Результаты работы этой программы:  

```js
[
  [ 'Мишкин', '217', '1', '2002-08-23', 'Кунгур' ],    
  [ 'Бортич', '224', '0', '2002-06-03', 'Лысьва' ],    
  [ 'Деревянко', '182', '0', '2002-02-20', 'Оса' ],    
  [ 'Столбова', '194', '0', '2003-01-22', 'Кунгур' ],  
  [ 'Хомич', '205', '0', '2002-04-23', 'Кунгур' ],     
  [ 'Круглов', '191', '1', '2002-04-23', 'Березники' ],
  [ 'Иванов', '192', '1', '2002-05-17', 'Кунгур' ],        
  [ 'Петров', '191', '1', '2002-11-25', 'Кунгур' ],        
  [ 'Сидоров', '196', '1', '2004-01-20', 'Кунгур' ],       
  [ 'Капустин', '196', '1', '2002-06-04', 'Кунгур' ],      
  [ 'Томатова', '201', '0', '2003-04-16', 'Кунгур' ],      
  [ 'Ежова', '214', '0', '2001-10-07', 'Лысьва' ],
  [ 'Микова', '222', '0', '2001-10-07', 'Пермь' ],
  [ 'Мамин', '199', '1', '2001-11-10', 'Пермь' ],
  [ 'Комов', '195', '1', '2002-01-17', 'Пермь' ]
]
```

Итак, нам нужно перевести массив объектов array в массив массивов значений rows, поэтому преобразуем json в массив rows, пробежавшись методом map по всем объектам:  
let rows = array.map(item => Object.values(item).slice(1));  
Тут мы из каждого объекта сделали массив его значений и убрали первый столбец (id), так как мы планируем воспользоваться автоинкрементным свойством поля id.  
  
Итак, мы взяли данные из csv-файла и преобразовали их в массив массивов значений.  
Теперь уже можно приступить к их переносу в базу данных.  

### 14-insmany.js  

Выберем данные по объектам из csv-файла, и перенесём их в базу данных:  

```js
const ut = require('./modules/utils');

let array = ut.csv_to_json('./csv/abiturs.csv');
let rows = array.map(item => Object.values(item).slice(1));

let query = "INSERT INTO abiturs \
(lastName, rating, gender, birthDate, city) VALUES ? "; // id, 

const conn = ut.get_conn();

conn.promise()
    .query(query, [rows])
    .then(() => console.log('rows inserted'))
    .catch((err) => console.error(err))
    .then(conn.end());
```

Напомню: нам нужно перевести массив объектов в массив массивов значений, так как именно на такой формат настроен метод вставки множества записей: .query(query, [rows])  <-- вот тут второй параметр должен быть массивом массивов.  

### 15-tried.js  

Если же возникает необходимость сделать определённую последовательность SQL-запросов (не один запрос), то можно воспользоваться вложенными промисами:  

```js
const ctj = require('./modules/utils').csv_to_json;
const get_conn = require('./modules/utils').get_conn;

let array = ctj('./csv/abiturs.csv');
let inserted_rows = array.map(item => Object.values(item));

let query_truncate = "TRUNCATE abiturs";
let query_insert = "INSERT INTO abiturs (id, lastName, rating, gender, birthDate, city) VALUES ? ";

const conn = get_conn();

conn.promise()
    .query(query_truncate)
    .then(() => { 
        conn.promise()
            .query(query_insert, [inserted_rows])
            .then(conn.end())
            .then(() => console.log('rows rewrited'))
            .catch((err) => console.error('ins -> ', err));
    })    
    .catch((err) => console.error('tunc ->', err));
```

Обратите внимание, что тут во внешнем промисе сначала выполняется запрос на очитску таблицы, после чего создаётся новый (вложенный) промис, который обеспечивает вставку множества записей.  
Таким же способом можно организовать поэтапное создание таблицы (запрос CREATE) и заполнение её (запрос INSERT) данными.  
К особенностям организации множества запросов мы ещё вернёмся при рассмотрении примеров из директории **part3-pool**.  

### 16-ignore.js  

При вставке некоторого количества записей, можно случайно запустить на запись уже существующие в таблицы записи - дублирования не будет, если у вас есть PRIMARY KEY, но при этом весь запрос на вставку "сломается" и программа "вылетит". Чтобы избежать этой ситуации и "заставить" запрос на множественную вставку продолжить работать для корректных записей (не дублирующихся), можно добавить в SQL-команду модификатор ignore:  

```js
const conn = require('./modules/utils').get_conn();

let query_insert = "INSERT ignore INTO abiturs \
(id, lastName, rating, gender, city) \
VALUES \
(52, 'Камикадзе', 216, true, 'Пермь'), \
(1, 'Углова', 196, false, 'Пермь')";

conn.promise()
    .query(query_insert)
    .then(([result]) => { return result.affectedRows })
    .then((count) => console.log(`${count} rows inserted`))
    .catch((err) => console.error(err))
    .then(conn.end());
```

Тут есть записи с повторением id и без повторений. Например, id = 52 - новый, а id = 1 - уже есть в таблице, поэтому часть записей вставится нормально, а дубликаты не будут вставляться и программа продолжит работу. Попробуйте самостоятельно убрать модификатор ignore и оценить код и содержание ошибки, которые будут выведены на экран.  

В некоторых случаях имеет смысл переключить попытку записи существующей уже записи в таблице на команду UPDATE:  

```js
const conn = require('./modules/utils').get_conn();

let query_insert = "INSERT INTO abiturs \
(id, lastName, rating, gender) \
VALUES (52, 'Камикадзе', 216, false) \
ON DUPLICATE KEY UPDATE gender = VALUES(gender)";

conn.promise()
    .query(query_insert)
    .then(([result]) => console.log(result.insertId))
    .catch((err) => console.error(err))
    .then(conn.end());
```

В этом примере рассматривается случай замены значения поля gender в существующей записи с id = 52.  


---  

### 22-params.js  

В метод query() можно передвать один или два аргумента. Первый это SQL-запрос, второй - параметры для настройки этого запроса.  
Такие параметры удобно использовать, когда нужно сам запрос настраивать динамически в зависимости от текущих условий.  
В этом случае в теле SQL-запроса в позициях значений нужно оставлять знаки вопроса.  
Впоследствии вместо них будут подставляться значения из массива, переданного в качестве второго параметра в метод query():  

```js
const ut = require('./modules/utils');

const conn = ut.get_conn();

let query = "SELECT lastName, rating, city \
FROM abiturs WHERE gender = ? LIMIT ?";

let params = ['false', 5]

conn.promise()
    .query(query, params)
    .then(([rows]) => console.table(rows))
    .catch((err) => { console.error(err) })
    .then(conn.end());
```

### 23-params.js  

Кроме того, можно организовать вставку записи через передачу в качестве параметров запроса объекта с соответсвующими полями:  

```js
const ut = require('./modules/utils');

const conn = ut.get_conn();

let user = {
    lastName: "Васечкин",
    rating: 200,
    gender: true
};

let query = "INSERT INTO abiturs SET ?";

conn.promise()
    .query(query, user)
    .then(([result]) => {
        console.log('добавлено записей:', result.affectedRows);
        console.log('id добавленной записи:', result.insertId);
    })
    .catch((err) => { console.error(err) })
    .then(conn.end());
```

### 24-params.js  

Или даже изменить поля записей через передачу объекта со значениями полей:  

```js
const ut = require('./modules/utils');

const conn = ut.get_conn();

let params = { rating: 180, city: 'Куеда' };

let query = "UPDATE abiturs SET ? WHERE lastName = 'Васечкин'";

conn.promise()
    .query(query, params)
    .then(([result]) => console.log('изменено записей', result.affectedRows))
    .catch((err) => { console.error(err) })
    .then(conn.end());
```

---  

### seldate.js  

Часто данные по датам событий хранятся в таблицах как даты без времени, в этом случае при выводе на экран таких значений node.js будет приводить столбец с датами к типу данных Date, но так как у нас в таблице нет времени (только дата), то попытка приведения будет давать примерно такой результат: 2020-03-18T19:00:00.000Z  
Можно исправить вывод на экран средствами node.js или непосредственно в SQL-запросе функцией так: DATE_FORMAT(day, '%Y.%m.%d'), приведя дату к строке с заданным форматом отображения даты:  

```js
const get_conn = require('./modules/utils').get_conn;

const conn = get_conn();

let query1 = "SELECT lastName, DATE_FORMAT(birthDate, '%d.%m.%Y') \
FROM abiturs ORDER BY birthDate";

conn.promise()
    .query(query1)
    .then(([rows]) => console.table(rows))
    .catch((err) => { console.error(err) })
    .then(conn.end());
```

---  
---  
