// CALLBACK
function printGreeting(firstName, lastName, callback) {
  let fullName = firstName + " " + lastName;
  console.log(callback(fullName));
}
function getGreeting(name) {
  return "Hello " + name;
}
printGreeting("Daniel", "Ulicny", getGreeting);
