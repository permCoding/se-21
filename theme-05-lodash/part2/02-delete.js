// DELETE
// _.remove() и _.pullAt() - мутабельные

const ut = require('./ut01');
const _ = require('lodash');

/**
 * удалить 1 элемент из массива
 * @param {String[]} arr массив 
 * @param {String} name имя куратора 
 * @return {void} ничего не возвращает
 */
 function del_one(arr, name) {
    console.log(arr);
    console.log('= '.repeat(12));
    
    let index = _
        .findIndex(arr, item => item.nameCur == name);
    let obj = _.pullAt(arr, index);
    
    console.log(arr);
    console.log('= '.repeat(12));
    console.log(obj); // тут кто был удалён
    console.log('= '.repeat(12));
}

/**
 * удалить все элементы
 * @param {String[]} arr массив 
 * @param {String} name имя куратора 
 * @return {void} ничего не возвращает
 */
function del_all(arr, /**String*/ name) {
    console.log(arr);
    console.log('= '.repeat(12));

    let new_arr = _
        .remove(arr, item => item.nameCur == name);

    console.log(arr);
    console.log('= '.repeat(12));
    console.log(new_arr); // тут кто был удалён
    console.log('= '.repeat(12));
}


let array = ut.csv_to_json('./csv/curators.csv');

let nameCurator = 'Ухова'; // DELETE

del_one(array, nameCurator);

// del_all(array, nameCurator);


// = = = = = = = = = = = = = = 

// ver imperative
// если нужно удалить всех с такой фамилией, то break убрать
// for (let i = 0; i<array.length; i++) {
// 	if (array[i].nameCur == nameCurator) {
// 		array.splice(i, 1);
// 		break; 
// 	}
// }
// console.log(array);
