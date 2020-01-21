const log = console.log

class Node {
    constructor(key, sentinel) {
        this.key = key
        this.next = sentinel
        this.prev = sentinel
    }
}

// 添加 sentinel 实现双向循环链表
// sentinel 是一个空对象, 其 prev 和 next 都指向自身, 与 head 不同, head 只是指向第一个节点
// Node 的 next 和 prev 的默认值都是  sentinel

class DoublyLinkedList {
    constructor() {
        this.sentinel = {}
        this.sentinel.next = this.sentinel
        this.sentinel.prev = this.sentinel
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
        x.prev = this.sentinel

        this.sentinel.next.prev = x
        this.sentinel.next = x
    }

    delete(k) {
        const x = this.search(k)
        x.prev.next = x.next
        x.next.prev = x.prev
    }
    
    // 测试
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
    const list = new DoublyLinkedList()
    log(list)
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