//Json
//자바스크립트 객체

//1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

// javaScript 함수 및 내장함수는 포함되지 않는다.
const rabbit = {
  name: "tori",
  color: "white",
  birthDate: new Date(),
  //symbol: Symbol("id"),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ko" : value;
});
console.log(json);

// 2. JSON to Obejct
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// 유용한 사이트
// JSON Diff
// JSON Beautifier (포맷을 이쁘게 만들어줌)
// JSON Parser
// JSON Validateor (유효성 검사)
