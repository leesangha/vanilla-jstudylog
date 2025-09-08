// Map 방법 - Time: O(n), Space: O(k) where k is the number of unique characters
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charCount = new Map<string, number>();

  // Count characters in string s
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Decrement count for characters in string t
  for (const char of t) {
    if (!charCount.has(char)) return false;
    charCount.set(char, charCount.get(char)! - 1);
    if (charCount.get(char) === 0) {
      charCount.delete(char);
    }
  }

  return charCount.size === 0;
}

// Sort 방법 - Time: O(n log n), Space: O(n)
function isAnagram2(s: string, t: string): boolean {
  const t1 = s.split("").sort().join("");
  const t2 = t.split("").sort().join("");

  return t1 === t2;
}
