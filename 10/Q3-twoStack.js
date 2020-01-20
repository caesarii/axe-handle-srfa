
// 基于数组的栈
// 数据保存数组 list 中, 栈的大小是 size, top 始终指向栈顶
// empty: 栈是否是空的
// push: 向栈顶添加一个数据
// pop: 从栈顶弹出一个数据
// top > size - 1 称为上溢
// 对空栈进行 pop 称为 下溢

const log = console.log

class Stack {
    constructor (size) {
        this.list = []
        this.size = size
        this.top = -1
        this.bottom = this.size
    }

    emptyTop () {
        return this.top === -1
    }

    emptyBottom () {
        return this.bottom === this.size
    }

    pushTop (x) {
        this.top ++
        if (this.top + 1 + this.size - this.bottom > this.size) {
            throw new Error('overflow')
        }
        this.list[this.top] = x
    }

    pushBottom (x) {
        this.bottom --
        if (this.top + 1 + this.size - this.bottom > this.size) {
            throw new Error('overflow')
        }
        this.list[this.bottom] = x
    }

    popTop () {
        if (this.emptyTop()) {
            throw new Error('underflow')
        }

        const x = this.list[this.top]
        this.top --
        return x
    }

    popBottom () {
        if (this.emptyBottom()) {
            throw new Error('underflow')
        }

        const x = this.list[this.bottom]
        this.bottom ++
        return x
    }

    // 测试
    print () {
        log('stack top', this.list.slice(0, this.top + 1))
        log('stack bottom', this.list.slice(this.bottom, this.size))
    }
}

if(require.main === module) {
    // 测试1: push
    const s1 = new Stack(5)
    s1.pushTop(0)
    s1.pushTop(1)
    s1.pushTop(2)

    s1.pushBottom(4)
    s1.pushBottom(3)

    s1.print()
    // [0 1 2] [3 4]

    // s1.pushTop(3) // overflow
    // s1.pushBottom(2) // overflow

    s1.popTop()
    s1.popBottom()

    s1.print()
    // [0 1] [4]


}