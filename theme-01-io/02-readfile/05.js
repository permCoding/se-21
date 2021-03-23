// чтение с фильтрацией с регулярками

const check = new RegExp('^\\[.+:'); // так re компилируется во время выполнения
// const check = /^\[.+:.+\]/;

const get_trim = function (line) {
    let res = line.match(/.(.*)./); 
    return res[1];
}

console.log( // вывести на экран
    require("fs") // объект для работы с файлами
        .readFileSync("setup.cfg", "utf-8") // читаем файл
        .split(/\n|\r\n/) // разбиваем на массив из строк файла
        .filter(line => check.test(line)) // берём только с атрибутами
        // .filter(line => /^\[.*\]/.test(line)) // берём только с атрибутами
        .map(get_trim)
        .sort() // отсортируем
        .join(", ") // элементы массива в строку
);
    