# Truthy vs Falsy

- Every value in JS is inherently assiciated with a boolean truthiness or falsiness. 

- For your code to make conditional decisions, truthy and falsy values are essential. By enabling you to determine whether a value is true or false, they aid in program flow control by letting you run various code paths depending on these conditions.

- You encounter truthy and falsy values whenever you use conditions in your code

## how

### Falsy Values

*JavaScript treats the following types of values as falsy:*
  * **Empty Strings :** `""`, `''`, ` `` `
  * **Number 0 :** `0`
  * **NaN :** `NaN` (Not a Number)
  * **null**
  * **undefined**
  * **false**

```javascript
if (0){
    // this block will not execute because 0 is falsy
}
```

### Truthy Values

```javascript
if ("Hello") {
    //this block will execute because "hello" is truthy
}
```