
// 两数和问题

// 这个问题还有更好的解法

// 到本章为止的话, 二分查找应该就可以了

const binarySearch = require('./Q15-binarySearch');

var twoSum = function(A, target) {
    for(let i = 0; i < A.length; i++) {
        const j = binarySearch(A, target - A[i])
        if(j > -1) {
            return [A[i], A[j]]
        }
    }
};

if(require.main === module) {
    const list = [1, 2, 3, 4, 5, 6, 7, 8]
    console.log(twoSum(list, 5))
}