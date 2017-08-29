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
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(600)
        this.y = -randomBetween(0, 200)
    }

    update() {
        this.speed = config.enemy_speed
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        }
    }
}