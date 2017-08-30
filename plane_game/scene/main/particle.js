/**
 * Created by linmu on 2017/8/29.
 */

class Particle extends BaseImg {
    constructor(game) {
        super(game, 'particle')
        this.setup()
    }

    setup() {
        this.life = 20
    }

    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }

    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
        // a 是加速度
        let a = 0.01
        this.vx += a * this.vx
        this.vy += a * this.vy
    }
}