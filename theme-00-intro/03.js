function getSort1(items) {
    return items
        .sort((a, b) => a - b);
}

function getSort2(items) {
    return items
        .slice() // сделать копию
        .sort((a, b) => a - b);
}

const arr = [9, 0, 66, 4, 4];

// const позволяет только сделать запрет 
// на новое присваивание в эту переменную
// arr = [7, 5, 4, 5, 0];

// но менять можно
arr.pop();
arr.push(10);

// console.log(getSort1(arr));
console.log(getSort2(arr));
console.log(arr); // массив стал отсортированным
