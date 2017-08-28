/**
 * Created by linmu on 2017/8/28.
 */

class SceneEnd extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function(){
            if (Object.getPrototypeOf(game.scene) === SceneEnd.prototype) {
                let s = Scene(game)
                game.replaceScene(s)
            }
        })
    }

    draw() {
        // draw labels
        this.game.context.fillText('游戏结束，按 r 重新开始游戏', 140, 160)
    }
}
