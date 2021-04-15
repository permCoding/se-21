const mysql = require("mysql2"); // npm i mysql2


const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "decan",
    password: "0000",
    database: "decan_faculty"
}).promise();

let query1 = "SELECT * FROM students";

let query2 = "SELECT `edusubjects`.`nameSubject`, `students`.`lastName`, `marks`.`mark` \
FROM `students` \
INNER JOIN `marks` ON `students`.`id` = `marks`.`keyStudent` \
INNER JOIN `edusubjects` ON `edusubjects`.`id` = `marks`.`keySubject` \
ORDER BY `edusubjects`.`nameSubject` ASC, `students`.`lastName` ASC";

let query3 = "SELECT `students`.`lastName`, ROUND(AVG(`marks`.`mark`),2) AS avg \
FROM `students` INNER JOIN `marks` ON `students`.`id` = `marks`.`keyStudent` \
GROUP BY `students`.`lastName` \
HAVING avg < 4.0 \
ORDER BY avg DESC";

let query4 = "SELECT `studygroups`.`nameGroup`, `students`.`lastName` \
FROM `students`, `studygroups` \
WHERE `studygroups`.`nameGroup` = 'ПИб-1' AND `studygroups`.`id` = `students`.`keyGroup` \
ORDER BY `students`.`lastName`";

conn
    .query(query1)
    .then(([rows]) => console.table(rows))
    .catch((err) => { console.error(err) })
    .then(conn.end());
