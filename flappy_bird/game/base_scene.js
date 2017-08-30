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
            e.draw()
        }
    }

    update() {
        for (let e of this.elements) {
            e.debug && e.debug(true)
            e.update()
        }
    }

    __addElement(element) {
        element.scene = this
        this.elements.push(element)
    }
}