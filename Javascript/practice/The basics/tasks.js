/*
Task 1 :  Warm up

    Declare the following variables : 

    firstname : a variable containing your first name.

    lastname : a variable containing your last name.

    PI : a constant containing the PI value 3.14.  

    radius : a variable that contains a random number of your choice.

    favoriteSuperhero :  a variable containing the name of your super hero.

    favoriteQuote : a variable containing your favorite quote (ex: Difficult roads often leads to beautiful destinations)
*/

let firstName = "oumi";
let lastName = "bass";

const pi = 3.14;
let radius = 5;
let favoriteSuperhero = "catwoman"
let favoriteQuote = "nothing changes if nothing changes";

/*

Task 2 :  Speed run

 1 - Tell Your name: 

    Make a variable that contains your full name that begins with your first name then the last name.

 2- Maths: 

    Using radius and PI, make a variable that contains the area of a circle having this radius value, and another one containing the perimeter.
    area=πr 
    perimeter=2πr

 3 - Motivation:

    Using favoriteSuperhero and quote, declare a variable called motivation and give it the following value :

 4 -Copy
    A wise man named <favoriteSuperhero>: "<quote>"
*/

let fullName = `${firstName} ${lastName}`

let area = pi * radius * radius;
let perimeter = 2* pi * radius;

let motivation = "a wise man named" + favoriteSuperhero + ": " + favoriteQuote;

/*
Task 3 :  Variable swap
The following snippet has two variables a and b, your goal is to swap the values of those variables :
*/

let a = 3;
let b = 10;


let c = a;
a = b;
b = c;

/* destructuring assignment
    [a, b] = [b, a];
    without using a third variable
*/ 


console.log("After swapping: a = ", a, " and b = ", b); // should output: After swapping: a = 10 and b = 5






