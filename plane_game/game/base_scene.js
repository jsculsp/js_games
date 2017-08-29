/**
 * Created by linmu on 2017/8/28.
 */

class BaseScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }

    static new(...args) {
        return new this(...args)
    }

    draw() {
        for (let i of this.elements) {
            this.game.drawImage(i)
        }
    }

    update() {

    }
}