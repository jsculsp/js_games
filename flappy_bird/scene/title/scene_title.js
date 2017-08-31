/**
 * Created by linmu on 2017/8/28.
 */

class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.end = false
        // 背景
        let bg = Bg.new(this.game)
        this.__addElement(bg)
        // 管子
        this.pipes = Pipes.new(this.game)
        this.__addElement(this.pipes)
        // 地面
        let field = Field.new(this.game, this)
        this.__addElement(field)
        // player
        let b = BirdAnimation.new(this.game)
        this.bird = b
        this.__addElement(b)
    }

    setupInputs() {
        let b = this.bird
        this.game.registerAction('j', () => {
            b.jump()
        })
        this.game.registerAction('a', () => {
            b.headLeft(b.speed)
        })
        this.game.registerAction('d', () => {
            b.headRight(b.speed)
        })
    }
}