/**
 * Created by linmu on 2017/8/28.
 */

class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)
        // 背景
        let bg = BaseImg.new(game, 'bg')
        this.__addElement(bg)
        // player
        let w = BaseAnimation.new(game)
        w.x = 100
        w.y = 200
        this.w = w
        this.__addElement(w)
        this.setupInputs()
    }

    setupInputs() {
        this.game.registerAction('a', (keyStatus) => {
            this.w.moveRight(2, keyStatus)
        })
        this.game.registerAction('d', (keyStatus) => {
            this.w.moveLeft(2, keyStatus)
        })
        this.game.registerAction('j', (keyStatus) => {
            this.w.doAction(keyStatus)
        })
        this.game.registerAction('k', (keyStatus) => {
            this.w.doOppositeAction(keyStatus)
        })
    }
}