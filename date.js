// Date

// 1. Creating Dates
let now = new Date(); // Current date & time
let specific = new Date("2026-06-16"); // From string
let fromNumbers = new Date(2026, 5, 16, 17, 30);
// Year, Month(0-based), Day, Hour, Minute → June 16, 2026 17:30

// 2. Getting Date Components
console.log(now.getFullYear()); // Year
console.log(now.getMonth()); // Month (0 = Jan, 11 = Dec)
console.log(now.getDate()); // Day of month
console.log(now.getDay()); // Day of week (0 = Sun, 6 = Sat)
console.log(now.getHours()); // Hour (0–23)
console.log(now.getMinutes()); // Minutes
console.log(now.getSeconds()); // Seconds
console.log(now.getMilliseconds()); // Milliseconds

// 3. Setting Date Components
let date = new Date();
date.setFullYear(2030);
date.setMonth(11); // December
date.setDate(25); // Christmas
console.log(date); // Dec 25, 2030

// 4. Date Formatting
console.log(now.toString()); // Full string
console.log(now.toDateString()); // Date only
console.log(now.toTimeString()); // Time only
console.log(now.toISOString()); // ISO format (UTC)
console.log(now.toLocaleDateString()); // Local date
console.log(now.toLocaleTimeString()); // Local time

// 5. Timestamps
console.log(Date.now()); // Milliseconds since Jan 1, 1970
console.log(now.getTime()); // Same as above for a Date object

// 6. Comparing Dates
let d1 = new Date("2026-06-16");
let d2 = new Date("2026-06-17");
console.log(d1 < d2); // true

// 7. Adding/Subtracting Time
let future = new Date();
future.setDate(future.getDate() + 7); // Add 7 days
console.log(future);

let past = new Date();
past.setHours(past.getHours() - 5); // Subtract 5 hours
console.log(past);

// 8. Useful Tricks
// Difference in days between two dates
let start = new Date("2026-06-01");
let end = new Date("2026-06-16");
let diffMs = end - start; // Milliseconds difference
let diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(diffDays); // 15
