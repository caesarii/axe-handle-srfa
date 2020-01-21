const log = console.log

class Node {
    constructor(key) {
        this.key = key
        this.next = null
    }
}

// 单向链表
// insert: 在头部插入元素
class LinkedList {
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
        this.head = x
    }

    delete(k) {

        if (this.head.key === k) {
            this.head = this.head.next
        } else {
            let x = this.head
            while(x.next !== null && x.next.key !== k) {
                x = x.next
            }
            x.next = x.next.next
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