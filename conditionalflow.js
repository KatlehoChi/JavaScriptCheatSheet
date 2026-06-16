// Conditional Flow

// 1. if statement
let age = 18;
if (age >= 18) {
  console.log("You can vote!");
}

// 2. if...else
let temperature = 15;
if (temperature > 20) {
  console.log("It's warm outside.");
} else {
  console.log("It's cold outside.");
}

// 3. if...else if...else
let score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 4. switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Just another day");
}

// 5. Ternary Operator (shorthand if...else)
let isMember = true;
let fee = isMember ? "R50" : "R100";
console.log(fee); // R50

// 6. Logical Operators in conditions
let loggedIn = true;
let hasPermission = false;
if (loggedIn && hasPermission) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 7. Short-circuit evaluation
let userName = null;
let displayName = userName || "Guest";
console.log(displayName); // "Guest"

// 8. Optional chaining (ES2020+)
let user = { profile: { name: "Katleho" } };
console.log(user?.profile?.name); // "Katleho"
console.log(user?.settings?.theme); // undefined (no error)
