function solution(n, money) {
  const dp = [1, ...new Array(n).fill(0)];

  //아이디어 -> index개의 화폐를 써서 i원을 거슬러줄 방법을 일차원 배열로 표현,
  //2차원 배열에서 직전행의 값이 다음행에도 동일,유효하게 적용되기 떄문에 일차원으로 축약하여 표현 가능
  //화폐 단위 순환
  for (let i = 0; i < money.length; i++) {
    //n 보다 작은 값들 dp 배열 갱신
    for (let j = 0; j <= n; j++) {
      if (j >= money[i]) dp[j] += dp[j - money[i]];
    }
  }
  // console.log(dp);
  return dp[n];
}
