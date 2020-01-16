
// 从股票问题到最大子数组问题

// 为什么股票问题的解从最高开始找最低或从最低开始找最高
// 无论是最高找最低还是最低找最高都无法保证两者之间的价差是最大的, 所以股票问题需要转换为寻找最大连续价差
// 这就是最大子数组问题, 该问题前提是元素有负有正, 否则原数组就是最优解

// 分治法
// 分治法与递归的关系: 递归分为基本情况和递归情况, 分治法是递归情况下使用的策略
// 基本情况: 长度为 1 的数组的解是其本身
// 分解: 将 A[low, high], 分解为 A[low, mid] 和 A[mid+1, high], mid = (low+high)/2
// 解决: 递归的对子数组进行求解, 直至进入基本情况, 进入基本情况后算法开始回归
// 合并: 算法回归是对两个子数组的求解结果进行汇总, 除了这两个解外, 还要考虑跨子数组的解

const maxCrossingSubarray = (A, low, mid, high) => {
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

// 支持空数组作为结果, 空数组和为 0
// 只有在最大和 < 0 时才需要返回空数组
const maxSubarray = (A, low = 0, high = A.length - 1) => {
    if (low === high) {
        return [low, high, A[low]]
    } else {
        const mid = Math.floor((low + high) / 2)
        const [leftLow, leftHigh, leftSum] = maxSubarray(A, low, mid)
        const [rightLow, rightHigh, rightSum] = maxSubarray(A, mid + 1, high)
        const [crossLow, crossHigh, crossSum] = maxCrossingSubarray(A, low, mid, high)
        if (leftSum > rightSum && leftSum > crossSum && leftSum > 0) { 
            return [leftLow, leftHigh, leftSum]
        } else if (rightSum > leftSum && rightSum > crossSum && rightSum > 0) {
            return [rightLow, rightHigh, rightSum] 
        } else if (crossSum > leftSum && crossSum > rightSum && crossSum > 0){
            return [crossLow, crossHigh, crossSum]
        } else {   
            return [-1, -1, 0]
        }
    }
}

if (require.main === module) {
    const A = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]
    console.log(maxCrossingSubarray(A, 0, 8, A.length - 1))
    console.log(maxSubarray(A))
    const b = [-1, -2, -3, -4]
    console.log(maxSubarray(b))
}