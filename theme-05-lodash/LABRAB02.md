## LABRAB02

ЛАБРАБ-02 - 18,25.03.21  
_deadline 27.03.21 24:00_  
**Тема "Обработка данных - lodash"**  

---  
---  

**Задания для самостоятельного исполнения**  
Программные решения выполнить с использованием библиотеки **lodash**.  

---  

**Задание 1**  
В этой задаче мы будем рассматривать [рейтинг Standard&Poor's](https://www.standardandpoors.com/ru_RU/web/guest/article/-/view/sourceId/504352).  
Пусть вот так выглядит отсортированный по убыванию рейтинг (для наглядности - в столбик):  
```
AAA
AA+
AA
AA-
A+
A
A-
BBB
BB+
BB
BB-
B+
B
B-
CCC+
CCC
CCC-
CC
C
D
```

На вход подаётся одна строка, в которой дан неотсортированный список рейтингов.  
Некоторые могут отсутствовать или встречаться более одного раза.  
Отсортируйте его по убыванию и выведите в одну строку через пробел.  

Пример входной строки:  
```
AA+ AA- B- BB A CCC- A- BB- AAA AA BBB D CCC CC C  
```

Пример вывода:  
```
AAA AA+ AA AA- A A- BBB BB BB- B- CCC CCC- CC C D  
```

Вот ещё примеры ввода для проверки работоспособности программы:  
```
AA- AAA CC C A- CCC- CCC B- BB+ BB D B AA A AA+  
CCC+ CC CCC- A- BB- A B AA+ CCC BB+ AAA D C AA B+  
BB B BB+ CCC+ CCC- A- AAA BB BB+ AA- BB- AA B+ BBB C CCC D  
```

---  

**Задание 2**  

**На вход** подаются две строки:  
- неотсортированный список рейтингов (через пробел);  
- соответствующий ему список стран (через пробел).  

Оба списка имеют одинаковую длину L в диапазоне [10; 30].  
Отсортируйте страны по убыванию рейтинга.  

На выход подайте список рейтингов и названий стран **в столбик по убыванию рейтинга**, при одинаковом рейтинге страны сортировать **по алфавиту по возрастанию**. Данные про каждую страну выводить в отдельной строке через пробел:  
```
рейтинг название
```

Небольшой отрезок корректного вывода:
```
B+ Barbados
B+ USA
B Belarus
B Haiti
B Peru
B- Oman
```



Примеры ввода для проверки работоспособности программы:  
```
Пример 1  
B+ B B AA+ C AA- BB+ CCC+ A A+  
Barbados Belarus Haiti Italy Spain Iran Egypt Kenya Canada Kazakhstan  

Пример 2
B+ B B AA+ C AA- BB+ CCC+ A A+ CCC AAA A AA BB A B- BBB B CC BBB B+ A-  
Barbados Belarus Haiti Italy Spain Iran Egypt Kenya Canada Kazakhstan China Korea Latvia Malta Morocco Namibia Oman Pakistan Peru Poland Portugal USA Japan  

Пример 3
AAA AA+ AA AA- A+ A A- BBB BB+ BB BB- B+ B B- CCC+ CCC CCC- CC C D BB BB BB  
Barbados Belarus Haiti Italy Spain Iran Egypt Kenya Canada Kazakhstan China Korea Latvia Malta Morocco Namibia Oman Pakistan Peru Poland Portugal USA Japan
```  

