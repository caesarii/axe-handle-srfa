
const log = console.log

const selection = (A) => {
    // A[0, j-1] 是循环不变式, 其中包含数组中最小的 j 个元素, 并且是排序的
    // 初始状态: j = 0, A[...]中包含元素最小的 0 个元素
    // 保持: 一次迭代后, 第 j 号最小元素与A[j]交换, A[0, j]包含数组中最小的 j 个元素, 并且是排序的
    // 终止: 终止时 j = A.length - 1, 此时 A[0, j - 1] 包含除最后一个元素外的所有元素而且是已排序的
    // 此时如果再进行一次迭代剩下的唯一元素自然是一个最小值并与自身交换, 所以最后一次迭代无序进行, A是已排序的


    // 外循环的目的是遍历所有元素, 找到第 j 号最小元素与A[j]交换
    for(let j = 0; j < A.length - 1; j++){
    
        // 内循环的目的是找到 A[j, ...] 中的最小值,  A[j] 是初始最小值, 从 j+1 开始查找
        // 所以内循环是一个线性查找算法
        
        let k = j; // j 号最小值的下标
        for(let i = j + 1; i < A.length; i++) {
            if (A[i] < A[k]) {
                k = i;
            }
        }

        // 将第 j 号最小元素与A[j]交换
        const min = A[k]
        A[k] = A[j]
        A[j] = min
    }
}





if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    selection(list)
    log(list)
}

module.exports = selection