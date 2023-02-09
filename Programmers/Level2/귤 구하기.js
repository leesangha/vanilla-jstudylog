function solution(k, tangerine) {
  var answer = 0;
  let map = new Map();
  let arr = [];

  tangerine.forEach((item) => {
    let value = map.get(item);
    if (value) map.set(item, value + 1);
    else map.set(item, 1);
  });

  for ([key, value] of map) {
    arr.push([key, value]);
  }

  arr.sort((a, b) => b[1] - a[1]);

  while (k > 0) {
    const [size, count] = arr.shift();
    k -= count;
    answer++;
  }

  return answer;
}
