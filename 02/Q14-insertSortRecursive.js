
const log = console.log;

const insertSort = (A, j = A.length - 1, ) => {

    if (j === 1) {
        return
    }
    
    // 循环改为递归
    insertSort(A, j - 1)

    const key = A[j]
    let i;
    for(i = j - 1; i > -1; i--) {
        if (A[i] > key) {
            A[i + 1] = A[i]
        } else {
            break;
        }
    }
    A[i + 1] = key;
}


if(require.main === module) {
    const list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    insertSort(list)
    log(list)
}