//Task 1 : Even or Odd

let num = 8;

if (num % 2 == 0){
    console.log('the number is even')
}else {
    console.log('the number is odd')
}

// Task 2 :  Days of the week

var day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}

//Task 3 : Maximum 

let a = -15;
let b = 6;
let c = 2.6;

if ( a > b){
    if ( a > c ) {
        console.log(a);
    } else {
        console.log(c)
    }
}else {
    if (b > c) {
        console.log(b)
    }else{
        console.log(c)
    }
}

//Task 4 : The Teacher

/*
A teacher wants your help to correct the exam papers. Giving the student score, you have to tell the teacher what's the student's grade based on the following conditions : 

    If score is greater than 85 :  grade is A.

    If score is less than or equal 85 and greater than 70 :  grade is B.

    If score is less than or equal 70 and greater than 55 :  grade is C.

    If score is less than or equal 55 and greater than 40 :  grade is D.

    If score is less than or equal 40 and greater than 15 :  grade is E.

    If score is less than or equal 15 :  grade is D.
*/

let score = 83;

if (score > 85 ){
    console.log("grade is A");
}else if (score <= 85 && score > 70 ){
    console.log("grade is B");
}else if (score > 55){
    console.log("grade is C");
}else if (score > 40){
    console.log("grade is D");
} else if (score > 15){
    console.log("grade is E");
}else {
    console.log("grade is D")
}