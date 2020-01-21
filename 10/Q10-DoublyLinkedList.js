const log = console.log

class Node {
    constructor(key) {
        this.key = key
        this.next = null
        this.prev = null
    }
}

// 双向链表
// insert: 在头部插入元素
class DoublyLinkedList {
    constructor() {
        this.head = null
    }

    search(k) {
        let x = this.head
        while(x !== null && x.key !== k) {
            x = x.next
        }
        return x
    }

    insert(k) {
        const x = new Node(k)
        x.next = this.head
        // x.prev = null
        if (this.head !== null) {
            this.head.prev = x
        }
        this.head = x
    }

    delete(k) {
        const x = this.search(k)
        if (x.prev !== null) {
            x.prev.next = x.next
        } else {
            // x 的前驱是 head
            this.head = x.next
        }

        if (x.next !== null) {
            x.next.prev = x.prev
        }
    }
    
    print() {
        const r = []
        let x = this.head
        while(x !== null) {
            r.push(x.key)
            x = x.next
        }
        return r
    }
}

if(require.main = module) {
    const list = new DoublyLinkedList()
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