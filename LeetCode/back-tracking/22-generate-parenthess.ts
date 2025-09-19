function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function backtrack(current: string, open: number, close: number) {
    // 기저 조건: 현재 문자열의 길이가 2*n이면 완성된 괄호 조합
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // 여는 괄호를 추가할 수 있는 경우 (아직 n개를 다 사용하지 않은 경우)
    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    // 닫는 괄호를 추가할 수 있는 경우 (여는 괄호보다 적게 사용한 경우)
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
}

generateParenthesis(3);
