/**
 * Created by linmu on 2017/8/26.
 */

const templateControl = function (key, item) {
    let t = `
        <div>
            <label>
                <input class="auto-slider" type="range"
                       max="500"
                       value="${item.value}"
                       data-value="config.${key}"
                >
                ${item._comment}：<span class="label">${item.value}</span>
            </label>
        </div>
    `
    return t
}

const insertControls = function () {
    let div = _e('.controls')
    let keys = Object.keys(config)
    for (let k of keys) {
        let item = config[k]
        let html = templateControl(k, item)
        div.insertAdjacentHTML('beforeend', html)
    }
}

const bindEvents = function () {
    bindAll('.auto-slider', 'input', function (event) {
        let target = event.target
        let bindVar = target.dataset.value
        let v = target.value
        eval(`${bindVar}.value = ${v}`)
        let label = target.closest('label').querySelector('span.label')
        label.innerText = v
    })
}

const __main = function () {

    // 从配置文件生成 HTML 控件
    insertControls()
    // 绑定事件
    bindEvents()

    let images = {
        bg: 'img/bg.png',
        pipe: 'img/pipe.png',
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
