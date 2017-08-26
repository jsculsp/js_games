/**
 * Created by linmu on 2017/8/25.
 */

const BallGame = function (fps) {
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

    window.fps = fps
    const runloop = function () {
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
        setTimeout(arguments.callee, 1000 / window.fps)
    }

    // timer
    setTimeout(runloop, 1000 / fps)
    return g
}
