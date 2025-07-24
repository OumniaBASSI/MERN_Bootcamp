# Parameters  

- Parameters are the inputs that your function instructions depend on to execute.
- We declare parameters in our functions when their instructions depend on values from outside the function.

## how
```javascript
// declaring a function that takes two numbers 
// and displays their sum
function add(a, b) {
    console.log(a + b);
}

// declaring a function that takes the width & height of a rectangle
// and displays the area of the rectangle
function greeting(name) {
    console.log('Hello ' + name);
}
```
To call a function that requires parameters you have to specify the values inside parenthesis: 

```javascript
let v1 = 5;
let v2 = 10;
let username = "Arkadian"

add(v1, v2) // equivalent to add(5, 10) which gives 15
add(3, 1) // 4
greeting("John") // Hello John
greeting(username) // Hello Arkadian
```

# Return  
Returning a value from a function is like getting your coffee from the machine. Without the "return" statement, the function makes the coffee but keeps it to itself! With "return", you can finally grab your delicious drink and enjoy your program's full potential.

- Sharing results
- Building complex logic
- Creating reusable functions

## WHEN WE USE IT
- Functions that calculate values: Use return to send the calculated result, like the total price after applying a discount.

Functions that retrieve data: Use return to send back the requested information, like fetching user data from a database.

Functions that perform actions: Use return to indicate the action's completion or any relevant result, like returning "true" if a login is successful.

## HOW

```javascript
function calculateTotal(price, discount) {
  const total = price - discount;
  return total; // Sending back the calculated price
}

const finalPrice = calculateTotal(100, 10); // Calling the function
console.log("Your final price is:", finalPrice); // Output: "Your final price is: 90"
```
```
side note

You can only use return once in a function.

If you don't use return, the function will return undefined by default.
```