/**
 * Created by linmu on 2017/8/26.
 */

const Block = function () {
    let image = imageFromPath('pictures/purple_block.png')
    let o = {
        image: image,
        x: 0,
        y: 0,
        w: 50,
        h: 20,
        alive: true,
    }
    o.kill = function () {
        this.alive = false
    }
    o.collide = function (b) {
        return o.alive && (firstInSecond(b, this) || firstInSecond(this, b))
    }
    return o
}