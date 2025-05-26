// Sort
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let j = 0, i = m; j < n; j++, i++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
}

/**
 * 뒤에서 부터 채워넣기
 * 정렬된 두 배열이다 보니 뒤에서부터 비교하면, 더 큰 값을 맨 뒤에 넣어준다.
 *
 * sort()는 O(m + nlog(m+n))
 *
 * Two pointer 는 O(m+n)
 *
 */

// Two Pointer
function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}
