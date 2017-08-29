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
        this.numberOfParticles = 20
        this.particles = []
    }

    draw() {
        // 添加小火花
        if (this.particles.length < this.numberOfParticles) {
            let p = Particle.new(this.game)
            // 设置初始化坐标
            let vx = randomBetween(-10, 10)
            let vy = randomBetween(-10, 10)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        // 更新所有小火花
        for (let p of this.particles) {
            p.update()
        }
    }

    update() {
        for (let p of this.particles) {
            p.draw()
        }
    }
}