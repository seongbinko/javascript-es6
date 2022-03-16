//async & await
// clear style of using promise :)
// promise를 간결하고 동기적으로 처리하는 것 처럼 보이게 하는 문법 (syntactic sugar)

// 1. async / return new Promise()의 과정을 async로 생략할 수 있다.
async function fetchUser() {
  // do network request in 10 secs....
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1);
  return "🍎";
}

async function getBanana() {
  await delay(2000);
  return "🍌";
}
function getBanana() {
  return delay(1000)
  .then(() => "🍌");
}
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

// 사과 받고 바나나 받고 총 2초 걸림  서로 연관되어있지 않기 때문에 병렬로 해보기?
// async function pickFruits() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;
// }

// 이렇게 사용하지 않음 promise api를 이용한다.
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful promise Apis
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
    .then((fruits) => fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
