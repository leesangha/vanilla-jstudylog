const combination = (arr, num) => {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, index, arr) => {
    let fixer = v;
    let rest = arr.slice(index + 1);
    let combinations = combination(rest, num - 1);
    let results = combinations.map((item) => [fixer, ...item]);
    res.push(...results);
  });

  return res;
};

const tmp = [1, 2, 3];
const count = 2;

const a = combination(tmp, count);
console.log(a);
