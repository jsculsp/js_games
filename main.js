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
        blue_block_1: 'img/blocks/blue_block_1.png',
        blue_block_2: 'img/blocks/blue_block_2.png',
        blue_block_3: 'img/blocks/blue_block_3.png',
        green_block_1: 'img/blocks/green_block_1.png',
        green_block_2: 'img/blocks/green_block_2.png',
        green_block_3: 'img/blocks/green_block_3.png',
        orange_block_1: 'img/blocks/orange_block_1.png',
        orange_block_2: 'img/blocks/orange_block_2.png',
        orange_block_3: 'img/blocks/orange_block_3.png',
        pink_block_1: 'img/blocks/pink_block_1.png',
        pink_block_2: 'img/blocks/pink_block_2.png',
        pink_block_3: 'img/blocks/pink_block_3.png',
        purple_block_1: 'img/blocks/purple_block_1.png',
        purple_block_2: 'img/blocks/purple_block_2.png',
        purple_block_3: 'img/blocks/purple_block_3.png',
        red_block_1: 'img/blocks/red_block_1.png',
        red_block_2: 'img/blocks/red_block_2.png',
        red_block_3: 'img/blocks/red_block_3.png',
        yellow_block_1: 'img/blocks/yellow_block_1.png',
        yellow_block_2: 'img/blocks/yellow_block_2.png',
        yellow_block_3: 'img/blocks/yellow_block_3.png',
        background: 'img/background.jpg',
        ball: 'img/ball.png',
        paddle: 'img/paddle.png',
    }
    let game = new BallGame(60, images, function (g) {
        let s = new SceneTitle(g)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)
}

__main()
