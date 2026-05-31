function outer(a) {
  // This function returns another function
  function inner(b) {
    console.log(a); // From outer scope (outer function)
    console.log(b); // From current scope (inner function)
  }

  return inner; // Return the inner function
}

// Create a new function by calling outer
const newFunc = outer(1);

// Call the returned function
newFunc(2);
// Output:
// 1
// 2

// INTERVIEW QUESTION
function outer(x) {
  function inner(y) {
    console.log(x + y);
  }
  return inner;
}

const addFive = outer(5);
addFive(3); // What does this print? 8

// Practice Exercise
// Create a function called createGreeter that:

// Takes a greeting parameter (like "Hello" or "Hi")
// Returns a function that takes a name parameter
// The returned function should log the greeting + name

function greeting(a) {
  function name(b) {
    console.log(a + b);
  }
  return name;
}
const fullGreeting = greeting("Hello ");
fullGreeting("Daniel");

// OR

function createGreeter(greeting) {
  return (name) => {
    console.log(greeting + " " + name);
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

sayHello("Kyle"); // "Hello Kyle"
sayHi("Sarah"); // "Hi Sarah"
