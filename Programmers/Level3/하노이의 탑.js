const answer = [];

function solution(n) {
  hanoi(n, 1, 3, 2);
  return answer;
}

const hanoi = (n, src, dst, mid) => {
  if (n === 1) answer.push([src, dst]);
  else {
    //n-1의 원판을 가운데에 옮기는 경우
    hanoi(n - 1, src, mid, dst);
    // 원래 있던 원판 목적지로
    answer.push([src, dst]);
    //가운데에 옮겨둔 원판들 목적지로
    hanoi(n - 1, mid, dst, src);
  }
};
