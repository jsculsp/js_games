/**
 * Created by linmu on 2017/8/26.
 */

let blocks = []
let enableDebugMode = function (enable) {
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
            blocks = loadLevel(parseInt(k))
        }
    })
}

const __main = function () {
    enableDebugMode(true)
    let game = BallGame(60)

    let paddle = Paddle()
    let ball = Ball()

    blocks = loadLevel(3)

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
