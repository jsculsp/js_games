/**
 * Created by linmu on 2017/8/29.
 */

class Cloud extends BaseImg{
    constructor(game) {
        let type = randomBetween(2)
        let name = `cloud${type}`
        log(name)
        super(game, name)
        this.__setup()
    }

    __setup() {
        this.x = randomBetween(600)
        this.y = -randomBetween(0, 200)
        this.speed = 1
    }

    update() {
        this.y += this.speed
        if (this.y > 960) {
            this.__setup()
        }
    }
}