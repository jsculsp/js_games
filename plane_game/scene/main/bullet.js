/**
 * Created by linmu on 2017/8/29.
 */

class Bullet extends BaseImg {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }

    setup() {
        this.speed = 3
    }

    update() {
        this.speed = config.bullet_speed
        this.y -= this.speed
    }
}
