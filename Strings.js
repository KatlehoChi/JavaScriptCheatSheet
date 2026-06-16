// Strings

// 1. Creating Strings
let singleQuotes = "Hello";
let doubleQuotes = "World";
let templateLiteral = `Hello, ${singleQuotes} ${doubleQuotes}!`; // Interpolation

// 2. String Length
let text = "JavaScript";
console.log(text.length); // 10

// 3. Accessing Characters
console.log(text[0]); // "J"
console.log(text.charAt(4)); // "S"

// 4. Common Methods
let str = "  Hello World  ";

// Case conversion
console.log(str.toUpperCase()); // "  HELLO WORLD  "
console.log(str.toLowerCase()); // "  hello world  "

// Trimming whitespace
console.log(str.trim()); // "Hello World"

// Searching
console.log(str.indexOf("World")); // 8
console.log(str.includes("Hello")); // true
console.log(str.startsWith("  He")); // true
console.log(str.endsWith("ld  ")); // true

// Extracting
console.log(str.slice(2, 7)); // "Hello"
console.log(str.substring(2, 7)); // "Hello"
console.log(str.substr(2, 5)); // "Hello" (deprecated)

// Replacing
console.log(str.replace("World", "JavaScript")); // "  Hello JavaScript  "
console.log(str.replaceAll("l", "x")); // "  Hexxo Worxd  "

// Splitting
let words = str.trim().split(" ");
console.log(words); // ["Hello", "World"]

// 5. Template Literals (ES6+)
let name = "Katleho";
const age = 22;
console.log(`My name is ${name} and I am ${age} years old.`);

// 6. Escape Characters
let escapeExample = `Line1
Line2\tTabbed\\Backslash"Quote'SingleQuote`;
console.log(escapeExample);
// 7. String Concatenation
const greet = `Hello ${name}`;
console.log(greet); // "Hello Katleho"
console.log(greet); // "Hello Katleho"

// 8. Repeat
console.log("JS".repeat(3)); // "JSJSJS"

// 9. Checking Empty String
let empty = "";
console.log(empty === ""); // true
console.log(!empty); // true (falsy)
