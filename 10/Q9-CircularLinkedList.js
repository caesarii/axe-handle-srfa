const log = console.log

class Node {
    constructor(key, sentinel) {
        this.key = key
        this.next = sentinel
    }
}

// 循环单向链表
// insert: 在头部插入元素
class LinkedList {
    constructor() {
        this.sentinel = {}
        this.sentinel.next = this.sentinel
    }

    search(k) {
        let x = this.sentinel.next
        while(x != this.sentinel && x.key !== k) {
            x = x.next
        }
        return x
    }

    insert(k) {
        const x = new Node(k, this.sentinel)
        x.next = this.sentinel.next
        this.sentinel.next = x
    }

    delete(k) {
        let x = this.sentinel
        while(x.next != this.sentinel && x.next.key !== k) {
            x = x.next
        }
        x.next = x.next.next
    }

    // 删除第一个元素
    deleteFirst () {
        const k = this.sentinel.next
        this.sentinel.next = this.sentinel.next.next
        return k
    }
    
    print() {
        const r = []
        let x = this.sentinel
        let i = 0
        while(i < 5) {
            r.push(x.key)
            x = x.next
            i++
        }
        return r
    }
}

if(require.main = module) {
    const list = new LinkedList()
    list.insert(3)
    list.insert(2)
    list.insert(1)
    list.insert(0)
    log(list.print())
    // 0 1 2 3

    log(list.search(2))
    // 2

    list.delete(2)
    log(list.print())
    // 0 1 3
    
}

module.exports = LinkedList