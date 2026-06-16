// Functions

// 1. Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Katleho")); // Hello, Katleho!

// 2. Function Expression
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5

// 3. Arrow Functions (ES6+)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

// Single parameter (no parentheses needed)
const square = (x) => x * x;
console.log(square(6)); // 36

// 4. Default Parameters
function sayHello(name = "stranger") {
  return `Hello, ${name}!`;
}
console.log(sayHello()); // Hello, stranger!

// 5. Rest Parameters (...args)
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// 6. Anonymous Functions
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

// 7. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("Runs immediately!");
})();

// 8. Callback Functions
function processUserInput(callback) {
  const name = "Katleho";
  callback(name);
}
processUserInput(function (name) {
  console.log(`Hello, ${name}`);
});

// 9. Higher-Order Functions
function higherOrder(fn, value) {
  return fn(value);
}
const double = (x) => x * 2;
console.log(higherOrder(double, 5)); // 10

// 10. Function Scope
function scopeExample() {
  let localVar = "Only inside this function";
  console.log(localVar);
}
// console.log(localVar); // Error: not defined
