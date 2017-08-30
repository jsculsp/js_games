/**
 * Created by linmu on 2017/8/30.
 */

class BaseAnimation {
    constructor(game) {
        this.game = game
        // 为了省事，这里硬编码一套动画
        this.animations = {
            stand: [],
            action: [],
            left: [],
            right: [],
        }
        this.imagesToAnimations('stand', 27)
        this.imagesToAnimations('action', 20)
        this.imagesToAnimations('left', 5)
        this.imagesToAnimations('right', 16)
        this.animationName = 'stand'
        this.texture = this.frames()[0]
        this.frameIndex = 0
        this.frameCount = 5
    }

    static new(...args) {
        return new this(...args)
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
        }
    }

    draw() {
        this.game.drawImage(this)
    }

    moveLeft(x, keyStatus) {
        this.x += x
        let animationNames = {
            down: 'left',
            up: 'stand',
        }
        let name = animationNames[keyStatus]
        this.changeAnimation(name)
    }

    moveRight(x, keyStatus) {
        this.x -= x
        let animationNames = {
            down: 'right',
            up: 'stand',
        }
        let name = animationNames[keyStatus]
        this.changeAnimation(name)
    }

    doAction(keyStatus) {
        let animationNames = {
            down: 'action',
            up: 'stand',
        }
        let name = animationNames[keyStatus]
        this.changeAnimation(name)
    }

    changeAnimation(name) {
        this.animationName = name
    }

    imagesToAnimations(action, num) {
       for (let i = 1; i < num + 1; i++) {
            let name = `${action}${i}`
            let t = this.game.textureByName(name)
            this.animations[action].push(t)
        }
    }
}