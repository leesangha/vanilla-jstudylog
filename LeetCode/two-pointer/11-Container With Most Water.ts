function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[left], height[right]) * (right - left)
    );
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

const examples = [
  {
    height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    output: 49,
  },
  {
    height: [1, 1],
    output: 1,
  },
  {
    height: [4, 3, 2, 1, 4],
    output: 16,
  },
  {
    height: [1, 2, 1],
    output: 2,
  },
  {
    height: [2, 3, 10, 5, 7, 8, 9],
    output: 36,
  },
];

for (const example of examples) {
  const result = maxArea(example.height);
  console.log(result);
}
