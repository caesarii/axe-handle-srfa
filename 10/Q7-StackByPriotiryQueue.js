
const PriorityQueue = require('../06/Q8-11-MaxPriorityQueue')
const log = console.log

// 基于优先队列实现栈
// 通过节点的 key 来控制进出, 栈是后进先出, 所以保证后进的元素的 key 大于先进, 然后 extractMax 弹出
// push: insert, key = this.size
// pop: extractMax
// empty: size === 0
// full: size === maxSize
class Stack {
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

    push (x) {
        if (this.full()) {
            throw new Error('overflow')  
        }
        this.list.insert({ value: x, key: this.list.size })
    }

    pop () {
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
    // 测试1: push
    const s1 = new Stack(5)
    s1.push(0)
    s1.push(1)
    s1.push(2)
    s1.push(3)
    s1.push(4)

    log('push: [0 1 2 3 4]', s1.print())

    // 测试2: overflow
    // s1.push(5)
    // Error: overflow

    // 测试3: pop and empty
    log('pop', s1.pop())  // 4
    s1.pop()
    s1.pop()
    s1.pop()
    log('[0]', s1.print())

     // 测试4: empty
    log('empty: false', s1.empty())
    s1.pop()
    log('empty: true', s1.empty())

    // 测试5: underflow
    s1.pop()
    // Error: underflow

}

module.exports = Stack