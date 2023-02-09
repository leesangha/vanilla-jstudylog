function solution(want, number, discount) {
  let result = 0;
  let state = number.slice().fill(0);
  let idxs = {};

  for (let i = 0; i < want.length; i++) {
    idxs[want[i]] = i;
  }
  // console.log(idxs);

  // set InitialState
  discount.slice(0, 10).forEach((item) => {
    let idx = idxs[item];
    if (idx >= 0) state[idx] += 1;
  });
  // 첫날 검사
  if (state.join("") === number.join("")) result += 1;
  // console.log(state);
  for (let i = 0; i < discount.length; i++) {
    // 빠지는 녀석 인덱스
    let out = idxs[discount[i]];
    if (out >= 0) state[out] -= 1;

    if (i + 10 < discount.length) {
      // 들어올 녀석 인덱스
      let inn = idxs[discount[i + 10]];
      if (inn >= 0) state[inn] += 1;
    }

    if (state.join("") === number.join("")) result += 1;
  }

  return result;
}
