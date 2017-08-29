/**
 * Created by linmu on 2017/8/26.
 */
const __main = function () {
    let images = {
        sky: 'img/sky0.png',
        cloud0: 'img/cloud0.png',
        cloud1: 'img/cloud1.png',
        player: 'img/player.png',
        bullet: 'img/bullet0.png',
        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        enemy4: 'img/enemy4.png',
        enemy5: 'img/enemy5.png',
    }
    PlaneGame.instance(60, images, function (g) {
        let s = new Scene(g)
        g.runWithScene(s)
    })
}

__main()
