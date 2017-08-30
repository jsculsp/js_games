/**
 * Created by linmu on 2017/8/30.
 */

class BaseAnimation {
    constructor(game) {
        this.game = game
        // 为了省事，这里硬编码一套动画
        this.frames = []
        for (let i = 1; i < 71; i++) {
            let name = `action${i}`
            let t = game.textureByName(name)
            this.frames.push(t)
        }
        this.texture = this.frames[0]
        this.frameIndex = 0
        this.frameCount = 10
    }

    static new(...args) {
        return new this(...args)
    }

    update() {
        this.frameCount--
        if (this.frameCount === 0) {
            this.frameCount = 10
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]
        }
    }

    draw() {
        this.game.drawImage(this)
    }

    move(x) {
        this.x += x

    }
}