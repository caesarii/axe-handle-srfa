// 冒泡排序

// 内循环不变式
// 不变式: A[i, length-1] 中包含 i 到 length-1 的元素 length-1-i个元素, A[i]是最小值, (其他元素未排序)
// 初始状态: i = length-1, A[length-1, length-1]只包含一个元素, 自然是最小的
// 保持: 在一次迭代中, 增量加入A[i-1], 如果A[i] < A[i-1] 则进行交换, 保证A[i-1]就是 A[i-1, length-1]中最小的元素
// 终止 i = j, A[j, length-1] 包含 j 到 length-1 的元素, 且 A[j] 是最小值

// 外循环不变式
// A[0, j-1] 包含数组中最小的 j 个元素, 而且排序
// 初始状态: j = 0, A[0, -1] 不包含元素
// 保持: 一次迭代中, 根据内循环的终止状态, A[j]成为第 j 号最小元素
// 终止: 终止时 j = A.length-2, 最后一次迭代的内循环发生在 A[length-2, length-1]上, 迭代之后A[0, length-2] 包含排序的数组中最小的length-1个元素, A[length-1]是数组中的最大值, A是已排序的

const bubbleSort = (A) => {
    // i 表示需要排序的元素的个数, 第一个元素不需要排序
    // i 循环执行一次就对当前数组的最后一个元素进行一遍冒泡, 也就排好了一个元素
    // i 及 i 之前是排序好的元素
    for(let j = 0; j < A.length - 2; j++) {
        // 对最后一个元素进行冒泡
        // A[j] 是当前要冒泡的元素
        // A[j] 最高冒泡到 j + 1 的位置
        for(let i = A.length - 1; i >= j + 1; i --) {
            // 对较小的元素进行冒泡
            if(A[i] < A[i - 1]) {
                const tmp = A[i]
                A[i] = A[i - 1]
                A[i - 1] = tmp
            }
        }
    }
}


if(require.main === module) {
    // const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    const list = [2, 4, 5, 7, 1, 2, 3, 6]
    bubbleSort(list)
    console.log(list)
}

module.exports = bubbleSort