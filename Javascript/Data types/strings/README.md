# String

- It represent any text value, enclosed in quotes.
- It's used for displaying text , storing names, and manipulating text content.
- It's used whenever you need to show text on scren, store user input, or work with text data.

### how

```javascript
let name = "Oumi";
let message = "Hello there";
const welcom = " welcome to my github 😊'
```

 **1 - string concatenation (combining strings)**

Use + opertator to join two or more strings

```javascript
let firstName = 'oum';
var lastName = 'bass';
const fullName = firstName + " " + lastName;
fullName; // output: oum bass
```
**2 - String length**

Use the lenght property to get the number of characters in a string 

```javascript
const message = "hi there";
const messageLenght = message.length;
messageLenght;  // output : 8 

```

**3 - accessing individual characters**

Use bracket notation with the character's index (position) in the string

```javascript
const word = "javascript"
let firstChar = word[0]; // "j"
let secondChar = word[1]; // "a"
```