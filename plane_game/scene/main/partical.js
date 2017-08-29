/**
 * Created by linmu on 2017/8/29.
 */

class Partical extends BaseImg {
    constructor(game) {
        super(game, 'partical')
        this.setup()
    }

    setup() {
        this.speed = 3
    }

    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vx
    }

    update() {
        this.x += this.vx
        this.y += this.vy
    }
}