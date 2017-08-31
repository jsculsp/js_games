class Field {
    constructor(game, scene) {
        this.game = game
        this.scene = scene
        this.setup()
    }

    static new(...args) {
        return new this(...args)
    }

    setup() {
        this.speed = 5
        // 循环移动地面
        this.grounds = []
        for (let i = 0; i < 10; i++) {
            let g = BaseImg.new(this.game, 'ground')
            g.x = i * g.w
            g.y = 848
            this.scene.__addElement(g)
            this.grounds.push(g)
        }
        this.skipCount = 50
    }

    update() {
        let s = this.game.scene
        if (s.end) {
            return
        }
        // 地面移动
        this.skipCount--
        let offset = -this.speed
        if (this.skipCount === 0) {
            this.skipCount = 50
            offset = 245
        }
        for (let i = 0; i < 10; i++) {
            let g = this.grounds[i]
            g.x += offset
        }
    }

    draw() {

    }
}