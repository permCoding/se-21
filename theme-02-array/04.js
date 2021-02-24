// some every keys includes slice splice indexOf findIndex

let arr = [0, 2, 4, 6, 8, 9];

console.log('some =', arr.some(x => x%2 != 0));
console.log('every =', arr.every(x => x%2 != 0));

console.log(arr.keys()); // итератор
// бывают ещё генераторы - это в другой раз ;)

for (let key of arr.keys()) {
    console.log(`key = ${key}, value = ${arr[key]}`);
}


console.log(arr.includes(4));
console.log(arr.includes(5));
console.log(arr.indexOf(4));
console.log(arr.findIndex(x => (x%3 == 0) && (x > 0)));

console.log(arr.slice(1,3));
console.log(arr.splice(1,3));
console.log(arr);
