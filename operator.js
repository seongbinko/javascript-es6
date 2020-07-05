// 1. String concatenation backtic을 쓰면 간편하지만
// \ 따음표 구분, \n 줄바꿈 \t tab
console.log('ellie\'s \n\tbook')

// 2. Numeric operatorrs
console.log(2 ** 3); // 승
 
// 3. Increment and decrement operators ++, --
// pre, post 미리 할당, 후에 할당

let counter = 2;
const preIncrement = ++counter;
console.log(counter, preIncrement)

const postIncrement = counter++;
console.log(counter,postIncrement);

// 4. Assignment operators
let x = 3;
let y = 6;

x += y; // x = x+y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators > = <

//6. Logical operators : || (or), ||(and), !(not)

const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()} `);
// value1 이 true면 되는 것이니까 뒤에는 진행을 안한다. 
// 따라서 simple한 연산을 앞단에 배치를 해야한다.

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// ofen used to compress long if-statement
// nullableObject && nullableObject.somthing
// null 체크할때도 사용한다.


function check() {
    for (let i=0; i<10; i++) {
        //wasting time
        console.log('ㅎㅎ');
    }
    return true;
}

console.log(!value1); //true

// 7. Equality
const string5 = '5';
const number5 = 5;

// == lose equality, with type conversion
console.log(string5 == number5);

// === strich equality, no type conversion
console.log(string5 === number5);

// object equality by reference
const ko1 = {name: 'ko'};
const ko2 = {name: 'ko'};
const ko3 = ko1;

console.log(ko1 == ko2); // f 각각에 ref 에 담겨있으니까 f 
console.log(ko1 === ko2); // f
console.log(ko1 === ko3); // t

// equality - puzzler
console.log('' === false);
console.log(null == undefined); // t
console.log(null === undefined); // f

// 8. Conditional operators : if

// 9. Ternary operator: ? 
// condition ? value1 : value2; 
const name = 'ko'
console.log(name === 'bin' ? 'yes' : 'no');

// 10. switch statement
// if else 를 여러번한다면 
const browser =  '';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all');
        break;
}

//11. Loops
// while loop, while the condition is truthy,
// body code is exeecuted

let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

do {
    console.log(`do while: ${i}`);
    i--
} while (i > 0);

// for loop, for(begin; condition; step)

// nested loop (2중포문)
for(let i=0; i<= 10; i++) {
    if(i%2 !== 0) {
        continue;
    }
    console.log(i); 
}

for(let i=0; i<=10; i++) {
    if(i > 8) {
        break;
    }
    console.log(i);
}
