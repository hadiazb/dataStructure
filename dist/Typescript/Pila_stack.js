"use strict";
// Lista ordenada o estructura de datos  que permite almacenar y recuperar
// datos, el modo de acceso a sus elementos  es de tipo LIFO
class Stack {
    constructor() {
        this.items = {};
        this.top = 0;
    }
    push(data) {
        this.top++;
        this.items[this.top] = data;
    }
    pop() {
        let deletedData;
        if (this.top) {
            deletedData = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedData;
        }
        return null;
    }
    getSize() {
        return this.top;
    }
    isEmpty() {
        if (!this.getSize()) {
            return true;
        }
        else {
            return false;
        }
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.top];
    }
    print() {
        if (this.getSize() === 0) {
            return null;
        }
        let result = '[';
        for (let i = this.top; i > 0; i--) {
            if (i !== 1) {
                result += this.items[i] + ', ';
            }
            else {
                result += this.items[i] + ']';
            }
        }
        return result;
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(8);
stack.push(10);
console.log('Stack =>', stack);
console.log('Tamaño =>', stack.getSize());
console.log('Valor Eliminado =>', stack.pop());
console.log('Stack =>', stack);
console.log('isEmpty', stack.isEmpty());
console.log('Peek =>', stack.peek());
console.log('Print =>', stack.print());
