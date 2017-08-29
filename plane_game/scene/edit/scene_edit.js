/**
 * Created by linmu on 2017/8/28.
 */

class SceneEdit extends BaseScene {
    constructor(game) {
        super(game)
        // mouse event
        this.blocks = []
        this.arrays = []
        this.game.canvas.addEventListener('click', (event) => {
            if (Object.getPrototypeOf(game.scene) === Object.getPrototypeOf(this)) {
                let x = event.offsetX
                let y = event.offsetY
                let array = [x, y, 3]
                let block = blockByArray(this.game, array)
                this.arrays.push(array)
                this.blocks.push(block)
            }
        })
        game.registerAction('s', () => {
            if (Object.getPrototypeOf(game.scene) === Object.getPrototypeOf(this)) {
                let arraysJson = JSON.stringify(this.arrays)
                localStorage.setItem('arrays', arraysJson)
                let s = new Scene(game)
                game.replaceScene(s)
            }
        })
    }

    draw() {
        // draw blocks
        for (let i = 0; i < this.blocks.length; i++) {
            let block = this.blocks[i]
            if (block.alive) {
                this.game.drawImage(block)
            }
        }
        // draw labels
        this.game.context.fillText('按 s 保存关卡并进入游戏', 230, 290)
    }
}