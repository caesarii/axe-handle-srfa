
// 必须使用没有哨兵的 merge
const merge = (A, p, q, r, count) => {
    let L = A.slice(p, q + 1)
    let R = A.slice(q + 1, r + 1)

    let i = 0
    let j = 0
    let k = p
    while(k <= r) {
        if (L[i] && R[j]) {
            if(L[i] <= R[j]) {
                A[k] = L[i]
                i += 1
            } else {
                // 计数
                count.value += L.length - i

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
    return count.value
}

// 为了方便, count 使用引用类型值
const inversionCount = (A, p = 0, r = A.length - 1, count = { value: 0}) => {
    if (p < r) {
        const q = Math.floor((p + r) / 2)
        // console.log(p,  q, r)
        inversionCount(A, p, q, count)
        inversionCount(A, q + 1, r, count)
        merge(A, p, q, r, count);
    }
    return count.value
}


if(require.main === module) {
    // const list = [1, 3, 5, 7, 9, 2, 4, 6, 8]
    // merge(list, 0, 4, list.length - 1)
    // console.log(list)

     const list1 = [38, 545, 6, 9, 324, 1, 4, 564]
     const list2 = [5, 2, 4 , 7]
     const list3 = [2, 3, 8, 6, 1]
     // const list = [38, 545, 6]
     console.log(inversionCount(list3))
}

module.exports = merge