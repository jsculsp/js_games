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
        this.bg = BaseImg.new(this.game, 'sky')
        let label = BaseLabel.new(this.game, '按 k 开始游戏')
        this.__addElement(label)
    }

    setupInputs() {
        this.game.registerAction('k', () => {
            if (Object.getPrototypeOf(this.game.scene) === Object.getPrototypeOf(this)) {
                let s = new Scene(this.game)
                this.game.replaceScene(s)
            }
        })
    }
}