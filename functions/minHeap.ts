class MinHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  // swap
  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // parent
  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  // left
  private left(index: number): number {
    return index * 2 + 1;
  }

  // right
  private right(index: number): number {
    return index * 2 + 2;
  }
  // insert
  public insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp(this.size() - 1);
  }
  // heapifyUp
  private heapifyUp(index: number): void {
    let parent = this.parent(index);
    // 인덱스가 0에 다다를 때 까지 부모랑 바꾸면서 상향 정렬
    while (index > 0 && this.heap[parent] > this.heap[index]) {
      this.swap(parent, index);
      index = parent;
      parent = this.parent(index);
    }
    // eslint-disable-next-line no-console
    console.log(index);
  }

  // extractMin
  public extractMin(): number | undefined {
    if (this.size() === 0) return undefined;
    if (this.size() === 1) return this.heap.pop();

    // min 값 추출 후 하향 정렬
    let min = this.heap[0];
    // 빼고 하향 정렬
    this.heap[0] = this.heap.pop()!;
    // 0번 부터 하향 정렬
    this.heapifyDown(0);
    return min;
  }

  // heapifyDown
  private heapifyDown(index: number): void {
    let smallest = index;
    let left = this.left(smallest);
    let right = this.right(smallest);

    // 왼쪽 노드 비교
    if (left < this.size() && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    // 오른쪽 노드 비교
    if (right < this.size() && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    // 가장 작은 것과 위치 교환
    if (smallest !== index) {
      this.swap(smallest, index);
      // 교환된 인덱스 부터 다시 하향 정렬
      this.heapifyDown(smallest);
    }
  }

  // peek
  public peek(): number | undefined {
    return this.heap[0];
  }

  // size
  public size(): number {
    return this.heap.length;
  }
}

const heap = new MinHeap();
heap.insert(5);
heap.insert(2);
heap.insert(8);
heap.insert(1);

console.log(heap.extractMin()); // 1
console.log(heap.extractMin()); // 2
console.log(heap.extractMin()); // 5
