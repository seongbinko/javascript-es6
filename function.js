const simplePrint = () => console.log("simplePrint!");
const add = (a = 0, b = 0) => console.log(a + b);
const simpleMuliply = (a, b) => {
  //do something more
  return a * b;
};
// IIFE : Immediately invoked Function Expression
(() => console.log("Test"))();

const calculate = (command, a, b) => {
  switch (command) {
    case "add":
      return a + b;
      break;
    case "substract":
      return a - b;
      break;
    case "divide":
      return a / b;
      break;
    case "multiply":
      return a * b;
      break;
    case "remainder":
      return a % b;
      break;
    default:
      throw Error("unknown command");
  }
};
