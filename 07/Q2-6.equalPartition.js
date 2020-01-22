const { log, ensure, equalArray } = require('../utils')


const partitionSmall = (A, p, r) => {
    let i = p - 1
    for(let j = p; j < r; j++) {
        // 因为 = 时将 A[j]加入 small, 所以对于值全部相同的 A, 最终的 q = A.length - 1
        // 如果去掉 =, q = 0, 参见 partitionBig
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

const partitionBig = (A, p, r) => {
    let i = p - 1
    for(let j = p; j < r; j++) {
        if (A[j] < A[r]) {
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

const partitionEqual = (A, p, r) => {
    let i = p - 1
    let k = p - 1
    for(let j = p; j < r; j++) {
        if (A[j] === A[r]) {
            k++
            const temp = A[k]
            A[k] = A[j]
            A[j] = temp
        } else if (A[j] < A[r]) {
            i = i + 1
            const temp = A[i]
            A[i] = A[j]
            A[j] = temp
        }
    }
    
    k++
    const temp = A[k]
    A[k] = A[r]
    A[r] = temp
    return Math.floor((k - i)/2)
}

const partitionEqual2 = (A, p, r) => {
    let i = p - 1
    let k = p - 1
    for(let j = p; j < r; j++) {
        if (A[j] < A[r]) {
            i = i + 1
            k = k + 1
            const temp = A[i]
            A[i] = A[j]
            A[j] = temp
            // 经过上面的交换, 实际上交换走的 A[i] 是 equal 元素, 在 ++ 之后 A[k] 却是  big 元素, 将 A[k] 与 A[j] 交换
            if (i < k) {
                const temp = A[k]
                A[k] = A[j]
                A[j] = temp
            }
        } else if (A[j] === A[r]) {
            k =  k + 1
            const temp = A[k]
            A[k] = A[j]
            A[j] = temp
        } 
    }
    
    k++
    i++
    const temp = A[k]
    A[k] = A[r]
    A[r] = temp

    return [i, k]
}


if(require.main === module) {
    function testPartition1 () {
        const list = [3, 3, 3]
        ensure(partitionSmall(list, 0, list.length - 1) === 2, 'partion test 1')
    }

    function testPartition2 () {
        const list = [3, 3, 3]
        ensure(partitionBig(list, 0, list.length - 1) === 0, 'partion test 2')
    }

    function testPartition3() {
        const list = [3, 3, 3]
        ensure(partitionEqual(list, 0, list.length - 1) === 1, 'partion test 3')
    }

    function testPartition4() {
        const list = [3, 3, 3, 3]
        ensure(partitionEqual(list, 0, list.length - 1) === 2, 'partion test 4')
    }

    function testPartition5() {
        const list = [0, 1, 2, 3, 3, 3, 4, 5, 3]
        ensure(equalArray(partitionEqual2(list, 0, list.length - 1), [3,  6]), 'partion test 5')
    }

  

    testPartition1()
    testPartition2()
    testPartition3()
    testPartition4()
    testPartition5()
}
    