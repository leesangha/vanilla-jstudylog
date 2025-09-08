function calPoints(operations: string[]): number {
  const record: number[] = [];

  for (const operation of operations) {
    if (!isNaN(Number(operation))) {
      record.push(Number(operation));
    } else if (operation === "C") {
      record.pop();
    } else if (operation === "D") {
      record.push(record[record.length - 1] * 2);
    } else if (operation === "+") {
      record.push(record[record.length - 1] + record[record.length - 2]);
    }
  }

  return record.reduce((sum, score) => sum + score, 0);
}
