/**
 * Created by linmu on 2017/8/29.
 */

class ParticleSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }

    static new(...args) {
        return new this(...args)
    }

    setup() {
        this.x = 150
        this.y = 200
        this.numberOfParticals = 20
        this.particals = []
    }

    draw() {
        // 添加小火花
        if (this.particals.length < this.numberOfParticals) {
            let p = Partical.new(this.game)
            // 设置初始化坐标
            let vx = randomBetween(-10, 10)
            let vy = randomBetween(-10, 10)
            p.init(this.x, this.y, vx, vy)
            this.particals.push(p)
        }
        // 更新所有小火花
        for (let p of this.particals) {
            p.update()
        }
    }

    update() {
        for (let p of this.particals) {
            p.draw()
        }
    }
}