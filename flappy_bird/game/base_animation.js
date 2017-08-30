/**
 * Created by linmu on 2017/8/30.
 */

class BaseAnimation {
    constructor(game, name, picNum) {
        this.game = game
        this.animationName = name
        this.picNum = picNum
        this.setup()
    }

    static new(...args) {
        return new this(...args)
    }

    setup() {
        this.animations = {
            [this.animationName]: []
        }
        this.imagesToAnimations(this.animationName, this.picNum)
        this.x = 0
        this.y = 0
        this.texture = this.frames()[0]
        this.w = this.texture.width
        this.h = this.texture.height
    }

    frames() {
        return this.animations[this.animationName]
    }

    update() {
        this.frameCount--
        if (this.frameCount === 0) {
            this.frameCount = 5
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
            this.w = this.texture.width
            this.h = this.texture.height
        }
    }

    draw() {
        this.game.drawImage(this)
    }

    changeAnimation(name) {
        if (this.animationName !== name) {
            this.animationName = name
            this.frameIndex = 0
        }
    }

    imagesToAnimations(action, num) {
       for (let i = 1; i < num + 1; i++) {
            let name = `${action}${i}`
            let t = this.game.textureByName(name)
            this.animations[action].push(t)
        }
    }
}