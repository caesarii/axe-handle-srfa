
// 分治法
// 分解: 将 A[p=0, r=length-1] 二分为对A[p, q] 和 A[q+1, r] 两个数组
// 解决: 
    // 如果 A[q] == target, 问题得到解决
    // 或者根据 A[q] 的大小选择一个数组进行进行二分, 直至 p == r == q, length == 1, 此时 A[q] 要么是 target, 要么 A 中不包含 target, 问题得到解决
// 合并: 不需要合并

// 递归树: 二分查找不会对所有两分产生的数组进行递归, 每次只递归其中一个
const binarySearch = (A, target, p = 0, r = A.length -  1) => {
    const q = Math.floor((p + r) / 2)
    if (A[0] > target || A[A.length - 1] < target) {
        return -1
    }

    if (A[q] === target) {
        return q
    } else if (A[q] < target) {
        return binarySearch(A, target, q+1, r)
    } else {
        return binarySearch(A, target, p, q)
    }
}

if(require.main === module) {
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    // console.log(binarySearch(list, 0))
    // console.log(binarySearch(list, 1))
    // console.log(binarySearch(list, 2))
    // console.log(binarySearch(list, 3))
    // console.log(binarySearch(list, 4))
    console.log(binarySearch(list, 18))
}

module.exports = binarySearch
