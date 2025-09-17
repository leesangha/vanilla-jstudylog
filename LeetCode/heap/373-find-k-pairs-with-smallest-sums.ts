class CustomHeap {
  private heap: { sum: number; list: number[] }[];

  constructor() {
    this.heap = [];
  }

  public parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  public left(index: number): number {
    return index * 2 + 1;
  }

  public right(index: number): number {
    return index * 2 + 2;
  }

  public swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  public insert(value: { sum: number; list: number[] }): void {
    this.heap.push(value);
    this.heapifyUp(this.size() - 1);
  }

  public heapifyUp(index: number): void {
    let parent = this.parent(index);
    while (index > 0 && this.heap[index].sum < this.heap[parent].sum) {
      this.swap(index, parent);
      index = parent;
      parent = this.parent(index);
    }
  }

  public extractMin(): { sum: number; list: number[] } | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!; // 타입 에러 수정: ! 추가
    this.heapifyDown(0);
    return min;
  }

  public heapifyDown(index: number): void {
    let minIndex = index;
    let left = this.left(index);
    let right = this.right(index);

    // heapifyDown 로직 수정: minIndex와 비교하도록 변경
    if (left < this.size() && this.heap[left].sum < this.heap[minIndex].sum) {
      minIndex = left;
    }
    if (right < this.size() && this.heap[right].sum < this.heap[minIndex].sum) {
      minIndex = right;
    }

    if (minIndex !== index) {
      this.swap(minIndex, index);
      this.heapifyDown(minIndex);
    }
  }

  public peek(): { sum: number; list: number[] } {
    return this.heap[0];
  }

  public size() {
    return this.heap.length;
  }
}

function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  // 문제점 1: 기존 코드는 모든 가능한 쌍을 힙에 넣어서 메모리 초과 발생
  // 시간복잡도 O(m*n*log(m*n)), 공간복잡도 O(m*n) - 너무 비효율적

  // 최적화된 해결법: 필요한 만큼만 힙에 추가하는 방식 사용
  const result: number[][] = [];
  const customHeap = new CustomHeap();

  // 빈 배열 체크
  if (nums1.length === 0 || nums2.length === 0 || k === 0) return result;

  // 더 최적화된 방법: nums1의 각 요소에 대해 nums2[0]과만 먼저 페어링
  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    customHeap.insert({
      sum: nums1[i] + nums2[0],
      list: [nums1[i], nums2[0], i, 0], // i, j 인덱스도 저장
    });
  }

  // k개의 최소 쌍 추출 내림차순이라서 가능한 방법
  for (let i = 0; i < k && customHeap.size() > 0; i++) {
    const minPair = customHeap.extractMin()!;
    const [num1, num2, idx1, idx2] = minPair.list;

    result.push([num1, num2]);

    // 다음 가능한 쌍 추가 (같은 nums1 요소와 nums2의 다음 요소)
    if (idx2 + 1 < nums2.length) {
      customHeap.insert({
        sum: nums1[idx1] + nums2[idx2 + 1],
        list: [nums1[idx1], nums2[idx2 + 1], idx1, idx2 + 1],
      });
    }
  }

  return result;
}
