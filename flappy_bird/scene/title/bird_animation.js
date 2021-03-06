class BirdAnimation extends BaseAnimation{
    constructor(game) {
        super(game, 'bird', 3)
        this.setup()
    }

    setup() {
        super.setup()
        this.x = 200
        this.y = 400
        this.speed = 5
        this.flipX = false
        // 重力和加速度
        this.gy = 10
        this.vy = 0
        // 旋转角度
        this.rotation = 0
    }

    debug(bool) {
        if (bool) {
            this.speed = config.bird_speed.value
        }
    }

    update() {
        super.update()
        // 更新受力
        this.y += this.vy
        this.vy += this.gy * 0.1
        let h = 800
        if (this.y > h) {
            this.y = h
        }
        if (this.y < this.h) {
            this.y = this.h
        }
        // 更新角度
        if (this.rotation < 90) {
            this.rotation += 5
        }
        // 判断和管道相撞
        let pipes = this.game.scene.pipes.pipes
        let scene = this.game.scene
        for (let p of pipes) {
            if (firstInSecond(this, p) || firstInSecond(p, this)) {
                scene.end = true
                let label1 = BaseLabel.new(this.game, '游戏结束', 250, 450)
                let label2 = BaseLabel.new(this.game, '按 k 重新开始游戏', 160, 650)
                scene.__addElement(label1)
                scene.__addElement(label2)
            }
        }
    }

    draw() {
        let ctx = this.game.context
        ctx.save()

        let w2 = this.w / 2
        let h2 = this.h / 2
        ctx.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            ctx.scale(-1, 1)
        }
        ctx.rotate(this.rotation * Math.PI / 180)
        ctx.translate(-w2, -h2)
        // Draw the image
        ctx.drawImage(this.texture, 0, 0, this.w * 2, this.h * 2)

        ctx.restore()
    }

    jump() {
        this.vy = -10
        this.rotation = -45
    }

    headLeft(x) {
        this.x -= x
        if (this.x < 0) {
            this.x = 0
        }
        this.flipX = true
    }

    headRight(x) {
        this.x += x
        if (this.x > 640 - this.w) {
            this.x = 640 - this.w
        }
        this.flipX = false
    }
}