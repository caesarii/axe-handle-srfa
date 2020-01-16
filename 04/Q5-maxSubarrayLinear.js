// 根据题意, 假定 A[1, j] 的 maxSubarray 是 A1 = A[low, high]
// 那么 A[1, j+1] 的解要么包含 A[j+1]要么不包含, 即 A1, 或 A2 = A[k, j+1], low <= k <= j+1
// 那 A2 到底是什么, A2 是 A[1, j+1] 的必须包含 A[j+1] 在内的 maxSubarray, 称为边界最大子数组, boundryMaxSubarray
// A2 的值要么是 A[j+1] 要么是 A[1, j] 的 boundryMaxSubarray

const maxSubarrayLinear = (A) => {
    // A2: boundryMaxSubarray
    let bMaxSum = A[0]
    let bLow = 0
    let bHigh = 0

    // A1: maxSubarray
    let maxSum = A[0]
    let low = 0
    let high = 0

    for(let j = 1; j < A.length; j++) {
        if (bMaxSum + A[j] >= A[j]) {
            bMaxSum += A[j]
            bHigh = j
            // bLow = bLow
        } else {
            bMaxSum = A[j]
            bLow = j
            bHigh = j
        }
        if (maxSum < bMaxSum) {
            maxSum = bMaxSum
            low = bLow
            high = bHigh
        }
    }
    return [low, high, maxSum]
}

if (require.main === module) {
    const A = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]
    console.log(maxSubarrayLinear(A))
}