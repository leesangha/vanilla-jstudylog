function twoSum(numbers: number[], target: number): number[] {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1];
    } else if (numbers[i] + numbers[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return [];
}

// test case
const testCase = [
  {
    numbers: [2, 7, 11, 15],
    target: 9,
    result: [1, 2],
  },
  {
    numbers: [2, 3, 4],
    target: 6,
    result: [1, 3],
  },
  {
    numbers: [-1, 0],
    target: -1,
    result: [1, 2],
  },
];

for (const test of testCase) {
  console.log(twoSum(test.numbers, test.target), test.result);
}
