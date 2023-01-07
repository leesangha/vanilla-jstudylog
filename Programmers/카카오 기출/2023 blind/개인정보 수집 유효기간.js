function solution(today, terms, privacies) {
  var answer = [];
  let term = {};
  let [tyear, tmonth, tday] = today.split(".").map(Number);

  terms.forEach((t) => {
    let [type, time] = t.split(" ");
    term[type] = parseInt(time);
  });

  privacies.forEach((p, idx) => {
    let [date, type] = p.split(" ");
    let [year, month, day] = date.split(".").map(Number);

    month += term[type];
    if (month > 12) {
      year += Math.floor((month - 1) / 12);
      month = month % 12;
      if (month === 0) month = 12;
    }
    day = day - 1;
    if (day === 0) {
      day = 28;
      month = month - 1;
    }

    if (tyear > year) answer.push(idx + 1);
    else if (tyear === year && tmonth > month) answer.push(idx + 1);
    else if (tyear === year && tmonth === month && tday > day)
      answer.push(idx + 1);
  });

  return answer;
}
