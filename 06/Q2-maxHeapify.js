const MaxHeap = require('./Q5-MaxHeap')
const log = console.log 

// 用于从恢复 A[i] 树的最大堆性质
const maxHeapify = (i, list) => {
    let max = i;

    const l = MaxHeap.left(i)
    const r = MaxHeap.right(i);
    
    if (l < list.length && list[l] > list[i]) {
        max = l
    }
    if (r < list.length && list[r] > list[max]) {
        max = r
    }
    if (max !== i) {
        const temp = list[i]
        list[i] = list[max]
        list[max] = temp

        maxHeapify(max, list)
    }
    return list
}

if(require.main === module) {

    log('maxHeapify 1', maxHeapify(1, [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]))
    // [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]

    // 如果两棵子树不是最大堆有影响吗: 有影响
    // 交换 8 与 14
    // 在左子树本身不符合最大堆性质时, 在调用 maxHeapify 后可能仍不符合 
    log('maxHeapify 2', maxHeapify(1, [16, 4, 10, 8, 7, 9, 3, 2, 14, 1]))
    // [ 16, 8, 10, 14, 7, 9, 3, 2, 4, 1 ]

    log('maxHeapify 3', maxHeapify(2, [27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0 ]))
    // 27 17 10 16 13 9 1 5 7 12 4 8 3 0
}

module.exports = maxHeapify