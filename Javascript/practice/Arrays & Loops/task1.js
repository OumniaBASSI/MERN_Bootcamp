// Task 1 : Speed run !! 

// functions
// 1
let arr = [4, 2, 7];

function sum(numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(arr));   

//2
function countEven(numbers){
    let count = 0;
    for (let i =0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            count++;
        }
    }

    return count;
}

console.log(countEven(arr));

//3

function double(numbers){
    let doubled = [];
    for (let i = 0; i < numbers.length; i++){
        doubled.push(numbers[i] * 2);
    }
    return doubled
}

// console.log(double(arr));

// Task 2 : The pair of socks

function sockMerchant(socks){
    const counts = {};
    let pairs = 0;

    for (let sock of socks){
        if (counts[sock]){
            counts[sock] = counts[sock] + 1 
        }else {
            counts[sock] = 1
        }

        if (counts[sock] % 2 === 0){
            pairs++;
        }
    }

    return pairs
}

console.log(sockMerchant([1, 2, 1, 2, 1, 3, 2]));