//  Objects

// 1. Creating Objects
let person = {
  name: "Katleho",
  age: 23,
  isStudent: true,
};

// 2. Accessing Properties
console.log(person.name); // Dot notation → "Katleho"
console.log(person["age"]); // Bracket notation → 23

// 3. Adding/Updating Properties
person.city = "Parys"; // Add new property
person.age = 23; // Update existing property

// 4. Deleting Properties
delete person.isStudent;
console.log(person); // { name: "Katleho", age: 23, city: "Parys" }

// 5. Methods (functions inside objects)
const car = {
  brand: "Mazda",
  start: function () {
    return `${this.brand} started!`;
  },
};
console.log(car.start()); // "Mazda started!"

// 6. Shorthand Method (ES6+)
const dog = {
  name: "Mochi",
  bark() {
    return "Woof!";
  },
};
console.log(dog.bark()); // "Woof!"

// 7. Object.keys, Object.values, Object.entries
let student = { id: 1, name: "Katleho", grade: "A" };
console.log(Object.keys(student)); // ["id", "name", "grade"]
console.log(Object.values(student)); // [1, "Katleho", "A"]
console.log(Object.entries(student)); // [["id",1],["name","Katleho"],["grade","A"]]

// 8. Object.assign (copy properties)
let target = { a: 1 };
let source = { b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }

// 9. Spread Operator (ES6+)
let obj1 = { x: 1, y: 2 };
let obj2 = { y: 3, z: 4 };
let merged = { ...obj1, ...obj2 };
console.log(merged); // { x: 1, y: 3, z: 4 }

// 10. Destructuring Objects
let user = { username: "Katleho", email: "katseb@example.com" };
let { username, email } = user;
console.log(username); // "Katleho"
console.log(email); // "katseb@example.com"

// 11. Checking Properties
console.log("name" in person); // true
console.log(person.hasOwnProperty("age")); // true

// 12. Freezing & Sealing
let settings = { theme: "dark" };
Object.freeze(settings); // Prevent changes to top-level properties (shallow)
// settings.theme = "light"; // Ignored

let config = { mode: "auto" };
// Object.seal prevents adding/removing properties but still allows changing existing ones.
// Use Object.freeze for shallow immutability of existing properties, or deepFreeze below for full deep immutability.
Object.freeze(config); // Prevent adding/removing properties AND modification of top-level properties
// config.mode = "manual"; // Now ignored

// Optional: deep freeze nested objects for full immutability
// Note: deepFreeze only freezes own properties (not the prototype chain). To freeze prototypes as well, pass freezePrototype = true.
function deepFreeze(obj, freezePrototype = false) {
  if (obj === null || typeof obj !== "object" || Object.isFrozen(obj)) {
    return Object.freeze(obj);
  }

  Reflect.ownKeys(obj).forEach(function (name) {
    const value = obj[name];
    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      deepFreeze(value, freezePrototype);
    }
  });

  if (freezePrototype) {
    const proto = Object.getPrototypeOf(obj);
    if (proto && typeof proto === "object" && !Object.isFrozen(proto)) {
      deepFreeze(proto, true);
    }
  }

  return Object.freeze(obj);
}

// Example with nested config
let nestedConfig = { mode: "auto", nested: { enabled: true } };
deepFreeze(nestedConfig);
// nestedConfig.nested.enabled = false; // Ignored
