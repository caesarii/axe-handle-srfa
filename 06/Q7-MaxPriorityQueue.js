
const log = console.log

// 用于实现 PriorityQueue 的堆
// 只需要将 maxHeapify 中数组元素的比较修改为对象的 key 的比较
class MaxHeap {
    constructor (A) {
        this.list = A
        this.size = A.length
        this.buildMaxHeap(A)
    }

    buildMaxHeap () {
        for(let i = Math.floor((this.list.length) / 2) + 1; i > -1; i--) {
            this.maxHeapify(i);
        }
        // log('maxHeap', this.list)
    }

    maxHeapify (i) {
        let max = i;
        const list = this.list
        const size = this.size
    
        const l = MaxHeap.left(i)
        const r = MaxHeap.right(i);
        
        if (l < size && list[l].key > list[i].key) {
            max = l
        }
        if (r < size && list[r].key > list[max].key) {
            max = r
        }
        if (max !== i) {
            const temp = list[i]
            list[i] = list[max]
            list[max] = temp
    
            this.maxHeapify(max)
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

class MaxPriorityQueue extends MaxHeap {
    maximum () {
        return this.list[0]
    }

    extractMax () {
        if (this.size < 0) {
            return
        }
        const max = this.list[0]

        // 将最大值替换为堆中的最后一个元素
        this.list[0] = this.list[this.size - 1]
        this.length -= 1
        this.size = this.size - 1
        // 重建最大堆
        this.maxHeapify(0)

        return max
    }

    // 这里直接传入的是要修改的元素的下标, 实际上应该传入待修改元素的 value 然后查找下标
    increaseKey(i, key) {
        // 只支持增加 key
        if (key < this.list[i].key) {
            return 
        }

        this.list[i].key = key
        
        // 更改了key之后需要重建最大堆性质, 因为增加所以需要从下往上恢复, 不能使用 maxHeapify
        // maxHeapify 是从上往下恢复最大堆性质
        let parent = MaxPriorityQueue.parent(i)
        log('increase', i, parent, this.list[parent])
        while(i > -1 && parent > -1 && this.list[parent].key < key) {
            const temp = this.list[parent]
            this.list[parent] = this.list[i]
            this.list[i] = temp

            i = MaxPriorityQueue.parent(i)
            parent = MaxPriorityQueue.parent(i)
        }
        return this.list
    }

    insert(node) {
        this.size += 1

        // 先插入一个 key=-Infinity 的节点
        this.list[this.size - 1] = {...node, key: -Infinity}

        // 将新节点的 key 设置为目标值
        this.increaseKey(this.size - 1, node.key)
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
    // new MaxHeap(list)
    // [ 84, 22, 19, 10, 3, 17, 6, 5, 9 ]

    // maximum
    const queue = new MaxPriorityQueue(list)
    // log('maximum', queue.maximum())
    // 84
    // extractMax
    log('extractMax', queue.extractMax())
    // 84
    log('删除最大值的优先队列', queue.list)
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
    // const queue2 = new MaxPriorityQueue(list2)
    // 将 { key: 4, value: '8' } 的 key 增加到 15
    // log('increaseKey', queue2.increaseKey(8, 15))
    // 16 15 10 14 7 9 3 2 8 1

    // insert
    const node = { value: '10', key: 18}
    // log('insert',  queue2.insert(node))
    // 18 16 10 8 14 9 3 2 4 1 7
   
}

module.exports = MaxHeap