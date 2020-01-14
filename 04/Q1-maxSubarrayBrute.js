

const maxSubarrayBrute = (A) => {
    let max = -Infinity
    let low = 0
    let high = 0
    for(let j = 0; j < A.length; j++) {
        let sum = A[j]
        for (let i = j + 1; i < A.length; i++) {
            sum += A[i]
            if (sum > max) {
                max = sum;
                low = j
                high = i
            }
        }
    }
    return [max, low, high]
}

if (require.main === module) {
    const A = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]
    console.log(maxSubarrayBrute(A))
}