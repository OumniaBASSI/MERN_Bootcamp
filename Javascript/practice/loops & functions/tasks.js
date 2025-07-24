// Task 1 : Going back in Time !

/* factorial function*/

function factorial(n){
    let result = 1;
    for (let i = 0 ; i <= n; i++) {
        let nbr = n - i ;
        result = result * nbr;
    }
    return result;
}

console.log(factorial(5));




