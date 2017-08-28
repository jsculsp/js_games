/**
 * Created by linmu on 2017/8/28.
 */

class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('k', () => {
            if (Object.getPrototypeOf(game.scene) === Object.getPrototypeOf(this)) {
                let s = new Scene(game)
                game.replaceScene(s)
            }
        })
        game.registerAction('e', () => {
            if (Object.getPrototypeOf(game.scene) === Object.getPrototypeOf(this)) {
                let s = new SceneEdit(game)
                game.replaceScene(s)
            }
        })
    }

    draw() {
        // draw labels
        this.game.context.fillText('按 k 开始游戏', 160, 150)
        this.game.context.fillText('按 e 编辑关卡', 160, 180)
    }
}