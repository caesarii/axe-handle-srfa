// 矩阵乘法 C[i, j] = A[i] * B[j]
const maxtrixMultiplyBrute = (A, B) => {
    const C = [];
    for(let i = 0; i < A.length; i++) {
        C[i] = []

        for( let j =0; j < A.length; j++) {
            let c = 0

            for (let k = 0; k < A.length; k++) {
                console.log('c', A[i][k], B[k][j])
                c = c + A[i][k] * B[k][j];
            }
            C[i][j] = c
        }
    }
    return C
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
    console.log(maxtrixMultiplyBrute(A, B))
}