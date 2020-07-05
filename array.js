"use strict";

// Array
//🍎🍌c🍏🥥🍉🍐🍋🍑🍒🥝

// 1. 선언
const arr1 = new Array();
const arr2 = [1, 2];

//2. index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

console.clear();
//3.Looping over an array
// print all fruits
// a. for ()

for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push: add on item to th end
fruits.push("🍏", "🥝", "🍎", "🍎");
console.log(fruits);

// pop: remove 뒤에서 부터
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning 앞에서 부터
fruits.unshift("🍑");
console.log(fruits);

// shift: remove an item from th beginning
fruits.shift();
console.log(fruits);

//note !! shift, unshift are much slower than pop, push
// splice: remove an item by index position

fruits.push("🍑", "🍒");
console.log(fruits);
//fruits.splice(1);
console.log(fruits);
fruits.splice(1, 1, "사과", "수박");
console.log(fruits);

const fruits2 = ["배", "오이"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
// 5. Searching
//indexof: find the index
console.log(fruits);
console.log(fruits.indexOf("사과"));
console.log(fruits.indexOf("배")); //없으면  -1 return

// include
console.log(fruits.includes("🍎"));
console.log(fruits.includes("배")); // false

// lastIndexOf
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🍎"));
