/**
 * Created by linmu on 2017/8/28.
 */

class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function(){
            if (Object.getPrototypeOf(game.scene) === SceneTitle.prototype) {
                let s = Scene(game)
                game.replaceScene(s)
            }
        })
    }

    draw() {
        // draw labels
        this.game.context.fillText('按 k 开始游戏', 160, 150)
    }
}