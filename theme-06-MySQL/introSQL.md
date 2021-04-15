# SQL

Будем использовать MySQL 8  
Документация [MySQL 8](https://dev.mysql.com/doc/refman/8.0/en/sql-data-manipulation-statements.html)  

## Введение в язык структурированных запросов SQL

Предполагается, что данные распределены по таблицам и могут иметь логические связи между полями таблиц.  

Синтаксис SQL включает несколько категорий команд, основные из них:  

1) DDL – язык определения данных (Data Definition Language) - для декларации структуры таблиц;  
2) DML – язык манипулирования данными (Data Manipulation Language)- для изменения записей в таблицах;  
3) DQL – язык запросов (Data Query Language) - для выборки данных из таблиц;  
4) DCL – язык управления данными (Data Control Language) - для управления доступом к таблицам.  

Начальный уровень подготовки по реляционным базам данных можно ограничить:  
Подмножеством команд DQL:  
SELECT  
Подмножеством команд DML:  
INSERT, UPDATE, DELETE  
Подмножеством команд DDL:  
CREATE TABLE, ALTER TABLE, DROP TABLE, CREATE INDEX, ALTER INDEX, DROP INDEX  

Примеры команд:

```SQL
CREATE TABLE `students` (
  `id` int NOT NULL,
  `nameStud` varchar(20) NOT NULL,
  `rating` int NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `date` date NOT NULL,
  `city` varchar(20) NOT NULL
);
```

```SQL
ALTER TABLE `students`
ADD PRIMARY KEY (`id`);

ALTER TABLE `students`
MODIFY `id` int NOT NULL AUTO_INCREMENT;
```

```SQL
CREATE TABLE `soft0015_faculty`.`abiturs` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `lastName` VARCHAR(20) NOT NULL , 
    `rating` INT NOT NULL , 
    `gender` BOOLEAN NOT NULL DEFAULT TRUE , 
    `date` DATE NOT NULL , 
    `city` VARCHAR(20) NULL , 
    PRIMARY KEY (`id`)) 
    ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_unicode_ci;
```

```SQL
INSERT INTO `students` 
(`id`, `nameStud`, `rating`, `gender`, `date`, `city`) 
VALUES (NULL, 'Сидоров', '207', '1', '2002-08-03', 'Кунгур');
```

```SQL
INSERT INTO `students` (`nameStud`, `rating`, `gender`, `date`, `city`) 
VALUES 
    ('Сидоров', '207', '1', '2002-08-03', 'Кунгур');
```

```SQL
INSERT INTO `students` (`nameStud`, `rating`, `gender`, `date`, `city`) 
VALUES
    ('Хомич', 207, 0, '2002-04-23', 'Кунгур'),
    ('Ежова', 212, 0, '2001-10-07', 'Лысьва');
```

```SQL
INSERT INTO `students` (`nameStud`, `rating`, `gender`, `date`, `city`) 
VALUES
    ('Мишкин', 217, 1, '2002-08-23', 'Кунгур'),
    ('Бортич', 224, 0, '2002-06-03', 'Лысьва'),
    ('Деревянко', 182, 0, '2002-02-20', 'Оса'),
    ('Столбова', 194, 0, '2003-01-22', 'Кунгур'),
    ('Хомич', 205, 0, '2002-04-23', 'Кунгур'),
    ('Круглов', 191, 1, '2002-04-23', 'Березники'),
    ('Иванов', 192, 1, '2002-05-17', 'Кунгур'),
    ('Петров', 191, 1, '2002-11-25', 'Кунгур'),
    ('Сидоров', 196, 1, '2004-01-20', 'Кунгур'),
    ('Капустин', 196, 1, '2002-06-04', 'Кунгур'),
    ('Томатова', 201, 0, '2003-04-16', 'Кунгур'),
    ('Ежова', 214, 0, '2001-10-07', 'Лысьва'),
    ('Микова', 222, 0, '2001-10-07', 'Пермь'),
    ('Мамин', 199, 1, '2001-11-10', 'Пермь'),
    ('Комов', 195, 1, '2002-01-17', 'Пермь');
```

```SQL
SELECT * FROM `students` WHERE `gender` = true
```

```SQL
UPDATE `students` SET `rating`=200 WHERE `nameStud`="Ежова";
```

```SQL
DELETE FROM `students` WHERE `rating` < 202;
```

```SQL
SELECT `nameStud`, `rating`, `city` FROM `students` ORDER BY `rating` DESC;
```

```SQL
SELECT `city`
FROM `students`
GROUP BY `city` 
ORDER BY `city` ASC;
```

```SQL
SELECT 
    `city`,
    COUNT(*) AS amount
FROM `students`
GROUP BY `city` 
ORDER BY `city` ASC;
```

```SQL
SELECT 
    `city`,
    COUNT(*) AS amount
FROM `students`
GROUP BY `city` 
ORDER BY `amount` DESC;
```

```SQL
SELECT 
    `date`,
    COUNT(*) AS amount 
FROM `students` 
GROUP BY `date` 
HAVING `amount` > 1;
```

```SQL
ALTER TABLE `groups` 
ADD FOREIGN KEY (`idCur`) 
REFERENCES `curators`(`id`) 
ON DELETE RESTRICT 
ON UPDATE RESTRICT;
```
