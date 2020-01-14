
// 不变式
// A[p, k-1] 中是 L 和 R 中最小的 k-p 个元素且排序, L[i]和R[j]分别是L和R中的最小元素
// 初始状态: k=p, A[p, p-1]中包含0个元素自然排序, i =0, j=0, L[0], R[0]分别是最小元素
// 保持: 
    // 在迭代前 A[p, k-1] 中是 L 和 R 中最小的 k-p 个元素且排序, L[i]和R[j]分别是L和R中的最小元素, 
    // 一次迭代中, 将L[i]和R[j]中的较小者赋值给A[k], 并将 i或 j递增, 这样在迭代后A[p, k]仍然是L 和 R 中最小的 k-p+1 个元素且排序, L[i]和R[j]分别是L和R中的最小元素
// 终止: 终止时 k = r+1, A[p, r] 中是 L 和 R 中最小的 r-p+1 个元素且排序, 对L和R的合并完成

// A 是已排序的数组
// Infinity === Infinity 为什么 Infinity 不会被复制到 A 中, 结合递归树可知两个 Infinity 没有直接比较的机会
const merge = (A, p, q, r) => {
    let L = A.slice(p, q + 1)
    let R = A.slice(q + 1, r + 1)
    L.push(Infinity)
    R.push(Infinity)

    let i = 0
    let j = 0
    let k = p
    while(k <= r) {
        console.log(L[i], R[j])
        if(L[i] <= R[j]) {
            A[k] = L[i]
            i += 1
        } else {
            A[k] = R[j]
            j += 1
        }
        k += 1
    }
}

// 分治法
// 分解: 将对 A[p=0, r=length-1] 的排序分解为对 A[p, q] 和 A[q + 1, r] 两个数组的排序, 两个数组的长度为 length / 2, 对子数组继续二分, 直至 p == r, length = 1
// 解决: 当 p == r 时可以将两个长度为 1 的数组进行合并, 形成长度为 2 的已排序数组, 然后继续合并长度为 2 的数组, 直至数组长度为 length / 2
// 合并: 合并两个长度 length / 2 的已排序数组, 得到已排序的 A
const mergeSort = (A, p = 0, r = A.length - 1) => {
    if (p < r) {
        const q = Math.floor((p + r) / 2)
        // console.log(p,  q, r)
        mergeSort(A, p, q)
        mergeSort(A, q + 1, r)
        merge(A, p, q, r);
    }
}


if(require.main === module) {
    const list = [1, 3, 5, 7, 9, 2, 4, 6, 8]
    merge(list, 0, 4, list.length - 1)
    console.log(list)

     const list1 = [38, 545, 6, 9, 324, 1, 4, 564]
     const list2 = [5, 2, 4 , 7]
     // const list = [38, 545, 6]
     mergeSort(list1)
     console.log(list1)
}

module.exports = merge