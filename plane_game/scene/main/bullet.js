/**
 * Created by linmu on 2017/8/29.
 */

class Bullet extends BaseImg {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }

    setup() {
        this.speed = 1
    }

    update() {
        this.y -= this.speed
    }
}
