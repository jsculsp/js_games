/**
 * Created by linmu on 2017/8/26.
 */
const __main = function () {
    let images = {
        bg: 'img/bg.png',
        ground: 'img/ground.png',
        bird1: 'img/bird1.png',
        bird2: 'img/bird2.png',
        bird3: 'img/bird3.png',
    }

    BirdGame.instance(60, images, function (g) {
        let s = new SceneTitle(g)
        g.runWithScene(s)
    })
}

__main()
