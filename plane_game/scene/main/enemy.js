/**
 * Created by linmu on 2017/8/29.
 */

class Enemy extends BaseImg{
    constructor(game) {
        let type = randomBetween(5)
        let name = `enemy${type}`
        super(game, name)
        this.setup()
    }

    setup() {
        let s = config.enemy_speed || 1
        this.speed = randomBetween(s, 2.5 * s)
        this.x = randomBetween(600)
        this.y = -randomBetween(0, 200)
    }

    update() {
        this.y += this.speed
        if (this.y > 960) {
            this.setup()
        }
    }
}