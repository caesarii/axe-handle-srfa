
const findMaxCrossingSubarray = (A, low, mid, high) => {

    let leftMax = -Infinity
    let leftStart = 0
    let leftSum = 0;
    for(let i = mid; i >= low; i--) {
        leftSum += A[i]
        if (leftSum > leftMax) {
            leftMax = leftSum
            leftStart = i
        }
    }

    let rightMax = -Infinity
    let rightEnd = 0
    let rightSum = 0
    for(let i = mid + 1; i <= high; i++) {
        rightSum += A[i]
        if (rightSum > rightMax) {
            rightMax = rightSum
            rightEnd = i
        }
    }

    return [leftStart, rightEnd, leftMax + rightMax]

}

const maxSubarray = (A, low = 0, high = A.length - 1) => {
    if (low === high) {
        return [low, high, A[low]]
    } else {
        const mid = Math.floor((low + high) / 2)
        const [leftLow, leftHigh, leftSum] = maxSubarray(A, low, mid)
        const [rightLow, rightHigh, rightSum] = maxSubarray(A, mid + 1, high)
        const [crossLow, crossHigh, crossSum] = findMaxCrossingSubarray(A, low, mid, high)
        if (leftSum > rightSum && leftSum > crossSum) { 
            return [leftLow, leftHigh, leftSum]
        } else if (rightSum > leftSum && rightSum > crossSum) {
            return [rightLow, rightHigh, rightSum] 
        } else {
            return [crossLow, crossHigh, crossSum]
        }
    }
}

if (require.main === module) {
    const A = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]
    console.log(findMaxCrossingSubarray(A, 0, 8, A.length - 1))

    console.log(maxSubarray(A))

}