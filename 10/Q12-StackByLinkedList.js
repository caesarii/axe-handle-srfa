
// 基于单链表的栈
// 实现了 insert 和 deleteFirst 的链表本身就是栈
const LinkedList = require('./Q9-CircularLinkedList')
const log = console.log

class Stack {
    constructor (size) {
        this.list = new LinkedList()
        this.size = 0
        this.maxSize = size
    }

    empty () {
        return this.size === 0
    }

    full () {
        return this.maxSize <= this.size
    }

    push (x) {
        if (this.full()) {
            throw new Error('overflow')
        }
        this.list.insert(x)
        this.size ++
    }

    pop () {
        if (this.empty()) {
            throw new Error('underflow')
        }
        this.size --
        return this.list.deleteFirst()
    }

    // 测试
    print () {
        return this.list.print(0, this.top + 1)
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
    s1.pop()
    // Error: underflow

}

module.exports = Stack