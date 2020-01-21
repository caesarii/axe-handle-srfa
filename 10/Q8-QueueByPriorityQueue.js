
const PriorityQueue = require('../06/Q8-11-MaxPriorityQueue')
const log = console.log

// 基于优先队列实现队列
// 通过节点的 key 来控制进出, 队列是先进先出, 所以保证先进的元素的 key 大于后进, 然后 extractMax 弹出
// enqueue: insert, key = this.maxSize - this.size, 
// dequeue: extractMax
// empty: size === 0
// full: size === maxSize

class Queue {
    constructor (size) {
        this.list = new PriorityQueue([])
        this.maxSize = size
    }

    empty () {
        return this.list.size === 0
    }

    full () {
        return this.list.size === this.maxSize
    }

    enqueue (x) {
        if (this.full()) {
            throw new Error('overflow')
        } 
        this.list.insert({ value: x, key: this.maxSize - this.list.size })        
    }

    dequeue () {
        if (this.empty()) {
            throw new Error('underflow')
        }

        return this.list.extractMax()
    }

    // 测试
    print () {
        return this.list.list.slice(0, this.list.size + 1)
    }
}

if(require.main === module) {
    // 测试1: enqueue
    const s1 = new Queue(4)
    s1.enqueue(0)
    s1.enqueue(1)
    s1.enqueue(2)
    s1.enqueue(3)

    log('enqueue: [0 1 2 3]', s1.print())

    // 测试2: overflow
    // s1.enqueue(4)
    // Error: overflow

    // 测试3: dequeue
    log('dequeue', s1.dequeue())
    log(s1.dequeue())
    log(s1.dequeue())
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