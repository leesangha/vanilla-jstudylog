// 가장 긴 팰린드롬 부분 문자열을 찾는 함수
function longestPalindrome(s: string): string {
  let longest = ""; // 가장 긴 팰린드롬을 저장할 변수

  // 문자열의 각 인덱스를 중심으로 탐색
  for (let i = 0; i < s.length; i++) {
    // 홀수 길이 팰린드롬 탐색 (중심이 하나의 문자)
    let left = i;
    let right = i;
    // 양쪽으로 확장하면서 팰린드롬인지 확인
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    let temp = s.slice(left + 1, right); // 팰린드롬 부분 문자열 추출
    // 현재 찾은 팰린드롬이 기존보다 길면 업데이트
    if (right - left - 1 > longest.length) {
      longest = temp;
    }

    // 짝수 길이 팰린드롬 탐색 (중심이 두 문자 사이)
    left = i;
    right = i + 1;
    // 양쪽으로 확장하면서 팰린드롬인지 확인
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    temp = s.slice(left + 1, right); // 팰린드롬 부분 문자열 추출
    // 현재 찾은 팰린드롬이 기존보다 길면 업데이트
    if (right - left - 1 > longest.length) {
      longest = temp;
    }
  }

  return longest; // 가장 긴 팰린드롬 반환
}

// 테스트 케이스들
console.log(longestPalindrome("babad")); // 'bab' 또는 'aba'
console.log(longestPalindrome("cbbd")); // 'bb'
console.log(longestPalindrome("a")); // 'a'
console.log(longestPalindrome("ac")); // 'a' 또는 'c'
console.log(longestPalindrome("")); // ''
console.log(longestPalindrome("a")); // 'a'
