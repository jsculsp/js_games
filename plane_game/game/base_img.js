/**
 * Created by linmu on 2017/8/29.
 */

class BaseImg {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
    }

    static new(...args) {
        return new this(...args)
    }

    draw() {
        this.game.drawImage(this)
    }

    update() {

    }

    removeFromScene() {
        let s = this.game.scene
        let es = s.elements
        let index = es.indexOf(this)
        es.splice(index, 1)
    }
}