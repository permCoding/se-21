// асинхронное чтение

console.log('+ + +');

require("fs") // объект для работы с файлами
    .readFile("input.txt", "utf-8", (err, data) => {
        if (err) throw err;
        console.log(data
            .split("\r\n") // разбиваем на массив из строк файла
            .map(line => line.trim()) // уберём лишние пробелы
            .filter(line => !!line) // берём только не пустые
            .map(line => +line) // переводим в числа
            .sort((a, b) => a-b) // сортируем    
        );
    }); // читаем файл

console.log('- - -');
