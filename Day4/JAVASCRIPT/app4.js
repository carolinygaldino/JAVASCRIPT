// Functions

// Learning Objectives:

// - Explore functions and look at how they work
// - incorporate functions into our code
// - recognise the different types of functions syntax

// Declare a function - Arrow function syntax
const greeting = () => {
  console.log("Hello World");
};

// Calling / Invoking a function
greeting();

//light switch example
let lightsOn = false;

const lightSwitch = () => {
  if (lightsOn) {
    lightsOn = false;
    console.log("Lights off!");
  } else {
    lightsOn = true;
    console.log("Lights on!");
  }
};

lightSwitch();
lightSwitch();
lightSwitch();

// Function that take in parameters / arguments

// Parameters are required values that specify when we declare a function

const atm = (accountNumber, amount) => {
  console.log(`Account Number: ${accountNumber}. Amount Withdrawn: ${amount}`);
};

// Calling a function without required parameters will return undefined values
atm();

// Passing Arguments
atm(12345678, 200);

//Global Scope

const name = "Lydia";
const age = 21;
const city = "San Francisco";

// Local scope

const getPersonInfo = () => {
  const name = "Sara";
  const age = 22;
  //const pet = "dog";

  return `${name} is ${age} and lives in ${city}`;
};
console.log(getPersonInfo());
//console.log(dog);

// Functions that call other functions

const timesTen = (num) => {
  return num + 10;
};

const timesTwenty = (num) => {
  return timesTen(num) * 2;
};

// When using return within function we need to call the function
// within a console.log(timesTen(10))

console.log(timesTen(10));

console.log(timesTwenty(10));

// Function Syntax Options

//Arrow Function Syntax
const squaredArrow = (number) => {
  return number * number;
};
console.log(squaredArrow(5));

//Function declaration
function squaredDeclaration(number) {
  return number * number;
}

console.log(squaredDeclaration(10));

// "Anonymous" function
const sqauredAnon = function (number) {
  return number * number;
};
console.log(sqauredAnon(3));
