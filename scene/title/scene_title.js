/**
 * Created by linmu on 2017/8/28.
 */

class SceneTitle extends BaseScene {
    constructor(game) {
        super(game)
        document.addEventListener('keypress', function(event){
            let key = event.key
            if (key === 'k') {
                if (Object.getPrototypeOf(game.scene) === SceneTitle.prototype) {
                    let s = Scene(game)
                    game.replaceScene(s)
                }
            }
        })
    }
    draw() {
        // draw labels
        this.game.context.fillText('按 k 开始游戏', 160, 150)
    }
}