
const { log, ensure, equalArray } = require('../utils')

// 循环不变式: A[p, r] 被划分为 4 个部分
// pivot = A[r]: 主元
// unknown = A[j, r-1]: 与 pivot 的大小关系待确定
// big = A[i+1, j-1]: 大于 pivot
// small = A[p, i]: 小于 pivot

// 初始化: pivot = A[r] 是主元, unknown = A[p, r-1] 是所有待处理的元素, small = A[p, p-1] 为空, big = A[p, p-1]为空
// 迭代: 
    // A[r] 是主元
    // 如果 A[j] > A[r], 不进行操作, j++, big 中加入 A[j], small 不变, unknown 减少一个元素
    // 如果 A[j] <= A[r], 则 i++, 将 A[i] 与 A[j]进行交换, small 中增加 A[j], big 中加上 A[i] (i++后, A[i]是 big 的第一个元素, A[i] 被交换到 j, 在 j++ 后纳入 big, 所以交换的结果, small中加入A[j], A[i]从 big 的开始换到最后), unknown 减少一个元素
// 终止: j = r
    // A[r] 是主元
    // unknow = A[r, r-1] 为空
    // small = A[p, i]
    // big = A[i+1, r-1]
    // 交换 A[r] 与 A[i+1], 将 A[r] 加入 small, big 的第一个元素放到最后
    // 这样 small = A[p, i+1], big = A[i+2, r]

const partition = (A, p, r) => {
    let i = p - 1
    for(let j = p; j < r; j++) {
        if (A[j] <= A[r]) {
            i = i + 1
            const temp = A[i]
            A[i] = A[j]
            A[j] = temp
        }
    }
        
    const temp = A[i + 1]
    A[i + 1] = A[r]
    A[r] = temp

    return i + 1
}

const quickSort = (A, p = 0, r = A.length - 1) => {
    if (p < r) {
        const q = partition(A, p, r)
        quickSort(A, p, q - 1)
        quickSort(A, q + 1, r)
    }
    
}


if(require.main === module) {
    function testParttion1 () {
        const list = [0, 1, 2, 4, 5, 6, 3]
        ensure(partition(list, 0, list.length - 1) === 3, 'partion test 1')
    }

    function testParttion2() {
        const list = [0, 1, 2, 3, 5, 6, 4]
        ensure(partition(list, 0, list.length - 1) === 4, 'partion test 2')
    }

    function testParttion3() {
        const list = [0, 1, 2]
        ensure(partition(list, 0, list.length - 1) === 2, 'partion test 3')
    }

    function testParttion4() {
        const list = [1, 2, 0]
        ensure(partition(list, 0, list.length - 1) === 0, 'partion test 4')
    }

    function testParttion5() {
        const list = [0, 1]
        ensure(partition(list, 0, list.length - 1) === 1, 'partion test 5')
    }

    function testParttion6() {
        const list = [1, 0]
        ensure(partition(list, 0, list.length - 1) === 0, 'partion test 6')
    }

    function testParttion7() {
        const list = [0]
        ensure(partition(list, 0, list.length - 1) === 0, 'partion test 7')
    }

    function testParttion8() {
        const list = [0, 1, 2, 3, 5, 6, 4]
        ensure(partition(list, 3, list.length - 1) === 4, 'partion test 8')
    }

    function testQuickSort1 () {
        const list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
        quickSort(list)
        ensure(equalArray(list, [ 1, 4, 6, 9, 17, 38, 324, 545, 564, 754 ]), 'quick sort test 1')
    }

    function testQuickSort2 () {
        const list = [2, 8, 7, 1, 3, 5, 6, 4]
        quickSort(list)
        ensure(
            equalArray(list, [ 1, 2, 3, 4, 5, 6, 7, 8 ]),
            'quick sort test 2'
        )
    }

    

    testParttion1()
    testParttion2()
    testParttion3()
    testParttion4()
    testParttion5()
    testParttion6()
    testParttion7()
    testParttion8()

    testQuickSort1()
    testQuickSort2()
}
    