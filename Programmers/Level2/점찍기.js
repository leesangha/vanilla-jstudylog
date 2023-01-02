function solution(k, d) {
  let count = 0;
  let x = 0;

  while (1) {
    if (x > d) break;

    let maxY = Math.floor(Math.sqrt(d * d - x * x) / k);
    // console.log(x,maxY);
    count += maxY + 1;

    x += k;
  }

  return count;
}
