/**
 * Created by linmu on 2017/8/25.
 */

const BallGame = function (fps, images, runCallback) {
    // images 参数是一个对象，里面是图片的引用名字和图片路径。程序会在所有图片载入成功之后再运行
    let canvas = document.querySelector('#id-canvas')
    canvas.style['background'] = 'url(pictures/background.jpg) no-repeat'
    canvas.style['background-size'] = 'cover'
    let context = canvas.getContext('2d')
    let g = {
        canvas: canvas,
        context: context,
        actions: {},
        keydowns: {},
        images: {},
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

    //
    let loads = []
    // 预先载入所有图片
    let names = Object.keys(images)
    for (let i = 0; i < names.length; i++) {
        let name = names[i]
        let path = images[name]
        let img = new Image()
        img.src = path
        img.onload = function () {
            // 存入 g.images 中
            g.images[name] = img
            // 所有图片都载入成功之后，调用 run
            loads.push(1)
            if (loads.length === names.length) {
                g.run()
            }
        }
    }
    g.imageByName = function (name) {
        let img = this.images[name]
        let image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }
    g.run = function () {
        runCallback(this)
        // 开始运行程序
        setTimeout(runloop, 1000 / fps)
    }
    return g
}
