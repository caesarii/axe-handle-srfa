
const Queue = require('./Q2-QueueByArray')
const log = console.log

// 用两个队列实现栈
// queueTail, queueBottom 交替作为栈使用
// push: 将数据入队到一个空队列, 再将另一个队列加入当前队列
// pop: 从非空的队列出列一个数据

class Stack {
    constructor (size) {
        this.size = size
        this.queueTop = new Queue(size+1)
        this.queueBottom = new Queue(size+1)
    }

    empty () {
        return this.top === -1
    }

    full () {
        return this.top > this.size - 1
    }

    push (x) {
        if (this.queueTop.empty()) {
            this.queueTop.enqueue(x)
            while(!this.queueBottom.empty()) {
                this.queueTop.enqueue(this.queueBottom.dequeue())
            }
        } else {
            this.queueBottom.enqueue(x)
            while(!this.queueTop.empty()) {
                this.queueBottom.enqueue(this.queueTop.dequeue())
            }
        }
    }

    pop () {
        if (this.queueTop.empty() && this.queueTop.empty()) {
            throw new Error('underflow')
        }
        if (!this.queueTop.empty()) {
            return this.queueTop.dequeue()
        }
        if (!this.queueBottom.empty()) {
            return this.queueBottom.dequeue()
        }
    }

    // 测试
    print () {
        return [...this.queueTop.print(), ...this.queueBottom.print()]
    }
}

if(require.main === module) {
    // 测试1: push
    const s1 = new Stack(5)
    s1.push(0)
    s1.push(1)
    s1.push(2)
    s1.push(3)
    s1.push(4)

    log('push: [4 3 2 1 0]', s1.print())

    // 测试2: overflow
    // s1.push(5)
    // Error: overflow

    // 测试3: pop and empty
    s1.pop()
    s1.pop()
    s1.pop()
    s1.pop()
    log('[0]', s1.print())

     // 测试4: empty
    log('empty: false', s1.empty())
    s1.pop()
    log('empty: true', s1.empty())

    // 测试5: underflow
    // s1.pop()
    // Error: underflow

}