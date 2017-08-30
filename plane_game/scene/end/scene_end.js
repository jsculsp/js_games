/**
 * Created by linmu on 2017/8/28.
 */

class SceneEnd extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('r', () => {
            if (Object.getPrototypeOf(game.scene) === Object.getPrototypeOf(this)) {
                let s = new Scene(game)
                game.replaceScene(s)
            }
        })
    }

    draw() {
        // draw labels
        this.game.context.fillText('游戏结束', 240, 360)
        this.game.context.fillText('按 r 重新开始游戏', 180, 560)
    }
}
