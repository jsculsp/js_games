/**
 * Created by linmu on 2017/8/29.
 */

class ParticleSystem {
    constructor(game, x, y) {
        this.game = game
        this.x = x
        this.y = y
        this.setup()
    }

    static new(...args) {
        return new this(...args)
    }

    setup() {
        this.duration = 30
        this.numberOfParticles = 30
        this.particles = []
    }

    draw() {
        for (let p of this.particles) {
            p.draw()
        }
    }

    update() {
        // 过时则删除该粒子系统
        this.duration--
        if (this.duration < 0) {
            this.removeFromScene()
        }
        // 添加小火花
        if (this.particles.length < this.numberOfParticles) {
            let p = Particle.new(this.game)
            // 设置初始化坐标
            let s = 3
            let vx = randomBetween(-s, s)
            let vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        for (let p of this.particles) {
            // 更新所有小火花
            p.update()
        }
        // 删除死掉的小火花
        this.particles = this.particles.filter(p => p.life > 0)
    }

    removeFromScene() {
        let s = this.game.scene
        let es = s.elements
        let index = es.indexOf(this)
        es.splice(index, 1)
    }
}