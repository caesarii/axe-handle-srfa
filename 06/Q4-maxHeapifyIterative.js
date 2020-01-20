const MaxHeap = require('./Q6-MaxHeap')
const log = console.log 

const maxHeapifyIterative = (i, list) => {
    let max = i;
   
    while (i < list.length) {
        const l = MaxHeap.left(i)
        const r = MaxHeap.right(i);

        if (l < list.length && list[l] > list[i]) {
            max = l
        }
        if (r < list.length && list[r] > list[max]) {
            max = r
        }
        if (max !== i) {
            const temp = list[i]
            list[i] = list[max]
            list[max] = temp
            i = max
        } else {
            break
        }

    }

    return list
}

if(require.main === module) {
    log('maxHeapifyIterative', maxHeapifyIterative(1, [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]))
    // [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]
}

   