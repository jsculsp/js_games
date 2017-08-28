/**
 * Created by linmu on 2017/8/26.
 */

const Ball = function (game) {
    let o = game.imageByName('ball')
    Object.assign(o, {
        x: 140,
        y: 231,
        speedX: 5,
        speedY: -5,
        fired: false,
    })
    o.fire = function () {
        this.fired = true
    }
    o.rebound = function () {
        this.speedY *= -1
    }
    o.move = function () {
        if (this.fired) {
            if (o.x < 0 || o.x + o.w > 400) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y + o.h > 300) {
                o.speedY *= -1
            }
            // move
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.hasPoint = function (x, y) {
        let xIn = x >= o.x && x <= o.x + o.w
        let yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }
    return o
}