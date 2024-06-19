const fruits = ["Apple", "Banana", "Mango"];

// first and last element of the array.
console.log(`First element: `, fruits[0]);
console.log(`Last element: `, fruits[fruits.length - 1]);

// Modify Array Elements:
console.log("\n");
fruits[1] = "Orange"; // Replace Banana with Orange
fruits.push("Pineapple"); // Add an element at the end
fruits.shift(); // Remove the first element
console.log(fruits);

// Array Methods:
console.log("\n");

// Using Map
let newArray = fruits.map((item) => `${item} -----> ${item.length}`); // Map each element to its length
console.log(newArray);

// Using Filter
console.log("\n");
let longFruits = fruits.filter((item) => item.length > 5); // Filter elements based on the length
console.log(longFruits);

// Sort and Reverse:
console.log("\n");
const fruits1 = ["Mango", "Apple", "Banana"];
fruits1.sort(); // Sort changes the original array
console.log(`Sorted alphabetically: `, fruits1);

fruits1.reverse(); // Reverse the order of elements
console.log(`Reversed order: `, fruits1);

// Find and Index:
console.log("\n");

const fruits2 = ["Apple", "Banana", "Mango"];
let foundFruit = fruits2.find((val) => val.includes("g")); // Find the first element containing 'g'
console.log(foundFruit);

console.log(fruits2.indexOf("Mango")); // Return the index of the first occurrence of 'Mango'

console.log("\n");
// Array Transformation with map and filter:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squaredNumbers = numbers.map((val) => val * val); // Square each number
console.log(`Squared Numbers: `, squaredNumbers);

// Use filter to create a new array containing only even numbers from the numbers array.
let evenNumbers = numbers.filter((val) => val % 2 === 0); // Filter even numbers
console.log(`Even Numbers: `, evenNumbers);

console.log("\n");

// Aggregate Data with reduce:
const expenses = [
  { amount: 50, category: "Groceries" },
  { amount: 20, category: "Transportation" },
  { amount: 100, category: "Entertainment" },
  { amount: 80, category: "Groceries" },
  { amount: 30, category: "Transportation" },
];

let totalExpenses = expenses.reduce((acc, cur) => acc + cur.amount, 0); // Sum all amounts
console.log(`Total Amount: `, totalExpenses);

console.log("\n");
console.log("Array Flattening:");

// Array Flattening:
const nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]]; // Nested array

// Write a function flattenArray that flattens nestedArray into a single-level array.
let flatArray = nestedArray.flat(Infinity); // Flatten the array to a single level
console.log(`Flattened Array: `, flatArray);

console.log("Object Assignments");
console.log("Creating and Accessing Properties:");

let car = {
  make: "Audi",
  model: "A8",
  year: 2022,
};
console.log(car.make);
console.log(car.year);

// Modifying Object Properties:
car.model = "Camry";
car.color = "blue";
console.log(`Modified Object Properties: `, car);

console.log("\n");
console.log("Iterate Over Object Properties:");

// Iterate Over Object Properties:
for (let key in car) {
  console.log(`${key}: `, car[key]);
}

console.log("\n");
console.log("Nested Objects");

// Nested Objects:
let person = {
  firstName: "Sanjay",
  lastName: "Kumar",
  address: {
    street: "Prithvi Vihar",
    city: "Noida",
    zipCode: 201301,
  },
};

console.log(`City: `, person.address.city);

console.log("\n");
console.log("Array of Objects:");

// Array of Objects:
const students = [
  { name: "Aditya", grade: "A+" },
  { name: "Muskan", grade: "B" },
  { name: "Ayushi", grade: "C" },
  { name: "Deepika", grade: "A" },
];

students.forEach((student) => {
  console.log(`Student Name: ${student.name}, Grade: ${student.grade}`);
});
console.log("Using object destructuring");

// Use object destructuring to extract make and model from the car object.
let { make, model } = car;
console.log(`Make: ${make}, Model: ${model}`);

// array destructuring to extract the first two fruits from the fruits array.
const fruits5 = ["Apple", "Banana", "Mango"];
let [firstFruit, secondFruit] = fruits5;
console.log(firstFruit, secondFruit);

console.log("\n");
console.log("Merging objects");

// Merge Objects:
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  b: 3,
  c: 4,
};

console.log(`Merged Object: `, { ...obj1, ...obj2 });
