// 1. Use strict
// whole-script strict mode syntax
// JavaScript is very flexible
// flexable === dangerous
// added ECMAScript 5
// + can expect script performance
// use this for Vanila Javascript

'use strict';

// 2. Variable
// let (added in ES6)
// 어플리케이션을 실행하면 어플리케이션마다 쓸 수 있는 메모리를 할당한다.
// block scope

// 항상 메모리에 탑재되어 있기 때문에 최소한으로 쓰고 필요할 때만 정의
let globalName = 'global name';

// var(don't ever use this!)
// var hoisting (move declaration form bottom to top)
// 어디에 선언했느냐에 상관없이 항상 선언을 맨위로 끌어 올려주는 것을 말함
// has no block scope
console.log(age);
{
    age = 4;
    var age;
}
console.log(age);
{
    let name = 'seongbin'
    console.log(name);
    name = 'hello'
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// 무시하고 es6로 개발하고 barbel로 버전을 낮추면 된다.
//constant read만 가능 값을 선언함과 동시에 값을 변경할 수 없다. (immutable)

// Note!
// immutable data type: premitive types, frozen objects (i.e object.freeze())
// Mutable data type:  all obejcts by default are mutable in JS
// favor immutable data type always for a few reasons;
// - security 데이터 변경 
// - thread safety app 실행 한가지 프로세스 할당 여러쓰레드 동작 동시 접근 동시에 변경 
// - reduce human mistakes

const daysInweek = 7;

// 4. Variable types rw(read/write) 읽고쓰기 가능
// primitive(더이상 나눠질 수 없는 가장 작은 타입), single item: number string boolean, null undefined, symbol
// object(single item들의 묶음) , box container
// function, first-class function 함수를 변수로 설정할 수 있다.

const count = 17; // integer
const size = 17.1 // decimal number

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof csize}`);

// number -special numeric values: infinity, -infinity, Nan
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bitInt = 1234567890101010010101010n; // over (-2**53 ~ 2**53)
console.log(`value: ${bitInt}, type: ${typeof bitInt}`);

// string (all of type)
const char = 'c'
const brendan = 'brendan'; 

// tempate literals(string)

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
//let x;
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자를 만들때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

// string이기 때문에 동일한 식별자로 간주
const gSymbal1 = Symbol.for('id');
const gSymbal2 = Symbol.for('id');

console.log(gSymbal1 === gSymbal2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//Obejct, real-life object, data structure
// ref가 저장된다.를 통해서 실제 object가 담겨 있는 메모리를 가르키고 있다.
// 
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;
console.log(ellie)


// 5. Dynamic typing: dynamically typed language (선언할 때 어떤타입인지 선언하지 않고 런할 때 할당된 타입이 할당된다. 바와 c는 다름)

let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text ='8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)); -> error
// TS 는 js위에 type이 추가된 것 실시간 보기가 어려움

// 연산 반복문
