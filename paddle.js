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
        } else if (x > 400 - this.image.width) {
            x = 400 - this.image.width
        }
        this.x = x
    }
    o.moveLeft = function () {
        this.moveTo(this.x - this.speed)
    }
    o.moveRight = function () {
        this.moveTo(this.x + this.speed)
    }
    o.collide = function (ball) {
        if (ball.y + ball.image.height > o.y) {
            if (ball.x > o.x && ball.x < o.x + o.image.width) {
                return true
            }
        }
        return false
    }
    return o
}
