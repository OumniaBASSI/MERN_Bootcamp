// Task 1 : factorial

let n = 5;
let result = 1;
for (let i = 1; i <= n; i++) {
    result *= i;
}
console.log(result);

// Task 2 : How many digits ?

var num = 123456
let digit = (num === 0) ? 1 : 0;
let num = Math.abs(num);

while (num !== 0) {
    num = Math.floor(num / 10);
    digit++
}
console.log(digit);


// Task 3 :  Time to draw !

let l = 7;


for (let i = 0; i < l ; i++){
    let line = '';
    for(let j = 0 ; j < l - i; j++){
        line += ' ';
    }
    for (let k = 0; k < 2 * i +1; k++){
        line += '*';
    }
    console.log(line);
}
