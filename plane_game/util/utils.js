/**
 * Created by linmu on 2017/8/26.
 */

const firstInSecond = function(a, b) {
    if (b.y > a.y && b.y < a.y + a.image.height) {
        if (b.x > a.x && b.x < a.x + a.image.width) {
            return true
        }
    }
    return false
}

const imageFromPath = function (path) {
    let img = new Image()
    img.src = path
    return img
}

const loadLevel = function (game, n) {
    n -= 1
    let level = levels[n]
    let blocks = []
    for (let i = 0; i < level.length; i++) {
        let p = level[i]
        let b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

const choice = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

const randomBetween = function (end, start=0) {
    // 包括 start，不包括 end
    return Math.floor(Math.random() * (end - start)) + start
}

const blockByArray = function (game, array) {
    let b = Block(game, array)
    return b
}

const blocksByArrays = function (game, arrays) {
    let blocks = []
    for (let i = 0; i < arrays.length; i++) {
        let p = arrays[i]
        let b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}