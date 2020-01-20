
// 基于数组的队列
// 数据保存数组 list 中, 队列的大小是 size, 但只能存放 size-1 个元素
// head 指向队头元素, tail 指向下一个元素插入的位置
// head 和 tail 构成一个环序, 当 head/tail > this.length - 1 时, 令 head/tail = 0
// empty: 队列是否为空,  this.tail === this.head
// enqueue: 从队尾入列一个数据
// dequeue: 从队头出列一个数据
// head = tail + 1时, 队列是满的, 此时插入称为上溢
// 对空队列进行 dequeue 称为 下溢

const log = console.log

class Queue {
    constructor (size) {
        this.list = []
        this.size = size
        this.head = 0
        this.tail = 0
    }

    empty () {
        return this.head === this.tail
    }

    full () {
        return (this.tail + 1) % this.size === this.head
    }

    enqueue (x) {
        if (this.full()) {
            throw new Error('overflow')
        } 

        this.list[this.tail] = x
        this.tail = (this.tail + 1) % this.size
    }

    dequeue () {
        if (this.empty()) {
            throw new Error('underflow')
        }

        const x = this.list[this.head]
        this.head = (this.head + 1) % this.size
        return x
    }

    // 测试
    print () {
        if (this.head < this.tail) {
            return this.list.slice(this.head, this.tail)
        } else {
            return [...this.list.slice(this.head), ...this.list.slice(0, this.tail)]
        }
    }
}

if(require.main === module) {
    // 测试1: push
    const s1 = new Queue(5)
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