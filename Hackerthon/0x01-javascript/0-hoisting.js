// Variable hoisting example
console.log(myVariable); // Output: undefined
var myVariable = 10;

// Function hoisting example
myFunction(); // Output: "Hello, World!"
function myFunction() {
  console.log("Hello, World!");
}