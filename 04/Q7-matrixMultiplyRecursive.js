// 矩阵乘法 C[i, j] = A[i] * B[j]

// 子矩阵的表示方式: subarray = [si, sj, ei, ej] 即用起始元素和结束元素的下标表示矩阵
// 因为这里 A, B 都是 n*n 方阵, 简化为用 起点+n 表示子矩阵
// 1*1 矩阵的实际形式 [[0]]

const maxtrixMultiplyRecursive = (
    A, 
    B, 
    C = [],
    subarrayA = [0, 0],  
    subarrayB = [0, 0],
    length = A.length
) => {

    const [siA, sjA] = subarrayA
    const [siB, sjB] = subarrayB

    // console.log(A, siA, sjA, B, siB, sjB, length)

    // 1*1 矩阵
    if (length === 1) {
        if (!C[siA]) {
            C[siA] = []
        }
        console.log(C, siA, sjB)
        C[siA][sjB] = A[siA][sjA] * B[siB][sjB]
    } else {
        // 因为 n = 2^x, 所以划分之后还是方阵
        /* s1 ~ s4 的划分
            1 | 2
            -----
            3 | 4
        */
        const sLength = length / 2
        const s11A = [siA, sjA]
        const s12A = [siA, sjA + sLength]
        const s21A = [siA + sLength, sjA]
        const s22A = [siA + sLength, sjA + sLength]

        const s11B = [siB, sjB]
        const s12B = [siB, sjB + sLength]
        const s21B = [siB + sLength, sjB]
        const s22B = [siB + sLength, sjB + sLength]

        // 如何将加和结果放入 C
        console.log('C', C)
        C[0][0] = matrixAdd(maxtrixMultiplyRecursive(A, B, C, s11A, s11B, sLength), maxtrixMultiplyRecursive(A, B, C, s12A, s21B, sLength))
        C[0][1] = matrixAdd(maxtrixMultiplyRecursive(A, B, C, s11A, s12B, sLength), maxtrixMultiplyRecursive(A, B, C, s12A, s22B, sLength))
        C[1][0] = matrixAdd(maxtrixMultiplyRecursive(A, B, C, s21A, s11B, sLength), maxtrixMultiplyRecursive(A, B, C, s22A, s21B, sLength))
        C[1][1] = matrixAdd(maxtrixMultiplyRecursive(A, B, C, s21A, s12B, sLength), maxtrixMultiplyRecursive(A, B, C, s22A, s22B, sLength))
    }
    return C
}

// 矩阵加法
// n*n 矩阵加法
const matrixAdd = (A, B) => {
    const C = []
    for(let i = 0; i < A.length; i++) {
        C[i] = []
        for (let j = 0; j < A.length; j++) {
            C[i][j] = A[i][j] + B[i][j]
        }
    }
    return C
}

// 矩阵合并
// n*n 矩阵 4 分之后的合并
const matrixMerge = (C, c11, c12, c21, c22, length) => {

}

if (require.main === module) {
    const A = [
        [1, 2], 
        [3, 4]
    ]
    const B = [
        [1, 2], 
        [3, 4]
    ]
    console.log(maxtrixMultiplyRecursive(A, B))
    // console.log(matrixAdd(A, B))
}