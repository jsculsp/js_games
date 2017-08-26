/**
 * Created by linmu on 2017/8/26.
 */

const Ball = function () {
    let image = imageFromPath('pictures/ball.png')
    let o = {
        image: image,
        x: 140,
        y: 231,
        speedX: 5,
        speedY: 5,
        fired: false,
    }
    o.fire = function () {
        this.fired = true
    }
    o.rebound = function () {
        this.speedY *= -1
    }
    o.move = function () {
        if (this.fired) {
            if (o.x < 0 || o.x + o.image.width > 400) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y + o.image.height > 300) {
                o.speedY *= -1
            }
            // move
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    return o
}