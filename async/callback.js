"use strict";

// JavaScript is synchronous.동기적
// Execute the code block by order after hoisting.
// 호이스팅이후에 동기적 순차적으로 실행된다.
// hoisting : var 변수 함수선언들이 자동적으로 제일 위로 올라가는 것

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// 지금 당장 실행하지 않고 내함수를 실행해줘 call back

// 동기식 콜백
// 런하면 호이스팅으로 맨위로 선언될 것이다.
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));

// 비동기식 콜백 Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

/**
 * 콜백의 문제점
 * 1. 가독성이 떨어짐
 * 2. 디버깅이 어렵고 유지보수가 어려워짐
 * @type {UserStorage}
 */
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you hava a ${userWithRole.role} `);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
