function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;

  // Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const result: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = result[result.length - 1];

    // Check if current interval overlaps with the last merged interval
    if (current[0] <= lastMerged[1]) {
      // Merge intervals by updating the end time
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap, add current interval to result
      result.push(current);
    }
  }

  return result;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

function merge2(intervals: number[][]): number[][] {
  function isInterval(a: number[], b: number[]) {
    // a small, b big
    let [start1, end1] = a;
    let [start2, end2] = b;

    if (end1 >= start2) {
      return { isInterval: true, interval: [start1, Math.max(end1, end2)] };
    } else return { isInterval: false, interval: a };
  }

  const sorted = intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1)).slice();
  const stack = [sorted.shift()];

  while (intervals.length > 0) {
    const current = stack.pop();
    const next = intervals.shift();
    const isMergable = isInterval(current, next);
    if (isMergable.isInterval) stack.push(isMergable.interval);
    else stack.push(...[current, next]);
  }

  return stack;
}
