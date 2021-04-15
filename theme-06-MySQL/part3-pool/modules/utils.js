const fs = require('fs');
const csvjson = require('csvjson');
const fastcsv = require('fast-csv');
const mysql = require("mysql2"); // npm i mysql2
const mysqlp = require("mysql2/promise"); // как промисы

const paramsDB = {
    host: "localhost",
    port: "3306",
    user: "soft0015",
    password: "9LlvnQos",
    database: "soft0015_faculty"
};

function get_connection() {
	return mysql.createConnection(paramsDB);
}

function get_pool() {
	return mysql.createPool(paramsDB);
}

function get_pool_p() {
	return mysqlp.createPool(paramsDB);
}

function csv_to_json(nameFile) {
	let textCSV = fs.readFileSync(nameFile, 'utf-8');
	return csvjson.toObject(textCSV, { delimiter: ',' });
}

function write_to_csv(array, nameFile) {
	let fw = fs.createWriteStream(nameFile);
	fastcsv
		.write(array, { headers: true })
		.pipe(fw);
}

module.exports.get_conn = get_connection;
module.exports.get_pool = get_pool;
module.exports.get_pool_p = get_pool_p;
module.exports.csv_to_json = csv_to_json;
module.exports.write_to_csv = write_to_csv;
