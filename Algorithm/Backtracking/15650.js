// const input = `4 2`.toString()
// .trim()
// .split("\n")
// .map((v) => v.split(" ").map(Number));

let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let [N, M] = input[0];
let arr = Array.from({ length: N }, (_, idx) => idx + 1);

let combination = (arr, Num) => {
  if (Num === 1) return arr.map((v) => [v]);
  let result = [];

  arr.forEach((num, idx) => {
    let fixer = num;
    let rest = arr.slice(idx + 1);
    let combArr = combination(rest, Num - 1);
    let combine = combArr.map((v) => [fixer, ...v]);
    result.push(...combine);
  });

  return result;
};

let result = combination(arr, M);

result.forEach((v) => {
  console.log(v.join(" "));
});
