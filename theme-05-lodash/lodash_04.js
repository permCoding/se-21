const ut = require('./utils');
const _ = require('lodash');


array = ut.csv_to_json('students.csv');
let students = _.cloneDeep(array); // ++


// обработка данных в функциональном стиле:

// ex_1
// _
// 	.remove(students, obj => obj.sex == false)
// 	.sort((a,b)=>b.age-a.age)
// 	.map(obj => console.log(obj.nameSt));

// ex_2
// _
// 	.orderBy(students, ['age','nameSt'], ['desc', 'asc'])
// 	.map(obj => console.log([obj.age,obj.nameSt].join('\t')));

// ex_3
_.reverse(
	_.sortBy(
		_.remove(
			students, obj => obj.sex == false
		), obj => obj.age
	)
).map(obj => console.log(obj.nameSt));
