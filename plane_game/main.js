/**
 * Created by linmu on 2017/8/26.
 */

let blocks = []

let enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k === 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('123456789'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            blocks = loadLevel(game, parseInt(k))
        }
        // 控制速度
        let speedController = _e('#id-input-speed')
        speedController.addEventListener('input', function (event) {
            let input = event.target
            input.value = input.value <= 1 ? 1: input.value
            window.fps = Number(input.value)
        })
    })
}

const __main = function () {
    let images = {
        sky: 'img/sky2.png',
        cloud: 'img/cloud1.png',
        player: 'img/player.png',
        bullet: 'img/bullet1.png',
        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        enemy4: 'img/enemy4.png',
        enemy5: 'img/enemy5.png',
    }
    let game = PlaneGame.instance(60, images, function (g) {
        let s = new Scene(g)
        g.runWithScene(s)
    })
    enableDebugMode(game, false)
}

__main()
