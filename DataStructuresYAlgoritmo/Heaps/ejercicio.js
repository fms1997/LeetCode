// Insertar los siguientes números en un Min-Heap y mostrar cómo queda el heap después de cada inserción.
// 10, 5, 20, 2


class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Obtener índice del padre
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Obtener índice del hijo izquierdo
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Obtener índice del hijo derecho
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Intercambiar valores
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insertar elemento
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Reordenar hacia arriba
  heapifyUp() {
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[index] < this.heap[this.getParentIndex(index)]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  // Mostrar heap
  print() {
    console.log(this.heap);
  }
}
const minHeap = new MinHeap();

minHeap.insert(10);
minHeap.print(); // [10]

minHeap.insert(5);
minHeap.print(); // [5, 10]

minHeap.insert(20);
minHeap.print(); // [5, 10, 20]

minHeap.insert(2);
minHeap.print(); // [2, 5, 20, 10]