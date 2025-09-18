// A simple object without any properties or methods
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

// Why didn't first we make a object like in java
console.log(car.brand);
console.log(car.year);

// We can !
const new_car = new Object();
// Now a person is a car only if he / she or other 6900 pronoun identifies that
console.log(new_car.model);
// undefine heck yea !

new_car.brand = "Fort";
new_car.model = "Xer3";
new_car.year = "3025";

console.log(new_car.brand);
console.log(new_car.model);
console.log(new_car.year);

const person = { name: "Ali", age: 25 };
// const person = new Object();
// person.name = "Ali";
// person.age = 25;

// Using constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(name, age);
}

const p1 = new Person("muneeb", 32);
