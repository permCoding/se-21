const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Ctrl-D for EXIT in Linux');
console.log('Ctrl-C for EXIT in Windows');
console.log("- введите целое число");
process.stdout.write('> ');

let num;

rl.on('line', function(line){
    num = Number(line);
}).on('close', () => {
    console.log("это число " + ["чётное", "нечётное"][num%2]);
});
