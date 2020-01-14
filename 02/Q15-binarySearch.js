

const binarySearch = (A, target, p = 0, r = A.length -  1) => {
    const q = Math.floor((p + r) / 2)
    // console.log(p, q, r)

    if (A[q] === target) {
        return q
    } else if (A[q] < target) {
        return binarySearch(A, target, q+1, r)
    } else {
        return binarySearch(A, target, p, q)
    }
}

if(require.main === module) {
    const list = [0, 1, 2, 3, 4, 5, 6]
    console.log(binarySearch(list, 0))
    console.log(binarySearch(list, 1))
    console.log(binarySearch(list, 2))
    console.log(binarySearch(list, 3))
    console.log(binarySearch(list, 4))
    console.log(binarySearch(list, 5))
}

moudle.exports = binarySearch
