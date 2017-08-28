/**
 * Created by linmu on 2017/8/26.
 */

let blocks = []

let enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k === 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('123456789'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            blocks = loadLevel(game, parseInt(k))
        }
        // 控制速度
        let speedController = _e('#id-input-speed')
        speedController.addEventListener('input', function (event) {
            let input = event.target
            input.value = input.value <= 1 ? 1: input.value
            window.fps = Number(input.value)
        })
    })
}

const __main = function () {
    let images = {
        blue_block_1: 'pictures/blocks/blue_block_1.png',
        blue_block_2: 'pictures/blocks/blue_block_2.png',
        blue_block_3: 'pictures/blocks/blue_block_3.png',
        green_block_1: 'pictures/blocks/green_block_1.png',
        green_block_2: 'pictures/blocks/green_block_2.png',
        green_block_3: 'pictures/blocks/green_block_3.png',
        orange_block_1: 'pictures/blocks/orange_block_1.png',
        orange_block_2: 'pictures/blocks/orange_block_2.png',
        orange_block_3: 'pictures/blocks/orange_block_3.png',
        pink_block_1: 'pictures/blocks/pink_block_1.png',
        pink_block_2: 'pictures/blocks/pink_block_2.png',
        pink_block_3: 'pictures/blocks/pink_block_3.png',
        purple_block_1: 'pictures/blocks/purple_block_1.png',
        purple_block_2: 'pictures/blocks/purple_block_2.png',
        purple_block_3: 'pictures/blocks/purple_block_3.png',
        red_block_1: 'pictures/blocks/red_block_1.png',
        red_block_2: 'pictures/blocks/red_block_2.png',
        red_block_3: 'pictures/blocks/red_block_3.png',
        yellow_block_1: 'pictures/blocks/yellow_block_1.png',
        yellow_block_2: 'pictures/blocks/yellow_block_2.png',
        yellow_block_3: 'pictures/blocks/yellow_block_3.png',
        background: 'pictures/background.jpg',
        ball: 'pictures/ball.png',
        paddle: 'pictures/paddle.png',
    }
    BallGame(60, images, function (g) {
        let game = g
        let paddle = Paddle(game)
        let ball = Ball(game)

        let score = 0

        enableDebugMode(game, true)

        blocks = loadLevel(game, 3)

        game.registerAction('a', function () {
            paddle.moveLeft()
        })
        game.registerAction('d', function () {
            paddle.moveRight()
        })
        game.registerAction('f', function () {
            ball.fire()
        })

        game.update = function () {
            if (window.paused) {
                return
            }
            ball.move()
            // 判断 paddle 和 ball 相撞
            if (paddle.collide(ball)) {
                ball.rebound()
            }
            // 判断 ball 和 blocks 相撞
            for (let i = 0; i < blocks.length; i++) {
                let block = blocks[i]
                if (block.collide(ball)) {
                    block.kill()
                    ball.rebound()
                    // 更新分数
                    score += 100
                }
            }
        }
        // mouse event
        let enableDrag = false
        game.canvas.addEventListener('mousedown', function (event) {
            let x = event.offsetX
            let y = event.offsetY
            if (ball.hasPoint(x, y)) {
                enableDrag = true
            }
        })
        game.canvas.addEventListener('mousemove', function (event) {
            let x = event.offsetX
            let y = event.offsetY
            if (enableDrag) {
                ball.x = x
                ball.y = y
            }
        })
        game.canvas.addEventListener('mouseup', function (event) {
            enableDrag = false
        })
        game.draw = function () {
            // draw
            this.drawImage(paddle)
            this.drawImage(ball)

            // draw blocks
            for (let i = 0; i < blocks.length; i++) {
                let block = blocks[i]
                if (block.alive) {
                    this.drawImage(block)
                }
            }

            // draw labels
            this.context.fillText(`分数：${score}`, 10, 290)
        }
    })
}

__main()
