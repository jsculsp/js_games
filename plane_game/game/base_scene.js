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
        for (let e of this.elements) {
            this.game.drawImage(e)
        }
    }

    update() {
        for (let e of this.elements) {
            e.update()
        }
    }

    __addElement(element) {
        this.elements.push(element)
    }
}