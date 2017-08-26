/**
 * Created by linmu on 2017/8/26.
 */

const __main = function () {
    let game = BallGame(60)

    let paddle = Paddle()
    let ball = Ball()

    let blocks = loadLevel(3)

    game.registerAction('a', function () {
        paddle.moveLeft()
    })
    game.registerAction('d', function () {
        paddle.moveRight()
    })
    game.registerAction('f', function () {
        ball.fire()
    })
    window.addEventListener('keypress', function (event) {
        let k = event.key
        if (k === 'p') {
            ball.pause()
        } else if (k === '1') {
            blocks = loadLevel(1)
        } else if ('123456789'.includes(k)) {
            blocks = loadLevel(parseInt(k))
        }
    })

    game.update = function () {
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
            }
        }
    }
    game.draw = function () {
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
    }
}

__main()
