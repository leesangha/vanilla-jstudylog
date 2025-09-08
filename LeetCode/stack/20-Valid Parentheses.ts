function isValid(s: string): boolean {
  const openToClose = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack: string[] = [];

  for (const char of s) {
    if (char in openToClose) {
      // Opening bracket - push to stack
      stack.push(char);
    } else {
      // Closing bracket - check if it matches the last opening bracket
      if (stack.length === 0) return false;
      const lastOpen = stack.pop()!;
      if (openToClose[lastOpen] !== char) return false;
    }
  }

  return stack.length === 0;
}
