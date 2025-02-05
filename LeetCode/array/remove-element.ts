function removeElement(nums: number[], val: number): number {
  let j = 0;
  for (let n of nums) {
    if (n !== val) nums[j++] = n;
  }
  return j;
}

// 바꿔줄 인덱스를 의미하는 j와 순회하는 n을 이용하여 j의 위치에 target value위치에 n으로 순차적으로 교체해주는 방법
