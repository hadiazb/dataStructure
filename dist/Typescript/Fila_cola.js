"use strict";
// Fila / Cola
class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.end = 0;
    }
    enqueue(data) {
        this.items[this.end] = data;
        this.end++;
    }
    dequeue() {
        if (this.front === this.end) {
            return null;
        }
        const data = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return data;
    }
    getSize() {
        return this.end - this.front;
    }
    isEmpty() {
        if (this.getSize() === 0) {
            return true;
        }
        return false;
    }
    peek() {
        if (this.getSize() === 0) {
            return null;
        }
        return this.items[this.front];
    }
    print() {
        if (this.getSize() === 0) {
            return null;
        }
        let result = '[';
        for (let i = this.front; i < this.end; i++) {
            if (i + 1 !== this.end) {
                result += this.items[i] + ', ';
            }
            else {
                result += this.items[i] + ']';
            }
        }
        return result;
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue('Soy la roca');
queue.enqueue(true);
queue.dequeue();
console.log(queue.print());
