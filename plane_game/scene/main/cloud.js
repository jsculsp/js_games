/**
 * Created by linmu on 2017/8/29.
 */

class Cloud extends BaseImg{
    constructor(game, img) {
        super(game, img)
        this.__setup()
    }

    __setup() {
        this.x = 300
        this.y = 200
        this.speed = 1
    }
}