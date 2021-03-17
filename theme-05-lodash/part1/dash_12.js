// из объекта в массив

const _ = require('lodash');

let obj = {"red": 12, "green": 15, "blue": 2};


let arr = _.map(_.toPairs(obj), d => _.fromPairs([d]));

console.log(arr);

