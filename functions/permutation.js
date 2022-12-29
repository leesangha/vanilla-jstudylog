function permutation(arr, selectNum) {
  if (arr.length < selectNum) return null;

  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });

  return result;
}

const tmp = [1, 2, 3];
const count = 3;

const a = permutation(tmp, count);
console.log(a);
