/**
 * Created by linmu on 2017/8/26.
 */

const Paddle = function (game) {
    let o = game.imageByName('paddle')
    Object.assign(o, {
        x: 100,
        y: 250,
        speed: 5,
    })
    o.moveTo = function (x) {
        if (x < 0) {
            x = 0
        } else if (x > 400 - this.w) {
            x = 400 - this.w
        }
        this.x = x
    }
    o.moveLeft = function () {
        this.moveTo(this.x - this.speed)
    }
    o.moveRight = function () {
        this.moveTo(this.x + this.speed)
    }
    let aInb = function (x, x1, x2) {
        return x >= x1 && x <= x2
    }
    o.collide = function (ball) {
        let a = this
        let b = ball
        if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
            if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
                return true
            }
        }
        return false
    }
    return o
}
