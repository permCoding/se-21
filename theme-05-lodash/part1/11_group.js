// _.groupBy() - группировка и сортировка по признакам

const _ = require('lodash');

let names = ['Николай', 'Жора', 'Алексей', 'Алла'];


let groups = _.groupBy(names, x => x.length);
console.log(groups);


_.map(groups, group => group.sort((a,b)=> a<b?-1:1));
console.log(groups);


console.log(Object.keys(groups));

let arr = _.zip(Object.keys(groups), Object.values(groups));
console.log(arr);

let sorted = _(arr)
    .orderBy([0], ['desc']);
sorted.forEach(x => console.log(x));


let sorted2 = _(groups)
    .toPairs()
    .orderBy([0], ['desc']);
    // .fromPairs()
    // .values();

sorted2.forEach(x => console.log(x));
