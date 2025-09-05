function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;

  let left = 0;
  let maxLen = 0;
  const charSet = new Set<string>();

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// test case
const testCase = [
  {
    s: "abcabcbb",
    result: 3,
  },

  {
    s: "bbbbb",
    result: 1,
  },
  {
    s: "pwwkew",
    result: 3,
  },
  { s: "au", result: 2 },
];

for (const test of testCase) {
  console.log(lengthOfLongestSubstring(test.s));
}

export {};
