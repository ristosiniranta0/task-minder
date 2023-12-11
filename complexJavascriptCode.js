/* 
Filename: complexJavascriptCode.js
Content: Complex Javascript Code
*/

// Class definition
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate objects
const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Smith");

// Generate random number function
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Array operations
const numbers = [2, 5, 8, 11, 14, 17];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const average = sum / numbers.length;

const evenNumbers = numbers.filter(num => num % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 !== 0);

// Recursive function
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Promises and async/await
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function performAsyncTask() {
  try {
    console.log("Async task started...");

    await delay(2000);
    console.log("First part completed.");

    await delay(3000);
    console.log("Second part completed.");

    await delay(1000);
    console.log("Async task finished.");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

performAsyncTask();

// Event listener
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Function composition
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const addThenMultiply = compose(multiply, add);
const result = addThenMultiply(5, 3);
console.log("Result:", result);

// Regular Expression
const emailRegex = /^([\w-]+\.)*[\w-]+@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const email = "test@example.com";
console.log("Valid email?", emailRegex.test(email));

// Complex algorithm
function findDuplicates(array) {
  const duplicates = {};

  for (let i = 0; i < array.length; i++) {
    if (duplicates[array[i]] === undefined) {
      duplicates[array[i]] = 1;
    } else {
      duplicates[array[i]]++;
    }
  }

  const result = [];

  for (const [value, count] of Object.entries(duplicates)) {
    if (count > 1) {
      result.push(value);
    }
  }

  return result;
}

const numbersArray = [1, 2, 3, 4, 5, 3, 6, 7, 1];
const duplicateValues = findDuplicates(numbersArray);
console.log("Duplicate values:", duplicateValues);

// ... (Add more complex code as needed)

// End of complexJavascriptCode.js