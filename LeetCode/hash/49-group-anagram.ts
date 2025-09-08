function groupAnagrams(strs: string[]): string[][] {
  const array = strs.map((s) => s.split("").sort().join(""));
  const map = new Map<string, string[]>();
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (map.get(array[i])) {
      map.set(array[i], [...map.get(array[i]), strs[i]]);
    } else map.set(array[i], [strs[i]]);
  }

  map.forEach((v) => {
    result.push(v);
  });

  return result;
}
