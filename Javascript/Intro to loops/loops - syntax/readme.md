# loop syntax

## for loop

- tasks with a known number of repitition

    ### how 
    - initialisation :
        set a starting value for your counter
    
    - condition : 
        specify how many times the loops should run 
    - increment :
        chnage the counter's value after each iteration 

    ```javascript
    for (intialisation;condition;update){
        // instructions
    }
    ```
    `Example`

    ```javascript
    for (let i =5; i >= 0; i--){
        console.log(i);
    }
    ```
    ```javascript
    for (var i= 0; i < 100; i+=2>){
        consol.log(i);
    }
    ```

## while loop

- tasks with a known end
- conditional tasks that might not always be true

    ### how
    - Condition :
        This is the question you ask each time. If it's true, the loop continues.
    - Code block :
        This is the action you take if the condition is true.
    
    ```javascript
    while (condition){

    }
    ```

    `Example`

    ```javascript
    let i = 0;
    while (i < 10) {
        console.log('i = ' + i)
        i++;
    }
    ```

## Do. . .While Loop

- Tasks requiring an immediate first step
- Situations where the first run might set the condition for subsequent runs
- Adding an extra layer of security against accidental infinite loops

    ### how

    - Do block:
        This is the code you want to execute at least once, regardless of the initial condition.

    - While condition: 
        This is the map the explorer checks after each run. If it's true, the loop repeats.
    
     ```javascript
     do {

     } while (condition)
     ```
     `Exemple`

     ```javascript
     let number = 1;
     do {
        console.log('HELLO WORLD');
     } while(number === 1)
    ```

```
Side note:
 == (Equality operator — loose equality) --> Checks if two values are equal after type coercion (converts types if needed).

 === (Strict equality operator) --> Checks if two values are equal and of the same type (no type coercion).

```