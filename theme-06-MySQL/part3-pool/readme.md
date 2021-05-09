# Library mysql2

## Директория part3-pool - разбор программ  

В данной директории приведены примеры программ по организации множества (пула) запросов.  
Итак, если нужно выполнить множество независимых запросов на вставку записей или сделать множество последовательных зависимых запросов, то можно открыть пул соединений и через него реализовать все запросы. Ранее мы открывали одно соединение - mysql.createConnection() - и через него реализовывали SQL-запросы, теперь будем открывать пул запросов - mysql.createPool().  

Прежде всего уточним, что мы можем использовать два способа подключения библиотеки mysql2 для работы с пулом запросов: без включённых промисов и с ними. Добавим в наш модуль utils.js оба способа, добавим два метода для получения пула запросов без промисов и с ними и включим их в экспорты:

```js
// эти строчки следует добавить в модуль utils.js
const mysql = require("mysql2");
const mysqlp = require("mysql2/promise");

function get_pool() {
    return mysql.createPool(paramsDB);
}

function get_pool_p() {
    return mysqlp.createPool(paramsDB);
}

module.exports.get_pool = get_pool;
module.exports.get_pool_p = get_pool_p;
```

Теперь расмотрим разницу в использовании:  

### 31-promise.js  

```js
const pool = require('./modules/utils').get_pool();

pool.promise()
    .query("SELECT * FROM abiturs")
    .then(([rows]) => { return rows })
    .then((rows) => console.table(rows))
    .catch((err) => console.error(err))
    .then(() => { 
        pool.end(); 
        console.log('все соединения закрыты'); 
    });
```

В программе 31-promise.js мы создаём объект пула, затем получаем промис, с помощью которого делаем запрос, выбираем записи, печатаем их на экране в табличной форме, затем закрываем пул соединений.  
Добавление метода promise() позволяет организовать последовательную цепочку методов then().then().catch().  
В этом примере показано так же, что метод then() может с помощью return передавать на следующий этап какие-то значения, в данном случае это массив rows.  

В следующем примере мы сразу получаем промис и делаем необходимые SQL-запросы:  

### 32-promise.js  

```js

const pool = require('./modules/utils').get_pool_p(); // как промисы

pool
    .query("SELECT * FROM abiturs")
    .then(([rows]) => { 
        console.table(rows); 
        pool.end(); 
    })
    .catch((err) => console.error(err));
```

Обратите внимание, что сейчас мы получили пул соединений в другом формате - сразу в виде промиса, который обеспечивает последовательную цепочку методов then().catch().  
Остальная часть работы не имеет принципиальных отличий.  

Теперь организуем массовую асинхронную вставку записей через пул запросов:  

### 33-pool.js  

```js
const get_pool = require('./modules/utils').get_pool;

let queries = [
    "INSERT INTO abiturs (lastName, rating, gender) VALUES ('Шатров', 208, true)",
    "INSERT INTO abiturs (lastName, rating, gender) VALUES ('Кошкина', 189, false)",
    "INSERT INTO abiturs (lastName, rating, gender) VALUES ('Шамова', 191, false)"
];

const pool = get_pool();
let count = 0;

queries.forEach((query, index) => {
    pool
        .query(query, function (err) {
            if (err) console.error(err);
            console.log('inserted rows =', ++count);
            if (index === queries.length - 1) pool.end();
        });    
});
```

Обратите внимание, что после открытия пула можно через него посылать множество разных запросов до закрытия пула. В этом примере все запросы на вставку (INSERT) и все они будут запущены в асинхронном режиме, но нельзя гарантировать последовательности добавления записей в таблицу в том же порядке, что они имеют в массиве **queries**. Самостоятельно проведите серию экспериментов. По ходу добавления записей текущий счётчик будет выводиться в консоль, по окончанию всех записей пул будет закрыт.  

Мы уже порядком подпортили таблицу abiturs, пришло время её привести в исходное состояние, для чего выполним три последовательных запроса:  
> TRUNCATE - для очистки таблицы и индексов  
> INSERT - для вставки исходных данных  
> SELECT - для получения вставленных данных и последующего вывода на экран для контроля  

Для этого воспользуемся основной особенностью промисов - создавать поток (цепочку) последовательно выполняющихся функций:  

### 34-tried.js  

```js
const ctj = require('./modules/utils').csv_to_json;
const get_conn = require('./modules/utils').get_conn;

let array = ctj('./csv/abiturs.csv');
let inserted_rows = array.map(item => Object.values(item));

let query_truncate = "TRUNCATE abiturs";
let query_insert = "INSERT INTO abiturs (id, lastName, rating, gender, birthDate, city) VALUES ? ";
let query_select = "SELECT lastName, rating FROM abiturs"

const conn = get_conn();

conn.promise()
    .query(query_truncate)
    .then(() => { 
        conn.promise()
            .query(query_insert, [inserted_rows])
            .then(() => {
                conn.promise()
                    .query(query_select)
                    .then(([rows]) => console.table(rows))
                    .then(conn.end())
            })
            .catch((err) => console.error('ins -> ', err));
    })    
    .catch((err) => console.error('tunc ->', err));
```

В данной программе мы берём данные из csv-файла, переводим их в массив массивов значений для организации массовой вставки. Далее создаём промис и запускаем первый запрос на очистку таблицы - .query(query_truncate). По результатам выполнения этого запроса создаём следующий промис и запускаем запрос на массовую вставку - .query(query_insert, [inserted_rows]). По результатам этого запроса создаём следующий промис и запускаем запрос на выборку из таблицы - .query(query_select). По результатам этого запроса выводим данные на экран в виде таблицы и закрываем пул. Результаты вывода на экран должны быть такие:  

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

Как вы помните, определённую последовательность выполнения асинхронных действий можно назначить не только через функции обратного вызова или промисы, но и через функции async/await:  

### 36-await.js  

```js
const get_pool = require('./modules/utils').get_pool_p;

let query_update = "UPDATE `abiturs` SET `rating`=? WHERE `lastName`=?";
let update_params = [224, "Бортич"];
let query_select = "SELECT lastName, rating, DATE_FORMAT(birthDate, '%d.%m.%Y') as date \
FROM abiturs ORDER BY birthDate ASC";


async function todo(pool) {
    await pool.query(query_update, update_params);
    [rows] = await pool.query(query_select);
    console.table(rows);
    pool.end();
}

todo(get_pool());
```

В этой программе создана функция **todo** типа **async**, которая в своём теле позволяет для промисов назначать модификатор **await**, обеспечивающий ожидание окончания выполнения текущего асинхронного действия (перед которым await написан).  
Уточним, await пишется только перед промисами, перед остальными синхронными методами не нужно писать await.  
Функция todo() получает на вход пул соединений и с помошью него реализует сначала запрос на изменение записи: await pool.query(query_update, update_params); При этом программа ждёт окончания этого действия и только потом запускает запрос на выборку данных из таблицы: [rows] = await pool.query(query_select); Все полученные данные выводятся в табличной форме на экран, после чего пул закрывается.  

---  

Метод .then() может возвращать не только простые значения, но и функцию типа промис - это также как и async/await позволяет организовать асинхронные действия в цепочку последовательно исполняющихся функций:  

### 37-tried.js  

```js
const get_pool = require('./modules/utils').get_pool_p; // как промисы
const wtc = require('./modules/utils').write_to_csv;

let query_update = "UPDATE `abiturs` SET `rating`=? WHERE `lastName`=?";
let update_params = [222, "Бортич"];
let query_select = "SELECT lastName, DATE_FORMAT(birthDate, '%d.%m.%Y') as date \
FROM abiturs ORDER BY birthDate ASC";

const pool = get_pool();

pool
    .execute(query_update, update_params)
    .then(result => {
        console.log('updated rows =', result[0].affectedRows);
        return pool.query(query_select); // возвращаем новый промис
    })
    .then(([rows]) => { pool.end(); return rows; })
    .then(rows => { console.table(rows); return rows; })
    .then(rows => wtc(rows, './csv/rows.csv'))
    .then(() => console.log('все соединения закрыты'))
    .catch((err) => console.error(err));
```

В этом примере производится изменение записи в таблице abiturs, затем производится выбора данных, после чего закрывается соединение, а данные передаются на экран и записываются в файл rows.csv:  

```js
lastName,date
Ежова,07.10.2001
Микова,07.10.2001
Мамин,10.11.2001
Комов,17.01.2002
Деревянко,20.02.2002
Хомич,23.04.2002
Круглов,23.04.2002
Иванов,17.05.2002
Бортич,03.06.2002
Капустин,04.06.2002
Мишкин,23.08.2002
Петров,25.11.2002
Столбова,22.01.2003
Томатова,16.04.2003
Сидоров,20.01.2004
```

---

Из пула соединений можно выделить одно конкретное, сохранить его в переменную и передавать последовательно между функциями для организации цепочки исполнения запросов:  

### 39-getconn.js  

```js
const ctj = require('./modules/utils').csv_to_json;
const get_pool = require('./modules/utils').get_pool_p; // как промисы

function get_rows(array) {
    return array.map(item => Object.values(item));
}

let array = ctj('./csv/abiturs.csv');
let query_truncate = "TRUNCATE abiturs";
let query_insert = "INSERT INTO abiturs \
(id, lastName, rating, gender, birthDate, city) VALUES ? ";
let inserted_rows = get_rows(array);
const pool = get_pool();

pool.getConnection((error, connection) => {
    if (error) reject(error);
    resolve(connection);
})
.then((conn) => {
    conn
        .query(query_truncate)
        .then(() => {
            console.log('table truncated');
            // conn.release()
        })
        .then(() => {
            conn
                .query(query_insert, [inserted_rows])
                .then(console.log('rows inserted'))
                .then(() => {conn.release(); pool.end(); })
            })
    });
```

Итак, здесь мы сначала из пула получаем одно соединение - pool.getConnection(), оно принимается во второй аргумент - connection. Так как это промис, то можно через функцию resolve(), в случае успешности получения соединения, передать его в функицю .then() в аргумент conn. С помощью этого объекта conn запускаем на исполнение запрос на очистку таблицы - .query(query_truncate), а затем в этом же соединении запускаем запрос на вставку записей, по результатам которого завершаем работу с этим соединением и закрываем пул соединений - .then(() => {conn.release(); pool.end(); }).  

---
