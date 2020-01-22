
const { log, ensure, equalArray } = require('../utils')

// 循环不变式: A[p, r] 被划分为 2 个部分
// pivot = A[p]
// small = A[p, i]: 小于 pivot
// big = A[j, r]: 大于 pivot

// 初始化: small = A[p, p-1] 为空, big = A[r+1, r]为空
// 迭代: 
    // 找到 A[j] <= x, A[i] >= x
    // 如果 i < j, 交换 A[i], A[j], small 加入 A[j], big 加入 A[i]
    // i >= j 划分完毕
// 终止: 
const hoarePartition = (A, p, r) => {
    const x = A[p]
    let i = p
    let j = r
    while (true) {
        while (A[j] > x) {
            j -= 1
        }

        while (A[i] < x) {
            i += 1
        }

        if (i < j) {
            const temp = A[i]
            A[i] = A[j]
            A[j] = temp
        } else {
            return j
        }
    }
}

const quickSort = (A, p = 0, r = A.length - 1) => {
    if (p < r) {
        const q = hoarePartition(A, p, r)
        quickSort(A, p, q)
        quickSort(A, q + 1, r)
    }
    
}


if(require.main === module) {
    function testParttion1 () {
        const list = [3, 0, 1, 2, 4, 5, 6]
        ensure(hoarePartition(list, 0, list.length - 1) === 3, 'partion test 1')
        log(list)
    }

    function testParttion2() {
        const list = [4, 0, 1, 2, 3, 5, 6]
        ensure(hoarePartition(list, 0, list.length - 1) === 4, 'partion test 2')
    }

    function testParttion3() {
        const list = [2, 0, 1]
        ensure(hoarePartition(list, 0, list.length - 1) === 2, 'partion test 3')
    }

    function testParttion4() {
        const list = [0, 1, 2]
        ensure(hoarePartition(list, 0, list.length - 1) === 0, 'partion test 4')
    }

    function testParttion5() {
        const list = [1, 0]
        ensure(hoarePartition(list, 0, list.length - 1) === 1, 'partion test 5')
    }

    function testParttion6() {
        const list = [0, 1]
        ensure(hoarePartition(list, 0, list.length - 1) === 0, 'partion test 6')
    }

    function testParttion7() {
        const list = [0]
        ensure(hoarePartition(list, 0, list.length - 1) === 0, 'partion test 7')
    }

    function testParttion8() {
        const list = [0, 1, 2, 4, 3, 5, 6]
        ensure(hoarePartition(list, 3, list.length - 1) === 4, 'partion test 8')
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
    