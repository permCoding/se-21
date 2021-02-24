// можно к типу данных добавить свой метод через прототипирование
// прототипы не поддерживают стрелочные функции
// можно назначить именованные или анонимные функции

function rev_string() {
    return this.split('').reverse().join('');
}

String.prototype.reverse_string_1 = rev_string;

String.prototype.reverse_string_2 = function () {
    return this.split('').reverse().join('');
};

// let s = new String('Python');
let s = 'Python';

console.log(s.reverse_string_1());
console.log(s.reverse_string_2());
