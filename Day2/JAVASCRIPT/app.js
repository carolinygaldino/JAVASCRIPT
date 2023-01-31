// Conditions in JS //

// Weather If/ Else example

let weather = "Foggy";
if (weather == "Sunny") {
  console.log("Grab a pair of sunglasses !");
} else if (weather == "Rain") {
  console.log("Bring your umbrella!");
} else {
  console.log("Unsure, maybe bring a hoodie.");
}

let trafficLight = "Green";

//if (trafficLight === "Red" || trafficLight === "Amber") {
// console.log("Stop!");
//} else {
// console.log("Go!");
//}

if (trafficLight !== "Green") {
  console.log("Stop!");
} else {
  console.log("Go!");
}

//Switch Statements
// Alternative to IF/ Else
// Commonly used when checking a condition against multiple arguments

let day = "sunday";

switch (day) {
  case "Monday":
    console.log("Weekend is over! Happy Monday!");
    break;

  case "Tuesday":
    console.log("Second day of the week!");
    break;

  case "Wednesday":
    console.log("Halfway through the week!");
    break;

  case "Thursday":
    console.log("It's almost Friday!");
    break;

  case "Friday":
    console.log("Happy Friday!");
    break;

  default:
    console.log("It's the weekend!");
}

//switch Statement - Grades Example

let testScore = 75;

switch (true) {
  case testScore >= 70:
    console.log("Distinction");
    break;

  case testScore >= 60:
    console.log("Merit");
    break;

  case testScore >= 50:
    console.log("Pass");
    break;

  default:
    console.log("Fail");
}

// Ternary Operator
// Shorthand conditional statement
// condition? what you want to run if condition true : what you run if condition false

let score = 40;
score >= 50 ? console.log("You Win !") : console.log("You Lose!");

//Numbers Example IF /Else
// Check wheter a number is between 5 and 10

let num1 = 11;
if (num1 >= 5 && num1 <= 10) {
  console.log(`${num1} is between 5 and 10`);
} else {
  console.log(`${num1} is NOT between 5 and 10.`);
}
// TASKS
//1//

let age = 15;
if (age < 18) {
  console.log("Sorry, I can't serve you");
} else {
  console.log("No problem, what would you like to drink?");
}

//2//

let Password = [9];
if (Password >= 8 && Password <= 8) {
  console.log("valid");
} else {
  console.log("invalid");
}

//3//
