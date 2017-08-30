class Bg extends BaseImg{
    constructor(game) {
        super(game, 'bg')
    }

    draw() {
        let ctx = this.game.context
        ctx.drawImage(this.texture, this.x, this.y, 640, 960)
    }
}