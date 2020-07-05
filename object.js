//Objects
// one of the JavaScript's data types.
// a collection of related data and/or function
// Neary all objects in JavaScript are instances of Object
// object ={key : value};
// Object는 키와 value의 집합체이다
// object = {key : value};

//1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const seongbin = { name: "seongbin", age: 4 };
print(seongbin);

// with JavaScript magic (dynamically typed language)
// can add properties later
seongbin.hasJob = true;
console.log(seongbin.hasJob);

// can delete properties later
delete seongbin.hasJob;
console.log(seongbin.hasJob);

// 2. Computed properties
// key should be always string
console.log(seongbin.name);
console.log(seongbin["name"]);

seongbin["hasJob"] = true;
console.log(seongbin.hasJob);

//예
// function printValue(obj, key) {
//   console.log(obj.key);
// }
// printValue(seongbin, "name");

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(seongbin, "name");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = new Person("seongbin", 28);
console.log(person2);

// 4. Constructor Function
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  // return this;
}

//5. in operator : property existence  check (key in obj)
console.log("name" in seongbin);
console.log("random" in seongbin);
console.log(seongbin.random);

console.clear();
//6. for.. in vs for..of
// for (key in obj)
for (key in seongbin) {
  console.log(key);
}

// for (value of iterable)

const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// New way
const user4 = Object.assign(user3, user);
//Object.assign(user4, user);
console.log(user4);

// another example
// 덮어 쓴다는 개념이 적용되었다.
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
