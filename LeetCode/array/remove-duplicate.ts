function removeDuplicates(nums: number[]): number {
  let temp = [...new Set(nums)];
  nums.length = 0;
  nums.push(...temp);
  return nums.length;
}

// time Complexity O(n)
// space Complexity O(n)
