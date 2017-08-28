/**
 * Created by linmu on 2017/8/28.
 */

let SceneEnd = function(game) {
    let s = {
        game: game,
    }
    // 初始化
    s.draw = function() {
        // draw labels
        game.context.fillText('游戏结束', 100, 290)
    }
    s.update = function() {

    }
    return s
}
