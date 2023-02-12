let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let len = input.shift();

const palin = (text, strt, end, del_cnt) => {
  if (del_cnt === 2) return 2;

  while (strt <= end) {
    if (text[strt] !== text[end]) {
      let a = palin(text, strt + 1, end, del_cnt + 1);
      let b = palin(text, strt, end - 1, del_cnt + 1);
      return a <= b ? a : b;
    }
    strt += 1;
    end -= 1;
  }
  return del_cnt;
};

for (let i = 0; i < len; i++) {
  let text = input[i];
  console.log(palin(text, 0, text.length - 1, 0));
}
