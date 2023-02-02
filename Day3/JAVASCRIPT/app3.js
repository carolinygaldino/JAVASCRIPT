// Arrays & Loops:

// Learning Objectives:

//  what an array is
// explore how array can be used
// make use of array methods
//explore loops and integrate them into your code.

let coffeeOrder = ["James - Americano", "Hannah - Frappuccino", "Alex - Latte"];
// log the array to the console
console.log(coffeeOrder);

// log the specific array item
console.log(coffeeOrder[1]);

// change a value of an array Item
coffeeOrder[1] = "Hannah - Tea";

console.log(coffeeOrder);

//Ehen using the lenght property with as array it will return the number or array
//Array Property
console.log(coffeeOrder.length);

//Array Methods
coffeeOrder.push("Christian - Water");
console.log(coffeeOrder);

coffeeOrder.pop();
console.log(coffeeOrder);

// Loops

let colours = ["Blue", "Green", "Red", "Yellow", "Orange", "Black"];

console.log(colours);

//console.log(colours[0]);
//console.log(colours[1]);
//console.log(colours[2]);
//console.log(colours[3]);
//console.log(colours[4]);
//console.log(colours[5]);

// For Loop
for (let i = 0; i < colours.length; i++) {
  console.log(colours[i]);
}

// Multiples pf two - For Loop

// Declare an empty array
let multipleTwo = [];
for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    multipleTwo.push(i);
  }
}

console.log(multipleTwo);

// While Loop
// Runs constinuosly whilist the specified condition is true
let number = 0;

while (number < 10) {
  console.log(number);
  number++;
}

// Do While Loop

// Checks the conditions after the code has run
// Therefore will always run at least once

let x = 5;
let y = 0;

do {
  x = x + y;
  console.log(x);
  y++;
} while (y < 10);

// While Loop Example 2

let cards = ["Diamonds", "Spade", "Club", "Heart"];
let currentCard = "Club";

while (currentCard !== "Spade") {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log(currentCard);

// TASKS

//1 add items to an existing array and loop through the items

let films = ["Fight Club", "No country For ", "Money ball"];

films.push("Snatch", "Whiplash");
console.log(films);

for (let i = 0; i < films.length; i++) {
  console.log(films[i]);
}

// 2 : generate numbers

//for (let i = 0; i < 10; i++) {
// let randomNumber = Math.round(Math.random() * 100) + 1;
// console.log(randomNumber);
//}

// 3 create a loop

//for (let i = 20; i > 0; i--) {
// console.log(i);
//}

// 4 5 random numbers btw 1-50.

for (let i = 0; i < 5; i++) {
  let randomNumber = Math.round(Math.random() * 50) + 1;
  if (randomNumber % 5 === 0) {
    console.log(`${randomNumber} Is divisible by 5`);
  } else {
    console.log(`${randomNumber} Is NOT divisible by 5`);
  }
}
