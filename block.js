/**
 * Created by linmu on 2017/8/26.
 */

const Block = function (game, position) {
    // position 是 [x, y, lives] 格式
    let p = position
    let colors = ['blue', 'green', 'yellow', 'pink', 'orange', 'purple', 'red']
    let color = choice(colors)
    let name = `${color}_block_${p[2] || 1}`
    let o = game.imageByName(name)
    Object.assign(o, {
        name: name,
        x: p[0],
        y: p[1],
        alive: true,
        lives: p[2] || 1,
    })
    o.kill = function () {
        this.lives -= 1
        if (this.lives >= 1) {
            this.loadImage(this.lives)
        } else {
            this.alive = false
        }
    }
    o.loadImage = function (lives) {
        this.name = this.name.replace(`${lives + 1}`, lives)
        this.image = game.images[this.name]
    }
    o.collide = function (b) {
        return o.alive && (firstInSecond(b, this) || firstInSecond(this, b))
    }
    return o
}