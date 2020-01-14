// 4. 线性查找
// 习题 2.1-3

const log = console.log;

const linearSearch = (list, target)  => {
    let index = -1
    for(let i = 0; i < list.length; i++) {
        if (list[i] === target) {
            index = i
        }
    }
    return index;
}

// 循环不变式是 index, index 是要查找的元素的下标或者 -1
// 初始化: 初始状态下 index 为 -1, 表示数组中不包含 target
// 保持; 每次迭代后, index 要么是-1, 要么是 target 的下标
// 终止: 在终止时, index 要么是-1, 要么是 target 的下标