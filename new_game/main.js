/**
 * Created by linmu on 2017/8/26.
 */
const __main = function () {
    let pathByParam = function (p1, p2) {
        return `img/${p1}/${p1}_${p2}.gif`
    }
    
    let genImages = function (action, num) {
        let images = {}
        let p2
        for (let i = 1; i < num + 1; i++) {
            if (i >= 10) {
                p2 = `0${i}`
            } else {
                p2 = `00${i}`
            }
            images[`${action}${i}`] = pathByParam(action, p2)
        }
        return images
    }
    
    let stand = genImages('stand', 27)
    let action = genImages('action', 70)
    let left = genImages('left', 5)
    let right = genImages('right', 16)
    let images = Object.assign({}, stand, action, left, right)

    PlaneGame.instance(60, images, function (g) {
        let s = new SceneTitle(g)
        g.runWithScene(s)
    })
}

__main()
