// dictionary 이용한 풀이
function majorityElement(nums: number[]): number {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (!obj[value]) {
      obj[value] = 1;
    } else {
      obj[value] = obj[value] + 1;
    }
  }

  const maxKey = Object.entries(obj).reduce((max, [key, value]) => {
    return Number(value) > obj[max] ? key : max;
  }, Object.keys(obj)[0]);

  return Number(maxKey);
}

/**
 * O(n) time
 * O(1) space
 */

function majorityElement2(nums: number[]): number {
  let candidate;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    // 갯수조건을 이용한 타겟 넘버 찾기
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

/**
 * Sorting을 이용하면 n logn 풀이
 */
