function removeDuplicates(nums: number[]): number {
  let temp = [...new Set(nums)];
  nums.length = 0;
  nums.push(...temp);
  return nums.length;
}

// time Complexity O(n)
// space Complexity O(n)

function removeDuplicates2(nums: number[]): number {
  if (nums.length === 0) return 0;

  let i = 1; // 고유 원소를 채울 위치 시작점
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[j - 1]) {
      // nums[j]는 새로운 고유한 값이므로
      // 이 값을 i번째 위치에 저장하여 중복을 제거한 배열을 만듦
      // 예: [0,0,1,1,2] → i=1일 때 nums[1] = nums[2] (값 1을 저장)
      nums[i] = nums[j];
      i++; // 다음 고유 원소를 저장할 위치로 이동
    }
  }
  return i; // 고유 원소 개수
}

// 테스트
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const len = removeDuplicates2(nums);
console.log(len); // 출력: 5
console.log(nums.slice(0, len)); // 출력: [0,1,2,3,4]
