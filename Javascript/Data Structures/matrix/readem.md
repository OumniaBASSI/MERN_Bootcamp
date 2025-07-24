# Matrix
matrix is two dimensional to store a 2d variable organized in rows and colomns. Each element can be accessed using two indexes: one for the row and one for the column.

## How ?

1. **Creating a matrix :**&#x20;

```javascript
let colors = [
    [255, 0, 0], 
    [0, 255, 0], 
    [0, 0, 255]
]; // This creates a 3x3 matrix with rows of red, green, and blue color values.

const board = [
    ['X', null, 'O'], 
    ['O', 'X', null], 
    [null, 'O', 'X']
]; // This creates a Tic-Tac-Toe
```

2. **Accessing elements:**&#x20;

```javascript
colors[1][2] // Outputs "0"
board[2] // Outputs: [null, 'O', 'X']
```

3. Looping on matrices:

A matrix is just a multi-dimensional array. Therefor, looping on matrices is similar to looping on arrays, except the fact that to get nested elements, you will have to make nested loops.

{% hint style="info" %}
The more dimensions in your matrix, the more nested loops you will need to access all elements. For example: a 5 dimensions matrix will need 5 loops to get to the most nested element.
{% endhint %}

```javascript
for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors[i].length; j++) {
        console.log(colors[i][j]);
    }
}
```
