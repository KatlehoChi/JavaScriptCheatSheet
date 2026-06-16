// JavaScript 

// 1. Arithmetic Operators
let sum = 5 + 3;        // Addition → 8
let difference = 5 - 3; // Subtraction → 2
let product = 5 * 3;    // Multiplication → 15
let quotient = 10 / 2;  // Division → 5
let remainder = 10 % 3; // Modulus → 1
let power = 2 ** 3;     // Exponentiation → 8

// 2. Assignment Operators
let x = 10;
x += 5;  // x = x + 5 → 15
x -= 3;  // x = x - 3 → 12
x *= 2;  // x = x * 2 → 24
x /= 4;  // x = x / 4 → 6
x %= 5;  // x = x % 5 → 1

// 3. Comparison Operators
console.log(5 == "5");   // true (loose equality, type conversion)
console.log(5 === "5");  // false (strict equality, no conversion)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(5 <= 10);    // true

// 4. Logical Operators
let a = true, b = false;
console.log(a && b);     // AND → false
console.log(a || b);     // OR → true
console.log(!a);         // NOT → false

// 5. String Operators
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // Concatenation → "Hello World"

// 6. Ternary Operator (Conditional)
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"

// 7. Type Operators
console.log(typeof 42);        // "number"
console.log(typeof "text");    // "string"
console.log([] instanceof Array); // true if object is an Array

// 8. Increment/Decrement
let count = 0;
console.log(++count); // Pre-increment → 1
console.log(count++); // Post-increment → 1 (then count = 2)
console.log(--count); // Pre-decrement → 1
console.log(count--); // Post-decrement → 1 (then count = 0)

// End of Cheat Sheet
// ===============================
