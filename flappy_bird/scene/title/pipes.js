class Pipes {
    constructor(game) {
        this.game = game
        this.setup()
    }

    static new(...args) {
        return new this(...args)
    }

    setup() {
        this.pipes = []
        this.pipeSpace = 160
        this.gap = 200
        this.columsOfPipe = 3
        this.__setPipes(this.gap, this.pipeSpace)
    }

    __setPipes() {
        for (let i = 0; i < this.columsOfPipe; i++) {
            let p1 = Pipe.new(this.game)
            p1.flipY = true
            p1.x = 600 + i * (this.gap + 2 * p1.w)
            let p2 = Pipe.new(this.game)
            p2.x = p1.x
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }

    debugResetup() {
        this.pipes = []
        this.pipeSpace = config.pip_space.value
        this.gap = config.gap.value
        this.__setPipes()
    }

    debug(bool) {
        if (bool) {
            // 2 根管子垂直方向的间距
            this.pipeSpace = config.pip_space.value
            // 管子横向间距
            if (this.gap !== config.gap.value) {
                this.gap = config.gap.value
                this.debugResetup()
            }
        }
    }

    draw() {
        let ctx = this.game.context
        for (let p of this.pipes) {
            ctx.save()

            let w2 = p.w / 2
            let h2 = p.h / 2
            ctx.translate(p.x + w2, p.y + h2)
            let scaleX = p.flipX ? -1: 1
            let scaleY = p.flipY ? -1: 1
            ctx.scale(scaleX, scaleY)
            ctx.rotate(p.rotation * Math.PI / 180)
            ctx.translate(-w2, -h2)
            // Draw the image
            ctx.drawImage(p.texture, 0, 0, p.w * 2, p.h * 2)

            ctx.restore()
        }
    }

    update() {
        for (let i = 0; i < this.pipes.length; i += 2) {
            let p1 = this.pipes[i]
            let p2 = this.pipes[i+1]
            for (let p of [p1, p2]) {
                p.x -= 5
                if (p.x < -100) {
                    p.x += this.columsOfPipe * (2 * p.w + this.gap)
                    this.resetPipesPosition(p1, p2)
                }
            }
        }
    }

    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(-50, 250)
        p2.y = p1.y + p1.h + this.pipeSpace
    }
}