
const log = console.log
const binarySearch = (A, target, p = 0, r = A.length -  1) => {
    const q = Math.floor((p + r) / 2)

    // 为了实现插入, 需要处理 A 不包含 target 的情况
    if (p >= r) {
        return target >= A[p] ? p + 1: p;
    }

    if (A[q] === target) {
        return q
    } else if (A[q] < target) {
        return binarySearch(A, target, q+1, r)
    } else {
        return binarySearch(A, target, p, q)
    }
}

// 循环不变式是指 A[0, j-1], 该数组中包含元素组中 0 到 j-1 的元素, 而且是已排序的
// 初始化: 初始状态 j = 1, A[0] 自然是已排序的
// 保持: 
    // 在迭代前, A[0, j-1]满足循环不变式
    // 在一次迭代中, 1. 通过 binarySearch 找到要插入的位置 k, 2. 对 A[k, j-1] 进行遍历将所有元素后移一位, 3. 在内循环终止时, i = k - 1, 所以将 key 插入到 A[i + 1], 即A[j]插入到 k, 形成A[0, j], 也满足循环不变式
// 终止: 在循环终止时, j = A.length, A[0, A.length - 1] 是已排序的 A
const insertSort = (A) => {
    for(let j = 1; j < A.length; j++){
        const key = A[j]
        const k = binarySearch(A, key, 0, j-1)
        console.log('k',k )
        // 插入排序的内循环做了查找和交换两件事, 使用二分查找之后, 
        let i;
        for(i = j - 1; i >= k; i--) {
            A[i + 1] = A[i]
        }
        console.log('i', i)
        A[i + 1] = key;
    }
}


if(require.main === module) {
    const list = [0, 2, 4, 5, 6]
    // console.log(binarySearch(list, 2, 0, 1))
    // console.log(binarySearch(list, 1))
    // console.log(binarySearch(list, 2))
    // console.log(binarySearch(list, 3))
    // console.log(binarySearch(list, 4))
    // console.log(binarySearch(list, 5))

    const list2 = [38, 545,  6, 9, 324, 1, 4, 564,17, 754]
    insertSort(list2)
    log(list2)
}

