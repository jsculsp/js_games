/**
 * Created by linmu on 2017/8/29.
 */

class Bullet extends BaseImg {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }

    setup() {
        this.speed = 3
    }

    update() {
        this.speed = config.bullet_speed
        this.y -= this.speed
        if (this.y < -100) {
            this.removeFromScene()
        }
        // 判断击中敌机
        let enemies = this.game.scene.enemies
        // 子弹击中敌机的同时玩家和敌机相撞会产生 bug，这样可以修复
        if (!enemies) {
            return
        }
        for (let e of enemies) {
            if (firstInSecond(e, this) || firstInSecond(this, e)) {
                // add particles
                let x = e.x + 0.5 * e.w
                let y = e.y + 0.5 * e.h
                let ps = ParticleSystem.new(this.game, x, y)
                this.game.scene.__addElement(ps)
                // reset this enemy
                e.setup()
                // remove bullet
                this.removeFromScene()
            }
        }
    }
}
