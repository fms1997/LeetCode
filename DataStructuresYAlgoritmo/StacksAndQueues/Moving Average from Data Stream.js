class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.sum = 0;
  }

  next(val) {
    this.queue.push(val);
    this.sum += val;

    if (this.queue.length > this.size) {
      this.sum -= this.queue.shift();
    }

    return this.sum / this.queue.length;
  }
}

const m = new MovingAverage(3);
console.log(m.next(1));  // 1.0
console.log(m.next(10)); // (1+10)/2 = 5.5
console.log(m.next(3));  // (1+10+3)/3 = 4.666...
console.log(m.next(5));  // (10+3+5)/3 = 6.0