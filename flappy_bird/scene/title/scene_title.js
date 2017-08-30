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
        // 背景
        let bg = Bg.new(this.game)
        this.__addElement(bg)
        // 地面
        let field = Field.new(this.game, this)
        this.__addElement(field)
        // player
        let a = BirdAnimation.new(this.game)
        this.a = a
        this.__addElement(a)
    }

    setupInputs() {
        this.game.registerAction('a', (keyStatus) => {
            this.a.moveRight(2, keyStatus)
        })
        this.game.registerAction('d', (keyStatus) => {
            this.a.moveLeft(2, keyStatus)
        })
        this.game.registerAction('j', (keyStatus) => {
            this.a.doAction(keyStatus)
        })
        this.game.registerAction('k', (keyStatus) => {
            this.a.doOppositeAction(keyStatus)
        })
    }
}