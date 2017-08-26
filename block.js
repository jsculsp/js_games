/**
 * Created by linmu on 2017/8/26.
 */

const Block = function (position) {
    // position 是 [x, y, lives] 格式
    let p = position
    let colors = ['blue', 'green', 'yellow', 'pink', 'orange', 'purple', 'red']
    let color = choice(colors)
    let path = `pictures/blocks/${color}_block_${p[2] || 1}.png`
    let image = imageFromPath(path)
    let o = {
        path: path,
        image: image,
        x: p[0],
        y: p[1],
        w: 50,
        h: 20,
        alive: true,
        lives: p[2] || 1,
    }
    o.kill = function () {
        this.lives -= 1
        if (this.lives >= 1) {
            this.loadImage(this.lives)
        } else {
            this.alive = false
        }
    }
    o.loadImage = function (lives) {
        this.path = this.path.replace(`${lives + 1}`, lives)
        this.image = imageFromPath(this.path)
    }
    o.collide = function (b) {
        return o.alive && (firstInSecond(b, this) || firstInSecond(this, b))
    }
    return o
}