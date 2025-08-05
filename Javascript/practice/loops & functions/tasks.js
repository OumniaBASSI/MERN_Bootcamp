/*Task 1 : Going back in Time !*/

// factorila
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// console.log(factorial(5)); 

// digitnumber function

function digitnumber(number){
    let digit = (number === 0) ? 1 : 0;
    number = Math.abs(number)

    while (number !== 0){
        number = Math.floor(number / 10);
        digit++
    }
    return digit
}

// number ToDay

function numberToDay(number) {
  switch (number) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day number";
  }
}

// console.log(digitnumber(80085))

//max
function maxOfThree(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (b > c) {
            return b;
        } else {
            return c;
        }
    }
}

// greades 
function getGrade(score) {
    if (score > 85) {
        return "Grade is A";
    } else if (score > 70) {
        return "Grade is B";
    } else if (score > 55) {
        return "Grade is C";
    } else if (score > 40) {
        return "Grade is D";
    } else if (score > 15) {
        return "Grade is E";
    } else {
        return "Grade is F";
    }
}

/*Task 2 : The Extended Factorial*/
function combinator(n, p) {
    if (p > n || n < 0 || p < 0) {
        return "Invalid input";
    }
    return factorial(n) / (factorial(p) * factorial(n - p));
}

// console.log(combinator(5, 2));

/*Task 3 :  The Calculator*/

function calculator(a, operator, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Cannot divide by zero";
        case "%":
            return a % b;
        case "c":
        case "C":
            return combinator(a, b);
        default:
            return "Invalid operator";
    }
}

// console.log(calculator(5, "+", 1)) 
// console.log(calculator(3, "*", -4) ) 
// console.log(calculator(5, 'c', 2)) 

