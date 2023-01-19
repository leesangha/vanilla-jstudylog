function solution(n, results) {
  let winners = {};
  let losers = {};
  let players = Array.from({ length: n }, (i, idx) => idx + 1);

  // winner loser Set생성
  players.forEach((player) => {
    winners[player] = new Set([]);
    losers[player] = new Set([]);
  });

  results.forEach((result) => {
    let [winner, loser] = result;
    winners[winner].add(loser);
    losers[loser].add(winner);
  });

  players.forEach((player) => {
    // 내가 이긴사람한테 진사람도 내가 이긴거임
    winners[player].forEach((i) => {
      winners[i].forEach((man) => {
        winners[player].add(man);
      });
    });

    // 내가 진사람한테 이긴 사람은 내가 진거임
    losers[player].forEach((i) => {
      losers[i].forEach((man) => {
        losers[player].add(man);
      });
    });
  });

  // console.log(winners,losers);

  let ans = players.reduce((acc, player) => {
    if (winners[player].size + losers[player].size === n - 1) return acc + 1;
    return acc;
  }, 0);

  return ans;
}
