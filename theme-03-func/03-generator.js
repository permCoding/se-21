// пример генератора
// это особым образом оформленная функция
// она запоминает состояние цикла - на какой итерации он остановился
// yield - аналог return`а - он возвращает значение и запоминает состояние
// при следующем обращении к функции-итератора - цикл продолжится от точки останова

function* gen1(a, b) {
	let i = a;
	while (i <= b) {
		yield i;
		i++;
	}
}

function* gen2(a, b) {
	for (let i = a; i <= b; i++) {
		yield i;
	}
}

let sequence = [...gen1(10, 15)];
console.log(sequence);

for (let item of [...gen2(10, 15)]) {
	console.log(item);
}

let generator = gen1(10, 15);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
let obj = generator.next();
console.log(`  value: ${obj.value}, done: ${obj.done}`);
console.log(generator.next());
console.log(generator.next());

// опасный код
generator = gen1(100, 105);
let acc = 0;
do {
	acc += 0 | Number(obj.value); // используется ранее существовавший объект
	console.log(acc); // для контроля - значение объекта obj исказит результат
	obj = generator.next();
} while (!obj.done);
console.log(acc);

generator = gen1(100, 105); // нужно снова инициализировать генератор
while (true) {
	obj = generator.next();
	if (obj['done']) break;
	process.stdout.write(obj.value + ' ');
};
