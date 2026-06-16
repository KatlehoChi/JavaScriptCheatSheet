// Loops

// 1. for loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
// Output: 0,1,2,3,4

// 2. while loop
let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}
// Output: 0,1,2

// 3. do...while loop
let num = 0;
do {
  console.log("Number:", num);
  num++;
} while (num < 3);
// Output: 0,1,2 (runs at least once)

// 4. for...of loop (iterates over values in iterable objects)
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, cherry

// 5. for...in loop (iterates over keys in objects)
let person = { name: "Katleho", age: 22 };
for (let key in person) {
  console.log(key, ":", person[key]);
}
// Output: name : Katleho, age : 22

// 6. break statement (exit loop early)
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 0,1,2,3,4

// 7. continue statement (skip current iteration)
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Output: 0,1,3,4

// 8. Nested loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
// Output: pairs of i and j

// 9. Looping with Array methods (modern approach)
let numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num)); // forEach
let doubled = numbers.map((num) => num * 2); // map
console.log(doubled); // [2,4,6,8]
