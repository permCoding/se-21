# js-lodash
## Функциональная библиотека lodash  

Функциональные библиотеки  
Базовые функции  
Функциональные принципы  
Spread + iterators  
Глубокое клонирование (копии объектов, массивов объектов)  
csv + lodash + эмуляция запросов  

---

Сайт библиотеки: https://lodash.com/  
Документация: https://lodash.com/docs/4.17.15  

---
## FP libraries for JS  
---
Mori  
http://swannodette.github.io/mori  

Immutable.js  
https://immutable-js.github.io/immutable-js/  

Underscore  
http://underscorejs.org  

Lodash  
https://lodash.com  

Ramda  
http://ramdajs.com  

---

* 1) __lodash_**.js__  
сравнение методов - нативных js и их lodash  
разбор внутреннего устройства медов lodash  
_.map, _.filter, _.reduce, ...  

* 2) __lodash_00.js__  
примеры методов из библиотеки lodash  
пример сортировки по двум параметрам  

* 3) __lodash_01.js__  
способы копирования объектов  
способы копирования массивов объектов  

* 4) __lodash_02.js__  
читаем CSV  
способ эмуляции запроса DELETE  
ver.1 - средствами чистого JS  
ver.1 - средствами lodash  

* 5) __lodash_03.js__  
читаем CSV  
копируем массив объектов студентов
делаем запрос на выборку
проверяем чистоту функций (не изменность входного потока данных)

* 6) __lodash_04.js__  
читаем CSV  
копируем массив объектов студентов
сортируем по двум параметрам (с orderBy и с sortBy)

* 7) __lodash_05.js__  
читаем несколько CSV  
	- эмуляция запроса типа SELECT при эмуляции связи многие-ко-многим  
	- ЗАДАЧА: выбрать все хобби определённого студента  
	- вот пример SQL-запроса из БД Access (саму базу с таблицами и запросом смотрите в репозитории):  
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
  


