class BirdAnimation extends BaseAnimation{
    constructor(game) {
        super(game, 'bird', 3)
        this.setup()
    }

    setup() {
        super.setup()
        this.x = 100
        this.y = 400
        this.frameIndex = 0
        this.frameCount = 5
        this.flipX = false
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
}