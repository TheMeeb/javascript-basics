// This is how you can create methods in a object
const user = {
  name: "Muneeb",
  greet: function () {
    console.log("Hello,I am" + this.name);
  },
};

user.greet();
console.log(Object.keys(user));
console.log(Object.values(user));

// biult in methods
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// object cloning
const obj1 = { x: 3 };
const obj2 = obj1;
obj2.x = 20;
console.log(obj1.x);
// we can copy property but i don' think that something i will do

// Nested loop
const new_user = {
  name: "Muneeb",
  address: {
    city: "Sargodha",
    zip: 54000,
  },
};

console.log(new_user.address.city);

// Destruction of objects
const person = { name: "Ali", age: 32 };
const { name, age } = person;
console.log(name, age);
const { name: userName } = person;
console.log(userName);
// We destory by changing the property of the object by giving it a new one

// object spread and Rest
const new_user2 = {
  id: 1,
  name: "Muneeb",
  age: 23,
};

const clone = { ...new_user2, country: "Pakistan" };
console.log(clone);
// we face error if we only take age new need to destruct it like age: newage
const { age: newage, ...rest } = new_user2;
console.log(rest);
console.log(newage);

// Prototype
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " make too much noise");
};

const dog = new Animal("Dog");
dog.speak();
