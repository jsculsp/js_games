/**
 * Created by linmu on 2017/8/28.
 */

class SceneEnd extends BaseScene {
    constructor(game) {
        super(game)
        document.addEventListener('keypress', function(event){
            let key = event.key
            if (key === 'r') {
                if (Object.getPrototypeOf(game.scene) === SceneEnd.prototype) {
                    let s = Scene(game)
                    game.replaceScene(s)
                }
            }
        })
    }
    draw() {
        // draw labels
        this.game.context.fillText('游戏结束，按 r 重新开始游戏', 140, 160)
    }
}
