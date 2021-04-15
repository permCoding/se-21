-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 08 2021 г., 21:15
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
-- База данных: `soft0015_faculty`
--

-- --------------------------------------------------------

--
-- Структура таблицы `abiturs`
--

CREATE TABLE `abiturs` (
  `id` int NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `rating` int NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `date` date NOT NULL,
  `city` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `abiturs`
--

INSERT INTO `abiturs` (`id`, `lastName`, `rating`, `gender`, `date`, `city`) VALUES
(1, 'Мишкин', 217, 1, '2002-08-23', 'Кунгур'),
(2, 'Бортич', 224, 0, '2002-06-03', 'Лысьва'),
(3, 'Деревянко', 182, 0, '2002-02-20', 'Оса'),
(4, 'Столбова', 194, 0, '2003-01-22', 'Кунгур'),
(5, 'Хомич', 205, 0, '2002-04-23', 'Кунгур'),
(6, 'Круглов', 191, 1, '2002-04-23', 'Березники'),
(7, 'Иванов', 192, 1, '2002-05-17', 'Кунгур'),
(8, 'Петров', 191, 1, '2002-11-25', 'Кунгур'),
(9, 'Сидоров', 196, 1, '2004-01-20', 'Кунгур'),
(10, 'Капустин', 196, 1, '2002-06-04', 'Кунгур'),
(11, 'Томатова', 201, 0, '2003-04-16', 'Кунгур'),
(12, 'Ежова', 214, 0, '2001-10-07', 'Лысьва'),
(13, 'Микова', 222, 0, '2001-10-07', 'Пермь'),
(14, 'Мамин', 199, 1, '2001-11-10', 'Пермь'),
(15, 'Комов', 195, 1, '2002-01-17', 'Пермь');

-- --------------------------------------------------------

--
-- Структура таблицы `curators`
--

CREATE TABLE `curators` (
  `id` int NOT NULL,
  `nameCur` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `curators`
--

INSERT INTO `curators` (`id`, `nameCur`) VALUES
(1, 'Мухин'),
(2, 'Ухова'),
(3, 'Ухова'),
(4, 'Ляскин'),
(5, 'Дуров'),
(6, 'Нектов'),
(7, 'Ктотов'),
(8, 'ЕщёОдин'),
(9, 'Второй');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `abiturs`
--
ALTER TABLE `abiturs`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `curators`
--
ALTER TABLE `curators`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `abiturs`
--
ALTER TABLE `abiturs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
