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
        // 重力和加速度
        this.gy = 10
        this.vy = 0
    }

    update() {
        super.update()
        // 更新受力
        this.y += this.vy
        this.vy += this.gy * 0.1
        let h = 825
        if (this.y > h) {
            this.y = h
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

    jump() {
        this.vy = -10
    }
}