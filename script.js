// VAR

function func() {
  {
    var a = 1; // Function scope
  }
  console.log(a); // Prints 1
}
func();

//Funkcia to vidi takto kvôli function scope
function func() {
  var a = 1; // Function scope
  console.log(a); // Prints 1
}
func();

// Hoisting
console.log(a); // Prints undefined
var a = 1;
console.log(a); // 1

// JavaScript treats this as if you wrote:
var a;
console.log(a); // Prints undefined
a = 1; // Assignment happens here
console.log(a); // 1

// Znovu pouzitie:
var a = 1;
var a = 2; // No error - just overwrites the first one
console.log(a); // 2

// Pri let:
let b = 1;
let b = 2; // ❌ SyntaxError: Identifier 'b' has already been declared
