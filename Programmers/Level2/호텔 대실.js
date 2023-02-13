function solution(book_time) {
  var answer = 0;
  let Max = 23 * 60 + 59;

  const calTime = (str) => {
    let [h, m] = str.split(":");
    return Number(h) * 60 + Number(m);
  };

  const convert = (time) => {
    let [start, end] = time;
    let sTime = calTime(start);
    let eTime = calTime(end) + 9;
    return [sTime, eTime];
  };

  let time = book_time.map((t) => convert(t));
  time.forEach((t) => {
    let [start, end] = t;
    let s = time.filter((x) => start >= x[0] && start <= x[1]).length;
    let e = time.filter((x) => end >= x[0] && end <= x[1]).length;
    answer = Math.max(...[s, e, answer]);
  });

  return answer;
}
