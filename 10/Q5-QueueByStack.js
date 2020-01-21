
const Stack = require('./Q1-StackByArray')
const log = console.log

// 两个栈实现一个队列
// stackHead 出栈, stackTail 入栈
// 入栈:  stackTail.push
// 出栈: 如果 stackHead 为空, 将 stackTail 依次弹出并压入 stackHead, 弹出栈顶. 如果 stackHead 不为空, 直接弹出栈顶
class Queue {
    constructor (size) {
        this.stackHead = new Stack(size)
        this.stackTail = new Stack(size)
        this.size = size
    }

    empty () {
        return this.stackTail.top + 1 + this.stackHead.top + 1 === 0;
    }

    full () {
        return this.stackTail.top + 1 + this.stackHead.top + 1 === this.size
    }

    enqueue (x) {
        if (this.full()) {
            throw new Error('overflow')
        } 

        this.stackTail.push(x)
    }

    dequeue () {
        if (this.empty()) {
            throw new Error('underflow')
        }       

        if (this.stackHead.empty()) {
            while(!this.stackTail.empty()) {
                this.stackHead.push(this.stackTail.pop())
            }
        } 
        let x = this.stackHead.pop()
        return x
    }

    // 测试
    print () {
        return [...this.stackTail.print(), ...this.stackHead.print()]
    }
}

if(require.main === module) {
    // 测试1: push
    const s1 = new Queue(4)
    s1.enqueue(0)
    s1.enqueue(1)
    s1.enqueue(2)
    s1.enqueue(3)

    log('enqueue: [0 1 2 3]', s1.print())

    // 测试2: overflow
    // s1.enqueue(4)
    // Error: overflow

    // 测试3: pop
    s1.dequeue()
    s1.dequeue()
    s1.dequeue()
    log('dequeue: [3]', s1.print())

     // 测试4: empty
    log('empty: false', s1.empty())
    s1.dequeue()
    log('empty: true', s1.empty())

    // 测试5: underflow
    s1.dequeue()
    // Error: underflow
}

module.exports = Queue