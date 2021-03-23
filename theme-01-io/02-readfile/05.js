// чтение с фильтрацией с регулярками

console.log( // вывести на экран
    require("fs") // объект для работы с файлами
        .readFileSync("setup.cfg", "utf-8") // читаем файл
        .split(/\n|\r\n/) // разбиваем на массив из строк файла
        .filter(line => line.startsWith('[')) // берём только с атрибутами
        .map(line => line.slice(1,line.length-1)) // без скобок
        .sort() // отсортируем
        .join(", ") // элементы массива в строку
);
    