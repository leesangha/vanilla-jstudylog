function solution(s, skip, index) {
  let answer = "";
  let arr = Array.from({ length: 26 }, (_, idx) => 97 + idx);
  skip = skip.split("").map((x) => x.charCodeAt());

  let filtered = arr.filter((_) => !skip.includes(_));
  arr = [...filtered, ...filtered, ...filtered];

  // console.log(skip);
  // console.log(arr);

  s.split("").forEach((x) => {
    let idx = arr.findIndex((_) => _ === x.charCodeAt()) + index;
    answer += String.fromCharCode(arr[idx]);
    // console.log(answer);
  });

  return answer;
}
