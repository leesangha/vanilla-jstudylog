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

let permutation = (arr, M) => {
  if (arr.length < M) return null;
  if (M === 1) return arr.map((num) => [num]);

  let result = [];

  arr.forEach((num, idx) => {
    let fixer = num;
    let rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    let selected = permutation(rest, M - 1);
    let perm = selected.map((s) => [fixer, ...s]);
    result.push(...perm);
  });

  return result;
};

let result = permutation(arr, M);
result.forEach((v) => {
  console.log(v.join(" "));
});
