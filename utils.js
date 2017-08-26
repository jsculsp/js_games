/**
 * Created by linmu on 2017/8/26.
 */

const firstInSecond = function(a, b) {
    if (b.y > a.y && b.y < a.y + a.image.height) {
        if (b.x > a.x && b.x < a.x + a.image.width) {
            return true
        }
    }
    return false
}

const imageFromPath = function (path) {
    let img = new Image()
    img.src = path
    return img
}