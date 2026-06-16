// Basic Map Operations in JavaScript

// Create a new Map
const myMap = new Map();

// Add key-value pairs
myMap.set("name", "Alice");
// Use consistent key types: numeric-like keys stored as strings to avoid confusion
myMap.set("42", "The answer");
myMap.set({ id: 1 }, "Object key");

// Retrieve values
console.log(myMap.get("name")); // Alice
console.log(myMap.get("42")); // The answer
// numeric 42 won't match the string key '42'
console.log(myMap.get(42)); // undefined

// Check existence
console.log(myMap.has("name")); // true
// Remove a key (use the string key we stored)
myMap.delete("42");

// Size of the Map
console.log(myMap.size); // 2

// Iterate over entries
for (const [k, v] of myMap.entries()) {
  console.log(k, v);
}
