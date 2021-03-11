var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {    
    let n = parseInt(lines[0]);
    console.log(lines
        .splice(1)
        .map(item => item.split(';'))
        .sort((a,b) => +(b[1]) - +a[1])[n-1][0]);
});


/*
1
C++;2.49
PHP;8.7
JavaScript;4.44
Visual Basic;8.52
Perl;10.99
SQL;1.9
Objective-C;0.66
Groovy;4.92
Java;5.32
MATLAB;10.38
Swift;6.0
Ruby;11.49
PL/SQL;1.24
R;7.21
Go;9.54
Python;6.72
C;0.7
Assembly language;8.55
C#;11.6
Classic Visual Basic;7.61

*/


