function threeSum(nums: number[]): number[][] {
  const answer: number[][] = [];

  // Sort the array
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for the first element
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        answer.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate values for the second element
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        // Skip duplicate values for the third element
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return answer;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0, 0]));
// console.log(threeSum([-2, 0, 1, 1, 2]));
// console.log(threeSum([-2,-1, 0, 1, 2, 3, -4]));
