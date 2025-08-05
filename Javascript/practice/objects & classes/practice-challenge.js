// Task 1: Warm up

let person = {
  firstname: "KK",
  lastname: "Lou",
  age: 25,

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },

  set fullname(value) {
    const parts = value.split(" ");
    this.firstname = parts[0];
    this.lastname = parts[1];
  }
};

console.log(person.fullname); 
person.fullname = "Sara Ali";
console.log(person.firstname); 
console.log(person.lastname); 

// Task 2

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(otherPerson) {
    if (otherPerson.age > this.age) {
      return `${otherPerson.name} is older than me.`;
    } else if (otherPerson.age < this.age) {
      return `${otherPerson.name} is younger than me.`;
    } else {
      return `${otherPerson.name} is the same age as me.`;
    }
  }
}

let p1 = new Person("Samuel", 24);
let p2 = new Person("Joel", 36);
let p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2)); 
console.log(p2.compareAge(p1)); 
console.log(p1.compareAge(p3)); 

// Task 3
function mostOccurred(arr) {
  let counts = {};
  let maxCount = 0;
  let mostFrequent;

  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mostFrequent = num;
    }
  }

  return mostFrequent;
}

console.log(mostOccurred([4, 2, 2, 7, 2])); 
