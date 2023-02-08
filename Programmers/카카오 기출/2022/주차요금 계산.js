function solution(fees, records) {
  var answer = {};
  let [defaultTime, defaultFee, timeUnit, unitFee] = fees;
  // inState [time, number]
  const inState = [];
  const lastTime = "23:59";

  const convertTime = (str) => {
    let [h, m] = str.split(":");
    return parseInt(h) * 60 + parseInt(m);
  };
  const calculate = (start, end, number) => {
    const s = convertTime(start);
    const e = convertTime(end);

    if (answer[number]) answer[number] += e - s;
    else answer[number] = e - s;
  };

  records.forEach((r) => {
    let [t, num, flag] = r.split(" ");

    if (flag === "IN") inState.push([t, num]);
    else {
      let index = inState.findIndex((_) => _[1] === num);
      if (index !== -1) {
        let [time, number] = inState[index];
        inState.splice(index, 1);
        calculate(time, t, num);
      }
    }
  });

  inState.forEach((state) => {
    let [time, num] = state;
    calculate(time, lastTime, num);
  });

  let result = [];
  for (const [num, time] of Object.entries(answer)) {
    if (time <= defaultTime) result.push([num, defaultFee]);
    else {
      let price = 0;
      price = defaultFee + unitFee * Math.ceil((time - defaultTime) / timeUnit);
      result.push([num, price]);
    }
  }

  result = result.sort((a, b) => a[0] - b[0]).map((_) => _[1]);
  // console.log(result);

  // console.log(answer);

  return result;
}
