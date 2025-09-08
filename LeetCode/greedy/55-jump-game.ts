// Jump Game - Greedy Algorithm
// Time: O(n), Space: O(1)
// 각 위치에서 도달할 수 있는 최대 인덱스를 추적하며 마지막 인덱스에 도달 가능한지 확인

function canJump(nums: number[]): boolean {
  let max = 0; // 현재까지 도달할 수 있는 최대 인덱스

  for (let i = 0; i < nums.length; i++) {
    // 현재 위치가 도달 가능한 최대 인덱스를 넘어서면 더 이상 진행 불가
    if (i > max) return false;

    // 현재 위치에서 점프할 수 있는 최대 거리를 계산하여 max 업데이트
    // i + nums[i]: 현재 위치(i)에서 점프값(nums[i])만큼 이동했을 때 도달할 수 있는 인덱스
    max = Math.max(max, i + nums[i]);
  }

  // 마지막까지 도달 가능하면 true 반환
  return true;
}

// 테스트 케이스
console.log(canJump([3, 2, 1, 0, 4])); // false - 인덱스 3에서 0이므로 더 이상 진행할 수 없어 인덱스 4에 도달 불가
console.log(canJump([2, 3, 1, 1, 4])); // true - 0→1→4 또는 0→2→3→4로 마지막에 도달 가능
console.log(canJump([3, 0, 2, 0, 4])); // true - 0→1→2→4로 마지막에 도달 가능
