const log = console.log

// 双端队列
//  head 指向队头元素, tail 指向下一个元素插入的位置
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
        log('tail', this.tail)
        this.tail = (this.tail + 1) % this.size
    }

    enqueueHead (x) {
        if (this.full()) {
            throw new Error('overflow')
        } 

        this.head = (this.head - 1 + this.size) % this.size
        log('head', this.head)
        this.list[this.head] = x
        
    }

    dequeue () {
        if (this.empty()) {
            throw new Error('underflow')
        }

        const x = this.list[this.head]
        this.head = (this.head + 1) % this.size
        return x
    }

    dequeueTail () {
        if (this.empty()) {
            throw new Error('underflow')
        }

        this.tail = (this.tail - 1 + this.size) % this.size
        
        const x = this.list[this.tail]
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
    s1.enqueueHead(2)
    s1.enqueueHead(3)

    log('enqueue: [0 1, , 3 2]', s1.list)

    // 测试2: overflow
    // s1.enqueue(4)
    // Error: overflow
    // s1.enqueueHead(4)s

    // 测试3: pop
    s1.dequeue()            
    s1.dequeueTail()
    log('dequeue: [2 0]', s1.print())

     // 测试4: empty
    log('empty: false', s1.empty())
    s1.dequeue()
    s1.dequeueTail()
    log('empty: true', s1.empty())

    // 测试5: underflow
    // s1.dequeue()
    // Error: underflow

}