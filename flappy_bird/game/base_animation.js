/**
 * Created by linmu on 2017/8/30.
 */

class BaseAnimation {
    constructor(game) {
        this.game = game
        // 为了省事，这里硬编码一套动画
        this.setup()
    }

    static new(...args) {
        return new this(...args)
    }

    setup() {
        this.animations = {
            bird: []
        }
        this.imagesToAnimations('bird', 3)
        this.animationName = 'bird'
        this.texture = this.frames()[0]
        this.w = this.texture.width
        this.h = this.texture.height
        this.frameIndex = 0
        this.frameCount = 5
        this.flipX = false
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
        let ctx = this.game.context
        if (this.flipX) {
            ctx.save()
            let x = this.x + this.w / 2
            ctx.translate(x, 0)
            ctx.scale(-1, 1)
            ctx.translate(-x, 0)
            // Draw the image
            ctx.drawImage(this.texture, this.x, this.y)
            ctx.restore()
        } else {
            ctx.drawImage(this.texture, this.x, this.y)
        }
    }

    moveLeft(x, keyStatus) {
        this.flipX = false
        this.x += x
        let animationNames = {
            down: 'left',
            up: 'stand',
        }
        let name = animationNames[keyStatus]
        this.changeAnimation(name)
    }

    moveRight(x, keyStatus) {
        this.flipX = false
        this.x -= x
        let animationNames = {
            down: 'right',
            up: 'stand',
        }
        let name = animationNames[keyStatus]
        this.changeAnimation(name)
    }

    doAction(keyStatus) {
        this.flipX = false
        let animationNames = {
            down: 'action',
            up: 'stand',
        }
        let name = animationNames[keyStatus]
        this.changeAnimation(name)
    }

    doOppositeAction(keyStatus) {
        this.flipX = true
        let animationNames = {
            down: 'action',
            up: 'stand',
        }
        let name = animationNames[keyStatus]
        this.changeAnimation(name)
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