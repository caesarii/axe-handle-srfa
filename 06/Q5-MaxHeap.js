
const log = console.log

class MaxHeap {
    constructor (A) {
        this.list = A
        // size 表示 list 在堆中的数据的量
        this.size = A.length
        this.buildMaxHeap(A)
    }

    buildMaxHeap () {
        // 循环不变式: 节点 i 是一个最大堆的根节点
        // 初始化: i = n/2 +1 , 根据最大堆的 n/2+1...n 都是叶节点的性质, i 是第一个叶节点, 是只包含自身的最大堆
        // 迭代: 在一次迭代前, 以 i 为根节点的树是最大堆, 迭代中对 i - 1 调用 maxHeapify, maxHeapify 保证了 i-1 和 i 最大堆构成的树是最大堆
        // 终止: i = 0, 整个数组都是最大堆

        // 叶节点总数是 (n+1)/2, 所以对n/2之前的节点调用 maxHeapify 即可建立最大堆
        for(let i = Math.floor((this.list.length) / 2) + 1; i > -1; i--) {
            this.maxHeapify(i);
        }
        log('maxHeap', this.list)
    }

    maxHeapify (i) {
        let max = i;
        const list = this.list
        const size = this.size
    
        const l = MaxHeap.left(i)
        const r = MaxHeap.right(i);
        
        if (l < size && list[l] > list[i]) {
            max = l
        }
        if (r < size && list[r] > list[max]) {
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

if(require.main === module) {
    new MaxHeap([5, 3, 17, 10, 84, 19, 6, 22, 9])
    // [ 84, 22, 19, 10, 3, 17, 6, 5, 9 ]
}

module.exports = MaxHeap