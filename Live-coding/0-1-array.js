function findMaxConsecutiveOnesK(nums, k) {
  let left = 0;
  let maxLen = 0;
  let zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;

    while (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// 사용 예시
const arr = [1, 0, 1, 1, 0, 1];
const k = 2;
console.log(findMaxConsecutiveOnesK(arr, k)); // 출력: 6

// 0을 k번 1로 바꿔서 연속된 1의 최대 길이 구하기
// 📌 문제 설명
// 0과 1로 이루어진 배열이 주어졌을 때,
// 0을 최대 k번 1로 변경하여 만들 수 있는 연속된 1의 최대 길이를 구하는 문제.
