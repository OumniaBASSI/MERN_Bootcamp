# Conditional Statements : *Syntax*

# 1. if ... else

- To control flow structure, allows to execute different code blocks based on whether a given condition is true or false.

- Use it when you have a binary condition, and you want yo handle two possible outcomes

- Use it when you need to make decision based on a single condition - u can chnaine multiple else if statments to handle multiple conditions

### how

```javascript
age = 18;

if (age < 18){
    console.log('you are not eligible to purchase this product. Please come back hen you are 18 or older');
} else if (age == 18) {
    console.log("you just turned 78. welcome! you are eligible to purchace this product.");
} else {
    console.log("You are eligible to purchace this product.");
}
```

# 2. Switch statement 
- used to evaluate an expression against multiple possible case values, allowing you to execute diffrent code blocks fo each case.
- provides more redable and efficient way to handle multiple conditions compared to a series of `if ... else` if statements.
- use it when you have a single expression to evaluate  against multiple possible values.

### how

```javascript
let lightColor = "green";

switch (lightColor) {
    case "red":
        console.log("stop!");
        break;
    case "yellow":
        console.log("get ready to go !");
        break;
    case "green":
        console.log("go!");
        break;
    default:
        console.log("invalid traffic light color.")
}
```

`switch`: is the block that evaluates our expression.

`case`: this block puts the equality of the expression to the case value to the test, if evaluated to true the case executes.

`break`: stops the execution of the case after being triggered.

`default`: this  block executes if no case was match.

# 3. Ternary Operator  

- the ternary operator is concise way to write `if ...else` statements in a single line.
- use it when you have a simple condition and want to write more compact code.

## how

```javascript
<condition> ? <action if true> : <action if false>;
```

`Example :`

```javascript
let age = 12;
age >= 18 ? console.log("you are old") : console.log("you are not old enough")
```

