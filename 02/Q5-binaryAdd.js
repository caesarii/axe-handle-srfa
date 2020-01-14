

const binaryAdd = (A, B) => {
    let i = 0;
    const C = [];
    let carry = 0;

    while (i < A.length + 1 || i < B.length + 1) {
        let a = A[A.length - 1 - i];
        let b = B[B.length - 1 - i];

        // 补位
        if (!a) {
            a = 0
        } 
        if (!b) {
            b = 0
        }
        console.log(a, b, carry)
        C[i] = (a + b + carry) % 2
        carry = Math.floor((a + b + carry) / 2);
        i++;
    }

    if(C[C.length - 1] === 0) {
        C.pop()
    }

    return C.reverse()
}

if (require.main === module) {
    const A = [1, 0, 1, 0, 1]
    const B = [0, 1, 1, 0, 1]
    console.log(binaryAdd(A, B))
}