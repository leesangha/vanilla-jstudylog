class MaxHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private left(index: number): number {
    return index * 2 + 1;
  }

  private right(index: number): number {
    return index * 2 + 2;
  }

  public insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp(this.size() - 1);
  }

  private heapifyUp(index: number): void {
    let parent = this.parent(index);
    while (index > 0 && this.heap[parent] < this.heap[index]) {
      this.swap(parent, index);
      index = parent;
      parent = this.parent(index);
    }
  }

  public extractMax(): number | undefined {
    if (this.size() === 0) return undefined;
    if (this.size() === 1) return this.heap.pop();

    let max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);

    return max;
  }

  private heapifyDown(index: number): void {
    let largest = index;
    let left = this.left(largest);
    let right = this.right(largest);

    if (left < this.size() && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.size() && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest !== index) {
      this.swap(largest, index);
      this.heapifyDown(largest);
    }
  }

  public peek(): number {
    return this.heap[0];
  }

  public size(): number {
    return this.heap.length;
  }
}
