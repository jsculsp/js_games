class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.game = game
        this.paddle = Paddle(game)
        this.ball = Ball(game)
        this.score = 0
        blocks = loadLevel(game, 3)

        // key event
        this.game.registerAction('a', () => {
            this.paddle.moveLeft()
        })
        this.game.registerAction('d', () => {
            this.paddle.moveRight()
        })
        this.game.registerAction('f', () => {
            this.ball.fire()
        })

        // mouse event
        let enableDrag = false
        this.game.canvas.addEventListener('mousedown', (event) => {
            let x = event.offsetX
            let y = event.offsetY
            // 检查是否点中了 ball
            if (this.ball.hasPoint(x, y)) {
                // 设置拖拽状态
                enableDrag = true
            }
        })
        this.game.canvas.addEventListener('mousemove', (event) => {
            let x = event.offsetX
            let y = event.offsetY
            if (enableDrag) {
                this.ball.x = x
                this.ball.y = y
            }
        })
        this.game.canvas.addEventListener('mouseup', () => {
            enableDrag = false
        })
    }

    draw() {
        // draw
        this.game.drawImage(this.paddle)
        this.game.drawImage(this.ball)

        // draw blocks
        for (let i = 0; i < blocks.length; i++) {
            let block = blocks[i]
            if (block.alive) {
                this.game.drawImage(block)
            }
        }

        // draw labels
        this.game.context.fillText(`分数：${this.score}`, 10, 290)
    }

    update() {
        if (window.paused) {
            return
        }
        this.ball.move()
        // 判断游戏结束
        if (this.ball.y > this.paddle.y) {
            // 跳转到游戏结束的场景
            let end = new SceneEnd(this.game)
            this.game.replaceScene(end)
        }
        // 判断 paddle 和 ball 相撞
        if (this.paddle.collide(this.ball)) {
            this.ball.rebound()
        }
        // 判断 ball 和 blocks 相撞
        for (let i = 0; i < blocks.length; i++) {
            let block = blocks[i]
            if (block.collide(this.ball)) {
                block.kill()
                this.ball.rebound()
                // 更新分数
                this.score += 100
            }
        }
    }
}
