// 프로미스 오브젝트를 통해서 콜백을 어떻게 깔끔하게 처리할지를 알아보자
"use strict";

//promise 는 자바 비동기 내장객체
// state: pending ->fulfilled or rejected
// producer vs Consumer

// 1. Producer (시간이 걸리는 비동기일들을 주로 처리한다.)
// whne new Promise is created, the executor runs automatically.
// promise를 만드는 순간 전달한 excute가 실행되기 때문에 유의해야한다. (불필요한 네트워크 통신 주의)

const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    //resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//3. Promise chaining
const fetchNumber = new Promise((resolve, recject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4. Error Handling
const getHen = () =>
  new Promise((resolve, recject) => {
    setTimeout(() => resolve("Hen"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => egg`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 요리`), 1000);
  });

getHen()
  //.then((hen) => getEgg(hen))
  .then(getEgg)
  .catch((error) => {
    return "bread";
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));

5;
