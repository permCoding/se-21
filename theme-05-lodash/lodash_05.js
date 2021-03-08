const ut = require('./utils');
const _ = require('lodash');

students = ut.csv_to_json('students.csv');
merge = ut.csv_to_json('merge.csv');
hobby = ut.csv_to_json('hobby.csv');

/*
	- запрос типа SELECT
	- эмуляция связи многие-ко-многим
	- выбрать все хобби определённого студента
	- это пример из БД Access (саму базу с таблицами и запросом смотрите в репозитории):
SELECT Students.nameStudent, Hobby.nameHobby
FROM Students INNER JOIN
(Hobby INNER JOIN merge
ON Hobby.idHobby = merge.idHobby)
ON Students.idStudent = merge.idStudent
WHERE (((Students.nameStudent)="Сидов"));

	- итак, что нужно сделать для реализации такого запроса:
1) найти строку в таблице Студенты и узнать id студента
2) выбрать из таблицы связей только записи с этим id
3) формируем из этих записей массив id-шек увлечений
4) выбрать из таблицы hobby увлечения по найденным id-шкам
5) отобранные увлечения вывести на экран
*/

name = 'Сидов';
idSt = _.find(students, obj => obj.nameSt == name).id; // 1) узнать id студента
arrayFromMerge = _.filter(merge, ['idStudent', idSt]); // 2) второй аргумент - это условие отбора - имя поля объекта и искомое значение
arrayIdHobby = _.map(arrayFromMerge, obj => obj.idHobby); // 3) отбираем id-шки увлечений
arrayHobby = _.filter(hobby, obj => arrayIdHobby.includes(obj.id)); // 4) отбираем сами названия увлечений
console.log(name, ':', arrayHobby.map(obj => obj.name).join(', ')); // 5) вывести на экран


// этот вывод для контроля
// console.log(idSt);
// console.log(arrayFromMerge);
// console.log(arrayIdHobby);
// console.log(arrayHobby);
