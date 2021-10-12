function solution(n) {
  let answer = 0;

  const dfs = (board, row) => {
    if (row === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        board[row + 1] = i;
        if (isValid(board, row + 1)) dfs(board, row + 1);
      }
    }
  };

  const isValid = (board, row) => {
    for (let i = 1; i < row; i++) {
      if (board[i] === board[row]) return false;
      if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
    }
    return true;
  };

  for (let i = 1; i <= n; i++) {
    const board = new Array(n + 1).fill(0);
    board[1] = i;
    dfs(board, 1);
  }

  return answer;
}
//출처 https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EC%A7%91%ED%95%A9-JS-2xs6gra3
