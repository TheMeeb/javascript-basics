// callback functions
function greet(name, callback) {
  console.log("Hello" + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Muneeb", sayBye);

// Higher order function
const numbers = [1, 2, 3, 4];
const square = numbers.map((num) => num * num);
console.log(square);

// Recursion
function factorial(n) {
  if (n === 0) return 1; // base case
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120
