let Scene = function (game) {
    let s = {
        game: game,
    }
    // 初始化
    let paddle = Paddle(game)
    let ball = Ball(game)
    let score = 0
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

    s.draw = function () {
        // draw
        game.drawImage(paddle)
        game.drawImage(ball)

        // draw blocks
        for (let i = 0; i < blocks.length; i++) {
            let block = blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }

        // draw labels
        game.context.fillText(`分数：${score}`, 10, 290)
    } 
    s.update = function () {
        if (window.paused) {
            return
        }
        ball.move()
        // 判断游戏结束
        if (ball.y > paddle.y) {
            // 跳转到游戏结束的场景
            let end = new SceneEnd(game)
            game.replaceScene(end)
        }
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
    game.canvas.addEventListener('mousedown', function(event) {
        let x = event.offsetX
        let y = event.offsetY
        log(x, y, event)
        // 检查是否点中了 ball
        if (ball.hasPoint(x, y)) {
            // 设置拖拽状态
            enableDrag = true
        }
    })
    game.canvas.addEventListener('mousemove', function(event) {
        let x = event.offsetX
        let y = event.offsetY
        // log(x, y, 'move')
        if (enableDrag) {
            log(x, y, 'drag')
            ball.x = x
            ball.y = y
        }
    })
    game.canvas.addEventListener('mouseup', function(event) {
            let x = event.offsetX
            let y = event.offsetY
            log(x, y, 'up')
            enableDrag = false
        })
    return s
}