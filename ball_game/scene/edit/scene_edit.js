/**
 * Created by linmu on 2017/8/28.
 */

class SceneEdit extends BaseScene {
    constructor(game) {
        super(game)
    }

    draw() {
        // draw labels
        this.game.context.fillText('编辑关卡咯！！！', 160, 150)
    }
}