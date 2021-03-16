const fs = require('fs');
const csvjson = require('csvjson'); // npm install csvjson
const fastcsv = require('fast-csv'); // npm install fast-csv


class Hobby {
	constructor(id, name){
		this.id = +id;
		this.name = name;
	}
}

function csv_to_json(nameFile, del = ',') {
	let textCSV = fs.readFileSync(nameFile, 'utf-8');
	return csvjson.toObject(textCSV, { delimiter: del });
}

function write_to_csv(array, nameFile) {
	let fw = fs.createWriteStream(nameFile);
	fastcsv
		.write(array, { headers: true })
		.pipe(fw);
}


module.exports.csv_to_json = csv_to_json;
module.exports.write_to_csv = write_to_csv;
module.exports.Hobby = Hobby;
