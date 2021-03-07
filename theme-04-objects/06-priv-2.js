// приватное

class Student {
    #name = '';
    constructor(line) {
        this.#name = line;
    }    
    set_name(line) {
        this.#name = line.trim();
    }
    get_name() {
        return this.#name;
    }
}


let stud = new Student('Петрович');
console.log(stud);
console.log(stud.get_name());

stud.set_name(' Петро ');
console.log(stud);
console.log(stud.get_name());

stud.#name = ' Петро '; // так не работает - private
console.log(stud);
