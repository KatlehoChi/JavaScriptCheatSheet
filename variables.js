// Variables

// 1. Declaring variables
var oldWay = "Avoid using var"; //Function scoped, can be re-decelared
let modernWay = "Use let"; //Blocked scoped, can be reassigned
const constantVaule = "Fixed"; //Blocked scoped, cannot be

// 2. Data types
let stringExample = "Hello"; //string
let numberExample = 42; //number
let booleanExample = true; //boolean
let arrayExample = [1, 2, 3]; //array
let objectExample = { name: "Katleho", age: 23 }; //object
let nullExample = null; //null
let undefinedExample; //undefined

// 3. Dynamic typing
let name = "text";
dynamic = 123; //Allowed, type can change

// 4. Temple literals
let name = "Katleho";
let greeting = `Hello, ${name}`; //Easier string concatenation

// 5. Constants vs. mutable objects
const person = { name: "Katleho" };
person.name = "Changed"; //Allowed(object properties can be changed)

// 6. Variable scope
function scopeExample() {
  let inside = "I exist only here";
  console.log(inside);
}

//console.log(inside); // This will throw an error because 'inside' is not defined outside the function

// 7. Hoisting
console.log(hoistedVar); //undefined(var is hoisted)
var hoistedVar = "Now defined";

// let and const are not hoisted in the same way, they are in a "temporal dead zone" until they are declared
//console.log(hoistedLet); //Error
let hoistedLet = "Defined Later";
