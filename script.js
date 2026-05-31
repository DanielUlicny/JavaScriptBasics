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
addFive(3); // What does this print?
// 8
