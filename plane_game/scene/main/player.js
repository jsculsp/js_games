/**
 * Created by linmu on 2017/8/29.
 */

class Player extends BaseImg{
    constructor(game) {
        super(game, 'player')
        this.setup()
    }

    setup() {
        this.x = 300
        this.y = 700
        this.speed = 5
        this.cooldown = 0
    }

    fire() {
        if (this.cooldown === 0) {
            this.cooldown = 5
            let x = this.x + this.w / 2
            let y = this.y
            let b = Bullet.new(this.game)
            b.x = x
            b.y = y
            this.scene.__addElement(b)
        }
    }

    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown--
        }
    }

    __moveToX(x) {
        if (x < 0) {
            x = 0
        } else if (x > 640 - this.w) {
            x = 640 - this.w
        }
        this.x = x
    }

    __moveToY(y) {
        if (y < 0) {
            y = 0
        } else if (y > 960 - this.w) {
            y = 960 - this.w
        }
        this.y = y
    }

    moveLeft() {
        this.__moveToX(this.x - this.speed)
    }

    moveRight() {
        this.__moveToX(this.x + this.speed)
    }

    moveUp() {
        this.__moveToY(this.y - this.speed)
    }

    moveDown() {
        this.__moveToY(this.y + this.speed)
    }
}