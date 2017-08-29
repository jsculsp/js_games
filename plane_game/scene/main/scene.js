class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.__setup()
    }

    __setup() {
        this.bg = BaseImg.new(this.game, 'sky')
        this.cloud = Cloud.new(this.game, 'cloud')
        this.player = Player.new(this.game, 'player')
        this.elements.push(this.bg)
        this.elements.push(this.cloud)
        this.elements.push(this.player)

        // key event
        this.game.registerAction('a', () => {
            this.player.moveLeft()
        })
        this.game.registerAction('d', () => {
            this.player.moveRight()
        })
        this.game.registerAction('w', () => {
            this.player.moveUp()
        })
        this.game.registerAction('s', () => {
            this.player.moveDown()
        })
    }

    update() {
        this.cloud.y += this.cloud.speed
    }
}