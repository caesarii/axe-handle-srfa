
const log = console.log

// 用于实现 PriorityQueue 的堆
class MinHeap {
    constructor (A) {
        this.list = A
        this.size = A.length
        this.buildMinHeap(A)
    }

    buildMinHeap () {
        for(let i = Math.floor((this.list.length) / 2) + 1; i > -1; i--) {
            this.minHeapify(i);
        }
        log('minHeap', this.list)
    }

    minHeapify (i) {
        let min = i;
        const list = this.list
        const size = this.size
    
        const l = MinHeap.left(i)
        const r = MinHeap.right(i);
        
        if (l < size && list[l].key < list[i].key) {
            min = l
        }
        if (r < size && list[r].key < list[min].key) {
            min = r
        }
        if (min !== i) {
            const temp = list[i]
            list[i] = list[min]
            list[min] = temp
    
            this.minHeapify(min)
        }
    }

                   
    static parent (i) {
        return Math.floor((i - 1) / 2)
    }

    static left (i) {
        const l = 2 * i + 1;
        return l;
    }

    static right (i) {
        const r = 2 * i  + 2;
        return r;
    }
}

class MinPriorityQueue extends MinHeap {
    minimum () {
        return this.list[0]
    }

    extractMin () {
        if (this.size < 0) {
            return
        }
        const min = this.list[0]

        // 将最小值替换为堆中的最后一个元素
        this.list[0] = this.list[this.size - 1]
        this.list.length -= 1
        this.size = this.size - 1
        // 重建
        this.minHeapify(0)

        return min
    }

    // 这里直接传入的是要修改的元素的下标, 实际上应该传入待修改元素的 value 然后查找下标
    decreaseKey(i, key) {
        // 只支持减小 key
        if (key > this.list[i].key) {
            return 
        }

        this.list[i].key = key
        
        // 更改了key之后需要重建最大堆性质, 因为增加所以需要从下往上恢复, 不能使用 minHeapify
        // minHeapify 是从上往下恢复最大堆性质
        let parent = MinPriorityQueue.parent(i)
        while(i > -1 && parent > -1 && this.list[parent].key > key) {
            const temp = this.list[parent]
            this.list[parent] = this.list[i]
            this.list[i] = temp

            i = MinPriorityQueue.parent(i)
            parent = MinPriorityQueue.parent(i)
        }
        return this.list
    }

    insert(node) {
        this.size += 1

        // 先插入一个 key=-Infinity 的节点
        this.list[this.size - 1] = {...node, key: Infinity}

        // 将新节点的 key 设置为目标值
        this.decreaseKey(this.size - 1, node.key)
        return this.list
    }   
}

if(require.main === module) {

    // 用于实现优先队列的堆
    const list = [
        { key: 5, value: '5' },
        { key: 3, value: '3' },
        { key: 17, value: '17' },
        { key: 10, value: '10' },
        { key: 84, value: '84' },
        { key: 19, value: '19' },
        { key: 6, value: '6' },
        { key: 22, value: '22' },
        { key: 9, value: '9' }
    ]
    // new MinHeap(list)
    // 3, 5, 6, 9, 84, 19, 17, 22, 10

    // minimum
    // const queue = new MinPriorityQueue(list)
    // log('minimum', queue.minimum())
    // 3
    // extractMIn
    // log('extractMin', queue.extractMin())
    // 3
    // log('删除最小值的优先队列', queue.list)
    // [22, 10, 19, 9, 3, 17, 6, 5]

    // increaseKey
    const list2 = [
        { key: 16, value: '0' },
        { key: 14, value: '1' },
        { key: 10, value: '2' },
        { key: 8, value: '3' },
        { key: 7, value: '4' },
        { key: 9, value: '5' },
        { key: 3, value: '6' },
        { key: 2, value: '7' },
        { key: 4, value: '8' },
        { key: 1, value: '9' }
    ]
    const queue2 = new MinPriorityQueue(list2)
    // 将 { key: 14, value: '1' }, 的 key 减小到 0
    // log('decreaseKey', queue2.decreaseKey(9, 0))
    // 0 1 3 4 2 9 10 8 16 7

    // insert
    const node = { value: '10', key: 0}
    log('insert',  queue2.insert(node))
    // 0 1 3 4 2 9 10 8 16 14 7
}

module.exports = MinHeap