function solution(weights) {
  var answer = 0;
  let weight = Array(2002).fill(0);
  let answers = [1, 3 / 2, 4 / 3, 4 / 2, 2 / 3, 3 / 4, 2 / 4];

  weights.forEach((w) => {
    let x = parseInt(w);

    answers.forEach((pe) => {
      if (weight[pe * x] > 0) answer += weight[x * pe];
    });

    weight[w] += 1;
  });

  return answer;
}
