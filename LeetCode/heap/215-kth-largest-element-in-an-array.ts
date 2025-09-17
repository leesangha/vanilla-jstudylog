class CustomMaxHeap {
  private heap: number[];

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

  public swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  public insert(num: number) {
    this.heap.push(num);
    this.heapifyUp(this.size() - 1);
  }

  public heapifyUp(index: number) {
    let parent = this.parent(index);
    while (index > 0 && this.heap[parent] < this.heap[index]) {
      this.swap(parent, index);
      index = parent;
      parent = this.parent(index);
    }
  }

  public extractMax() {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    let max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return max;
  }

  public heapifyDown(index: number) {
    let max = index;
    let left = this.left(max);
    let right = this.right(max);

    if (left < this.size() && this.heap[left] > this.heap[max]) {
      max = left;
    }
    if (right < this.size() && this.heap[right] > this.heap[max]) {
      max = right;
    }

    if (index !== max) {
      this.swap(index, max);
      this.heapifyDown(max);
    }
  }

  public peek() {
    return this.heap[0];
  }

  public size() {
    return this.heap.length;
  }
}

function findKthLargest(nums: number[], k: number): number {
  let result = nums[0];
  const customHeap: CustomMaxHeap = new CustomMaxHeap();
  nums.forEach((num) => {
    customHeap.insert(num);
  });

  for (let i = 0; i < k; i++) {
    result = customHeap.extractMax();
  }

  return result;
}
