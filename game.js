/**
 * Created by linmu on 2017/8/25.
 */

const firstInSecond = function(a, b) {
    if (b.y > a.y && b.y < a.y + a.image.height) {
        if (b.x > a.x && b.x < a.x + a.image.width) {
            return true
        }
    }
    return false
}

const imageFromPath = function (path) {
    let img = new Image()
    img.src = path
    return img
}

const Paddle = function () {
    let image = imageFromPath('pictures/paddle.png')
    let o = {
        image: image,
        x: 100,
        y: 250,
        speed: 5,
    }
    o.moveLeft = function () {
        this.x -= this.speed
    }
    o.moveRight = function () {
        this.x += this.speed
    }
    o.collide = function (ball) {
        if (ball.y + ball.image.height > o.y) {
            if (ball.x > o.x && ball.x < o.x + o.image.width) {
                return true
            }
        }
        return false
    }
    return o
}

const Ball = function () {
    let image = imageFromPath('pictures/ball.png')
    let o = {
        image: image,
        x: 140,
        y: 235,
        speedX: 5,
        speedY: 5,
        fired: false,
    }
    o.fire = function () {
        this.fired = true
    }
    o.rebound = function () {
        this.speedY *= -1
    }
    o.move = function () {
        if (this.fired) {
            if (o.x < 0 || o.x + o.image.width > 400) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y + o.image.height > 300) {
                o.speedY *= -1
            }
            // move
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.pause = function () {
        this.fired = !this.fired
    }
    return o
}

const Block = function () {
    let image = imageFromPath('pictures/purple_block.png')
    let o = {
        image: image,
        x: 100,
        y: 100,
        w: 50,
        h: 20,
        alive: true,
    }
    o.kill = function () {
        this.alive = false
    }
    o.collide = function (b) {
        return o.alive && (firstInSecond(b, this) || firstInSecond(this, b))
    }
    return o
}

const BallGame = function () {
    let canvas = document.querySelector('#id-canvas')
    canvas.style['background'] = 'url(pictures/background.jpg) no-repeat'
    canvas.style['background-size'] = 'cover'
    let context = canvas.getContext('2d')
    let g = {
        canvas: canvas,
        context: context,
        actions: {},
        keydowns: {},
    }
    // draw
    g.drawImage = function (imgObject) {
        this.context.drawImage(imgObject.image, imgObject.x, imgObject.y)
    }
    // events
    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false
    })

    // register actions
    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }

    // timer
    setInterval(function () {
        // events
        let actions = Object.keys(g.actions)
        for (let i = 0; i < actions.length; i++) {
            let key = actions[i]
            if (g.keydowns[key]) {
                // 如果按键被按下，调用注册的 action
                g.actions[key]()
            }
        }
        // update
        g.update()
        // clear
        g.context.clearRect(0, 0, canvas.width, canvas.height)
        // draw
        g.draw()
    }, 1000/60)
    return g
}

const __main = function () {
    let game = BallGame()

    let paddle = Paddle()
    let ball = Ball()
    let block = Block()

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
        if (event.key === 'p') {
            ball.pause()
        }
    })

    game.update = function () {
        ball.move()
        // 判断 paddle 和 ball 相撞
        if (paddle.collide(ball)) {
            ball.rebound()
        }
        // 判断 ball 和 block 相撞
        if (block.collide(ball)) {
            block.kill()
            ball.rebound()
        }
    }
    game.draw = function () {
        // draw
        game.drawImage(paddle)
        game.drawImage(ball)
        if (block.alive) {
            game.drawImage(block)
        }
    }
}

__main()