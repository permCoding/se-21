// пусть будет задача про вставку в таблицу множества записей
// эти объекты могут быть получены после парсинга, из csv, из json, ...
// пока будем брать данные из csv-файла

function ex_1(file_csv) {
    console.table(require('./modules/utils')
        .csv_to_json(file_csv)
    );    
}

function ex_2(file_csv) {
    require('fs')
        .readFile(file_csv, 'utf-8', (err, text) => {
            if (err) console.error(err);
            console.table(require('csvjson')
                .toObject(text, { delimiter: ',' })
            );
        });
}

/** https://github.com/request/request-promise */
function ex_3(file_csv) {
    const rp = require('request-promise');
    rp(file_csv)
        .then((text) => console.table(text))
        .catch((err) => console.error(err))
        .finally(() => console.log('\tThe end...'));
}

function ex_4(file_csv) {
    const rp = require('request-promise');
    rp(file_csv)
        .then((text) => console.table(require('csvjson')
            .toObject(text, { delimiter: ',' })))
        .catch((err) => console.error(err))
        .finally(() => console.log('\tThe end...'));
}

function ex_5(file_csv, file_local) {
    require('request-promise')(file_csv)
        .then((text) => require('fs')
            .writeFile(file_local, text, () => ex_1(file_local)));
}

// ex_1('./csv/abiturs.csv');
// ex_2('./csv/abiturs.csv');
// ex_3('https://pCoding.ru/csv/abiturs.csv');
// ex_4('https://pCoding.ru/csv/abiturs.csv');
ex_5('https://pCoding.ru/csv/abiturs.csv', './csv/load.csv');
