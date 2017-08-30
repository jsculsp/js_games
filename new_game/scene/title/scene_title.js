/**
 * Created by linmu on 2017/8/28.
 */

class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)
        let w = BaseAnimation.new(game)
        w.x = 100
        w.y = 200
        this.w = w
        this.__addElement(w)
        this.setupInputs()
    }

    setupInputs() {
        this.game.registerAction('a', () => {
            this.w.move(-2)
        })
        this.game.registerAction('d', () => {
            this.w.move(2)
        })
    }
}