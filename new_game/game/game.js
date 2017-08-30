/**
 * Created by linmu on 2017/8/25.
 */

class PlaneGame {
    constructor(fps, images, runCallback) {
        config.fps = fps
        this.images = images
        this.runCallback = runCallback
        this.setup()
        this.setupInputs()
        this.init()
    }

    setup() {
        this.scene = undefined
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
    }

    setupInputs() {
        // events
        window.addEventListener('keydown', (event) => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', (event) => {
            this.keydowns[event.key] = false
        })
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    update() {
        this.scene.update()
    }

    draw() {
        this.scene.draw()
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    runloop() {
        // events
        let actions = Object.keys(this.actions)
        for (let i = 0; i < actions.length; i++) {
            let key = actions[i]
            if (this.keydowns[key]) {
                // 如果按键被按下，调用注册的 action
                this.actions[key]()
            }
        }
        // update
        this.update()
        // clear
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        // draw
        this.draw()
        setTimeout(this.runloop.bind(this), 1000 / config.fps)
    }

    drawImage(imgObject) {
        this.context.drawImage(imgObject.texture, imgObject.x, imgObject.y)
    }

    textureByName(name) {
        let img = this.images[name]
        return img
    }

    init() {
        let loads = []
        // 预先载入所有图片
        let names = Object.keys(this.images)
        for (let i = 0; i < names.length; i++) {
        let name = names[i]
        let path = this.images[name]
        let img = new Image()
        img.src = path
        img.onload = () => {
            // 存入 g.images 中
            this.images[name] = img
            // 所有图片都载入成功之后，调用 run
            loads.push(1)
            if (loads.length === names.length) {
                this.__start()
            }
        }
    }
    }

    runWithScene(scene) {
        this.scene = scene
        // 开始运行程序
        setTimeout(this.runloop.bind(this), 1000 / config.fps)
    }

    replaceScene(scene) {
        this.scene = scene
    }

    __start() {
        this.runCallback(this)
    }
}
