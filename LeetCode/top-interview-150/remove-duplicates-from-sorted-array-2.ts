function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;

  let insertIndex = 2;

  for (let i = 2; i < nums.length; i++) {
    // 현재 값이 insertIndex - 2 이전 값과 다르면, 두 번 이상 반복되지 않았다는 의미
    if (nums[i] !== nums[insertIndex - 2]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  return insertIndex;
}
