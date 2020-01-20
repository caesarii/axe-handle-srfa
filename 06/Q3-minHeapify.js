
const log = console.log
const MaxHeap = require('./Q6-MaxHeap')


    

 

    // 用于从恢复 A[i] 树的最小堆性质
    // list 参数是为了单独测试 minHeapify, 传递 list 参数的情况下该方法是不依赖与类的数据的
const minHeapify = (i, list) => {
    let min = i;

    const l = MaxHeap.left(i)
    const r = MaxHeap.right(i);

    if (l < list.length && list[l] < list[i]) {
        min = l
    }
    if (r < list.length && list[r] < list[min]) {
        min = r
    }
    if (min !== i) {
        const temp = list[i]
        list[i] = list[min]
        list[min] = temp

        minHeapify(min, list)
    }
    return list
}

if(require.main === module) {
    log('minHeapify 1', minHeapify(1, [1, 10, 2, 8, 14, 3, 7, 11, 12]))
    // [1, 8, 2, 10, 14, 3, 7, 11, 12]
}
