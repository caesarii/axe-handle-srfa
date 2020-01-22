
const log = console.log

const ensure = (condition, text) => {
    if (condition === false) {
        log(`${text} fail`)
    } else {
        log(`${text} success`)
    }
}

const equalArray = (A, B) => {
    return A.every((a, i) => {
        return a === B[i]
    })
}

if (require.main === module) {
    function testEqualArray () {
        ensure(equalArray([1, 2, 3, 4], [1, 2, 3, 4]) === true, 'testEqualArray 1')
        ensure(equalArray([1, 2, 3, 4], [1, 2, 3]) === false, 'testEqualArray 2')
    }

    testEqualArray()
}

module.exports = { log, ensure, equalArray }