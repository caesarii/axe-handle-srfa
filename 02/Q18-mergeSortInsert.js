
// 改造一个接受起止点参数的 insertSort, insert(A, p, r) 对 A[p, r]进行排序
const insertSort = (A, p = 0, r = A.length - 1) => {
    for(let j = p + 1; j < r + 1; j++){

        const key = A[j]

        let i;
        for(i = j - 1; i > p - 1; i--) {
            if (A[i] > key) {
                A[i + 1] = A[i]
            } else {
                break;
            }
        }
        A[i + 1] = key;
    }
}

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
        // 数组长度小于 4 时使用 insertSort
        if (r - p + 1 < 4) {
            insertSort(A, p, r)
        }
        const q = Math.floor((p + r) / 2)
        // console.log(p,  q, r)
        mergeSort(A, p, q)
        mergeSort(A, q + 1, r)
        merge(A, p, q, r);
    }
}


if(require.main === module) {
    const list0 = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    insertSort(list0, 1, 4)
    
    // const list = [1, 3, 5, 7, 9, 2, 4, 6, 8]
    // merge(list, 0, 4, list.length - 1)
    // console.log(list)

     const list1 = [38, 545, 6, 9, 324, 1, 4, 564]
     const list2 = [5, 2, 4 , 7]
     // const list = [38, 545, 6]
     mergeSort(list0)
     console.log(list0)
}

module.exports = merge