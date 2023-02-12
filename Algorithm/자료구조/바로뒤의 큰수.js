function solution(numbers) {
  var answer = Array(numbers.length).fill(0);
  let stack = [];

  numbers.forEach((num, idx) => {
    while (stack.length > 0 && num > numbers[stack[stack.length - 1]]) {
      answer[stack.pop()] = num;
    }
    stack.push(idx);
  });

  while (stack.length) {
    answer[stack.pop()] = -1;
  }

  return answer;
}
