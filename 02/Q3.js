
// 重写插入排序实现为降序
const log = console.log;

const insertSortDesc = (A) => {
    for(let j = 1; j < A.length; j++){
        const key = A[j]
        let i;
        // 仍然是逆序遍历
        for(i = j - 1; i > -1; i--) {
            // 只需要将大于改为小于
            if (A[i] < key) {
                A[i + 1] = A[i]
            } else {
                break;
            }
        }
        A[i + 1] = key;
    }
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    insertSortDesc(list)
    log(list)
}