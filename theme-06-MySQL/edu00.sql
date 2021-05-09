-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 16 2021 г., 09:55
-- Версия сервера: 8.0.19
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `edu00`
--

-- --------------------------------------------------------

--
-- Структура таблицы `abiturs`
--

CREATE TABLE `abiturs` (
  `id` int NOT NULL,
  `lastName` varchar(9) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `gender` int DEFAULT NULL,
  `birthDate` varchar(10) DEFAULT NULL,
  `city` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `abiturs`
--

INSERT INTO `abiturs` (`id`, `lastName`, `rating`, `gender`, `birthDate`, `city`) VALUES
(1, 'Мишкин', 217, 2, '2002-08-23', 'Кунгур'),
(2, 'Бортич', 224, 1, '2002-06-03', 'Лысьва'),
(3, 'Деревянко', 182, 1, '2002-02-20', 'Оса'),
(4, 'Столбова', 194, 1, '2003-01-22', 'Кунгур'),
(5, 'Хомич', 205, 1, '2002-04-23', 'Кунгур'),
(6, 'Круглов', 191, 2, '2002-04-23', 'Березники'),
(7, 'Иванов', 192, 2, '2002-05-17', 'Кунгур'),
(8, 'Петров', 191, 2, '2002-11-25', 'Кунгур'),
(9, 'Сидоров', 196, 2, '2004-01-20', 'Кунгур'),
(10, 'Капустин', 196, 2, '2002-06-04', 'Кунгур'),
(11, 'Томатова', 201, 1, '2003-04-16', 'Кунгур'),
(12, 'Ежова', 214, 1, '2001-10-07', 'Лысьва'),
(13, 'Микова', 222, 1, '2001-10-07', 'Пермь'),
(14, 'Мамин', 199, 2, '2001-11-10', 'Пермь'),
(15, 'Комов', 195, 2, '2002-01-17', 'Пермь');

-- --------------------------------------------------------

--
-- Структура таблицы `genders`
--

CREATE TABLE `genders` (
  `id` int NOT NULL,
  `nameGender` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `genders`
--

INSERT INTO `genders` (`id`, `nameGender`) VALUES
(1, 'муж'),
(2, 'жен');

-- --------------------------------------------------------

--
-- Структура таблицы `hobby`
--

CREATE TABLE `hobby` (
  `id` int NOT NULL,
  `nameHob` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `hobby`
--

INSERT INTO `hobby` (`id`, `nameHob`) VALUES
(1, 'футбол'),
(2, 'Dota2'),
(3, 'youtube'),
(4, 'велик'),
(5, 'бокс'),
(6, 'аниме'),
(7, 'туризм');

-- --------------------------------------------------------

--
-- Структура таблицы `merge`
--

CREATE TABLE `merge` (
  `keyStudent` int NOT NULL,
  `keyHobby` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `merge`
--

INSERT INTO `merge` (`keyStudent`, `keyHobby`) VALUES
(1, 2),
(1, 3),
(2, 5),
(2, 7),
(3, 3),
(3, 6),
(5, 5),
(7, 6);

-- --------------------------------------------------------

--
-- Структура таблицы `students`
--

CREATE TABLE `students` (
  `id` int NOT NULL,
  `nameSt` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `keyGr` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `students`
--

INSERT INTO `students` (`id`, `nameSt`, `gender`, `age`, `keyGr`) VALUES
(1, 'Иванов', 1, 22, 1),
(2, 'Петров', 1, 17, 1),
(3, 'Сидов', 1, 17, 2),
(4, 'Ушкина', 0, 22, 3),
(5, 'Берг', 1, 21, 3),
(6, 'Немов', 1, 23, 2),
(7, 'Мамина', 0, 17, 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `abiturs`
--
ALTER TABLE `abiturs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rating` (`rating`),
  ADD KEY `gender` (`gender`);

--
-- Индексы таблицы `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `hobby`
--
ALTER TABLE `hobby`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `merge`
--
ALTER TABLE `merge`
  ADD PRIMARY KEY (`keyHobby`,`keyStudent`),
  ADD KEY `keyStudent` (`keyStudent`);

--
-- Индексы таблицы `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `abiturs`
--
ALTER TABLE `abiturs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `genders`
--
ALTER TABLE `genders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `hobby`
--
ALTER TABLE `hobby`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `genders`
--
ALTER TABLE `genders`
  ADD CONSTRAINT `genders_ibfk_1` FOREIGN KEY (`id`) REFERENCES `abiturs` (`gender`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `merge`
--
ALTER TABLE `merge`
  ADD CONSTRAINT `merge_ibfk_1` FOREIGN KEY (`keyHobby`) REFERENCES `hobby` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `merge_ibfk_2` FOREIGN KEY (`keyStudent`) REFERENCES `students` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
