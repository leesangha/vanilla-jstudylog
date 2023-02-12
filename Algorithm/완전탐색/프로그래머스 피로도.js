function solution(k, dungeons) {
  let cnt = 0;

  const DFS = (rest, count, status) => {
    if (rest.length === 0) {
      cnt = Math.max(cnt, count);
      return;
    }

    // console.log('DFS 호출',rest,status)
    rest.forEach((r) => {
      let [limit, usage] = r;
      // 입장 가능
      if (status >= limit) {
        let _rest = rest.filter((_) => _ !== r);
        DFS(_rest, count + 1, status - usage);
      }
      // 입장 불가
      else {
        let _rest = rest.filter((_) => _ !== r);
        DFS(_rest, count, status);
      }
    });
  };

  DFS(dungeons, 0, k);

  return cnt;
}
