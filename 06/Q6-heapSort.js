const MaxHeap = require('./Q5-MaxHeap')
const log = console.log

const heapSort = (array) => {
    // 循环不变式: A[i, length-1] 中是 A 中最大的 length-i+1 个元素, 并排序, A[0] 是 A[0, i] 的最大元素
    // 初始: i = length - 1, A[...] 中不包含元素, 根据最大堆的性质 A[0] 是 A[0, length-1]的最大元素
    // 迭代: 依次迭代中首先将 A[0] 与 A[i] 进行交换, 这样 A[i, length-1]是 A 中最大的 length-i+1 个元素, 然后将 size 设置为 i, 即未排序的元素并进行 maxHeapify, 求出下一个最大元素
    
        // 将该元素与 A[i] 进行交换, 在迭代后 A[i, size-1] 中是 A 中最大的 size - i 个元素
    // 结束: i = 0, A[0, size-1]
    // // 交换第一个元素和最后一个元素

    const maxHeap = new MaxHeap(array)
    const list = maxHeap.list
    
    for(let i  = list.length - 1; i > 0; i--) {
        // 交换
        const temp = list[0]
        list[0] = list[i]
        list[i] = temp

        // 将已排序的元素排除
        maxHeap.size = i
    
        // 求下一个最大元素
        maxHeap.maxHeapify(0)
    }
    return list
}

if(require.main === module) {
    log('heap sort', heapSort([5, 3, 17, 10, 84, 19, 6, 22, 9]))
    // [ 3, 5, 6, 9, 10, 17, 19, 22, 84 ]
}