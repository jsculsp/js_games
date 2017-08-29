class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.__setup()
    }

    __setup() {
        this.bg = BaseImg.new(this.game, 'sky')
        this.cloud = Cloud.new(this.game, 'cloud')
        this.player = Player.new(this.game, 'player')
        this.__addElement(this.bg)
        this.__addElement(this.cloud)
        this.__addElement(this.player)

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

    __addElement(element) {
        this.elements.push(element)
    }

    update() {
        this.cloud.y += this.cloud.speed
    }
}