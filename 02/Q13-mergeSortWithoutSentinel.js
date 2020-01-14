
// 实现没有哨兵的 merge
const merge = (A, p, q, r) => {
    let L = A.slice(p, q + 1)
    let R = A.slice(q + 1, r + 1)

    let i = 0
    let j = 0
    let k = p
    while(k <= r) {
        if (L[i] && R[j]) {
            console.log(L[i], R[j])
            if(L[i] <= R[j]) {
                A[k] = L[i]
                i += 1
            } else {
                A[k] = R[j]
                j += 1
            }
        } else {
            if(L[i]) {
                A[k] = L[i]
                i += 1
            } else {
                A[k] = R[j]
                j += 1
            }
        }

        k += 1
    }
}

const mergeSort = (A, p = 0, r = A.length - 1) => {
    if (p < r) {
        const q = Math.floor((p + r) / 2)
        mergeSort(A, p, q)
        mergeSort(A, q + 1, r)
        merge(A, p, q, r);
    }
}


if(require.main === module) {
    const list = [1, 3, 5, 7, 9, 10, 2, 4, 6, 8]
    merge(list, 0, 5, list.length - 1)
    console.log(list)

    //  const list1 = [38, 545, 6, 9, 324, 1, 4, 564]
    //  const list2 = [5, 2, 4 , 7]
    //  mergeSort(list1)
    //  console.log(list1)
}

module.exports = merge