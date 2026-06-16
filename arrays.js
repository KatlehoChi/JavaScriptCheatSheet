// Arrays

// 1. Creating Arrays
let fruits = ["apple", "banana", "cherry"];
let numbers = new Array(1, 2, 3);
let empty = []; // Empty array

// 2. Accessing Elements
console.log(fruits[0]); // "apple"
console.log(fruits[fruits.length - 1]); // "cherry"

// 3. Adding/Removing Elements
fruits.push("apple"); // Add to end
fruits.pop(); // Remove from endd
fruits.unshift("mango"); // Add to start
fruits.shift(); // Remove from start

// 4. Iterating Arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
fruits.forEach((fruit) => console.log(fruit)); // Modern way

// 5. Common Methods
let arr = [1, 2, 3, 4, 5];

console.log(arr.includes(3)); // true
console.log(arr.indexOf(4)); // 3
console.log(arr.join("-")); // "1-2-3-4-5"
console.log(arr.slice(1, 3)); // [2, 3]
console.log(arr.concat([6, 7])); // [1,2,3,4,5,6,7]

// 6. map, filter, reduce
let doubled = arr.map((num) => num * 2);
console.log(doubled); // [2,4,6,8,10]

let evens = arr.filter((num) => num % 2 === 0);
console.log(evens); // [2,4]

let sum = arr.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// 7. find and findIndex
let found = arr.find((num) => num > 3);
console.log(found); // 4
let foundIndex = arr.findIndex((num) => num > 3);
console.log(foundIndex); // 3

// 8. some and every
console.log(arr.some((num) => num > 4)); // true
console.log(arr.every((num) => num > 0)); // true

// 9. sort and reverse
let letters = ["b", "a", "c"];
letters.sort(); // ["a","b","c"]
letters.reverse(); // ["c","b","a"]

// 10. flat and flatMap (ES2019+)
let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1,2,3,4]

let words = ["hello", "world"];
console.log(words.flatMap((word) => word.split("")));
// ["h","e","l","l","o","w","o","r","l","d"]

// 11. Destructuring Arrays
let [first, second] = fruits;
console.log(first, second); // "apple", "banana"

// 12. Spread Operator
let moreNumbers = [6, 7, 8];
let combined = [...arr, ...moreNumbers];
console.log(combined); // [1,2,3,4,5,6,7,8]
