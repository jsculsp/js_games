/**
 * Created by linmu on 2017/8/29.
 */

class BaseLabel {
    constructor(game, text, x, y) {
        this.game = game
        this.text = text
        this.x = x
        this.y = y
    }

    static new(...args) {
        return new this(...args)
    }

    draw() {
        // draw labels
        let ctx = this.game.context
        ctx.font="40px Arial"
        ctx.fillText(this.text, this.x, this.y)
    }

    update() {

    }
}