/* eslint-disable no-console */
function canConstruct(ransomNote: string, magazine: string): boolean {
  const charCount = new Map<string, number>();

  // Count characters in magazine
  for (const char of magazine) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Check if we can construct ransom note
  for (const char of ransomNote) {
    const count = charCount.get(char) || 0;
    if (count === 0) {
      return false;
    }
    charCount.set(char, count - 1);
  }

  return true;
}

// 시간 복잡도: O(m + n)
// - m: magazine의 길이
// - n: ransomNote의 길이
// 첫 번째 for 루프에서 magazine의 모든 문자를 순회 (O(m))
// 두 번째 for 루프에서 ransomNote의 모든 문자를 순회 (O(n))
// Map의 get/set 연산은 평균적으로 O(1)이므로
// 전체 시간 복잡도는 O(m + n)

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
