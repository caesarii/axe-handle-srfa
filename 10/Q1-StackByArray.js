
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
    }

    empty () {
        return this.top === -1
    }

    push (x) {
        this.top ++
        if (this.top > this.size - 1) {
            throw new Error('overflow')
        }
        this.list[this.top] = x
    }

    pop () {
        if (this.empty()) {
            throw new Error('underflow')
        }

        const x = this.list[this.top]
        this.top --
        return x
    }

    // 测试
    print () {
        return this.list.slice(0, this.top + 1)
    }
}

if(require.main === module) {
    // 测试1: push
    const s1 = new Stack(5)
    s1.push(0)
    s1.push(1)
    s1.push(2)
    s1.push(3)
    s1.push(4)

    log('push: [0 1 2 3 4]', s1.print())

    // 测试2: overflow
    // s1.push(5)
    // Error: overflow

    // 测试3: pop and empty
    s1.pop()
    s1.pop()
    s1.pop()
    s1.pop()
    log('[0]', s1.print())

     // 测试4: empty
    log('empty: false', s1.empty())
    s1.pop()
    log('empty: true', s1.empty())

    // 测试5: underflow
    s1.pop()
    // Error: underflow

}