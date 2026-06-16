// Numbers

// 1. Number Types
let integer = 42; // Integer
let float = 3.14; // Floating-point
let scientific = 1.23e5; // Scientific notation → 123000
let hex = 0xff; // Hexadecimal → 255
let binary = 0b1010; // Binary → 10
let octal = 0o755; // Octal → 493

// 2. Special Values
console.log(NaN); // Not-a-Number
console.log(Infinity); // Infinity
console.log(-Infinity); // Negative Infinity

// 3. Number Methods
let num = 123.456;

// Conversion
console.log(num.toString()); // "123.456"
console.log(num.toFixed(2)); // "123.46" (rounds to 2 decimals)
console.log(num.toPrecision(4)); // "123.5" (total digits)

// Parsing
console.log(Number("42")); // 42
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14")); // 3.14

// Checking
console.log(Number.isInteger(42)); // true
console.log(Number.isNaN(NaN)); // true
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false

// 4. Math Object
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.trunc(4.9)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.abs(-7)); // 7
console.log(Math.max(1, 5, 9)); // 9
console.log(Math.min(1, 5, 9)); // 1
console.log(Math.random()); // Random number between 0 and 1

// 5. BigInt (ES2020+)
let big = 123456789012345678901234567890n;
console.log(big + 10n); // Works only with other BigInts

// 6. Quirks
console.log(0.1 + 0.2); // 0.30000000000000004 (floating-point precision issue)
console.log(9999999999999999); // 10000000000000000 (precision limit)
