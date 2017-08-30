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
        // 地面移动
        this.skipCount--
        let offset = -5
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