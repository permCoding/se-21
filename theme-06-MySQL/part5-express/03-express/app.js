// npm i hbs express mysql2 ИЛИ npm i если есть package.json
const mysql = require("mysql2");
const express = require("express");

const pool = mysql.createPool({
    host: "pgsha.ru",
    port: "35006",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_express"    
});

const app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.use('/css', express.static(__dirname + '/css'));
app.set("view engine", "hbs");

/* отобразить абитуриентов */

app.get("/", function(req, res) { // получим список абитуриентов
    let query = "SELECT * FROM abiturs";
    pool.query(query, function(err, data) {
        if (err) return console.log(err);
        res.render("index.hbs", {
            abiturs: data
        });
    });
});

/* добавить нового абитуриента */

app.get("/create", function(req, res) { // добавить абитуриента
    res.render("create.hbs");
});

app.post("/create", urlencodedParser, function (req, res) { // сохранить запись в БД
    if (!req.body) return res.sendStatus(400);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const rating = req.body.rating;
    const city = req.body.city;
    let query = "INSERT INTO abiturs (firstName, lastName, rating, city) VALUES (?,?,?,?)";
    let params = [firstName, lastName, rating, city];
    pool.query(query, params, function(err, data) {
        if (err) return console.error(err);
        res.redirect("/");
    });
});

/* изменить данные абитуриента */

app.get("/edit/:id", function(req, res) {
    const id = req.params.id;
    pool.query("SELECT * FROM abiturs WHERE id=?", [id], function(err, data) {
        if (err) return console.error(err);
        res.render("edit.hbs", {
            abiturient: data[0]
        });
    });
});

app.post("/edit", urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const rating = req.body.rating;
    const city = req.body.city;
    let query = "UPDATE abiturs SET firstName=?, lastName=?, rating=?, city=? WHERE id=?";
    let params = [firstName, lastName, rating, city, id];
    pool.query(query, params, function(err, data) {
        if (err) return console.error(err);
        res.redirect("/");
    });
});

/* удалить запись про абитуриента */ 

app.post("/delete/:id", function(req, res) {
    const id = req.params.id;
    pool.query("DELETE FROM abiturs WHERE id=?", [id], function(err, data) {
        if (err) return console.log(err);
        res.redirect("/");
    });
});

/* отсортировать абитуриентов */

app.get("/sort/:field.:direct", function(req, res) { // получим список абитуриентов
    const field = req.params.field;
    const direct = req.params.direct;
    let query = "SELECT * FROM abiturs ORDER BY " + field + " " + direct;
    pool.query(query, function(err, data) {
        if (err) return console.log(err);
        res.render("index.hbs", {
            abiturs: data
        });
    });
});

app.listen(3000, function() {
    console.log("смотрим работу через браузер - http://localhost:3000/");
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+C": "Ctrl+D"; // Windows / Linux
    console.log(`остановить сервер - ${hotKeys}`);
});
