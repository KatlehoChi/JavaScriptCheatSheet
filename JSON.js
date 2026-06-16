// JSON

// 1. JSON Basics
// JSON is a text format for storing and exchanging data.
// Keys and string values must be in double quotes.

let jsonString = '{"name":"Katleho","age":23,"isStudent":true}';

// 2. Parsing JSON (string → object)
let parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // "Katleho"
console.log(parsedObj.age); // 23

// 3. Stringifying JSON (object → string)
const obj = { brand: "Toyota", year: 2026 };
let stringified = JSON.stringify(obj);
console.log(stringified); // '{"brand":"Toyota","year":2026}'

// 4. Pretty Printing JSON
let pretty = JSON.stringify(obj, null, 2);
console.log(pretty);
/*
{
  "brand": "Toyota",
  "year": 2026
}
*/

// 5. Handling Arrays in JSON
const jsonArray = "[1,2,3,4]";
const parsedArray = JSON.parse(jsonArray);
console.log(parsedArray[2]); // 3

const arr = [10, 20, 30];
console.log(JSON.stringify(arr)); // "[10,20,30]"

// 6. Nested JSON
let nestedJSON = '{"user":{"name":"Katleho","skills":["JS","C#","Cloud"]}}';
let nestedObj = JSON.parse(nestedJSON);
console.log(nestedObj.user.skills[1]); // "C#"

// 7. Error Handling
let badJSON;
try {
  badJSON = '{"name":"Katleho", age:23}'; // Invalid (age not quoted)
  JSON.parse(badJSON);
} catch (error) {
  console.error("Invalid JSON while parsing:", error.message);
  console.error("Invalid JSON string:", badJSON);
}

// 8. Use Cases
// - API responses
// - Config files
// - Data storage (localStorage, databases)

// Example: Storing JSON in localStorage
localStorage.setItem("user", JSON.stringify({ name: "Katleho", age: 23 }));
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // "Katleho"
