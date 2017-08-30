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
        if (this.y < -100) {
            let s = this.game.scene
            let es = s.elements
            let index = es.indexOf(this)
            es.splice(index, 1)
        }
    }
}
