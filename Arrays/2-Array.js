// Accessing the element
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);

// methods
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("kiwi");

// transform array
let number = [1, 2, 3];
let square = number.map((n) => n * n);
console.log(square);
