class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.__setup()
        this.__setupInputs()
    }

    __setup() {
        this.numberOfEnemies = 10
        this.bg = BaseImg.new(this.game, 'sky')
        this.cloud = Cloud.new(this.game)
        this.player = Player.new(this.game)
        this.__addElement(this.bg)
        this.__addElement(this.cloud)
        this.__addElement(this.player)
        this.__addEnemies()
    }

    __setupInputs() {
        let g = this.game
        let s = this
        // key event
        g.registerAction('a', () => {
            s.player.moveLeft()
        })
        g.registerAction('d', () => {
            s.player.moveRight()
        })
        g.registerAction('w', () => {
            s.player.moveUp()
        })
        g.registerAction('s', () => {
            s.player.moveDown()
        })
    }

    __addEnemies() {
        let es = []
        for (let i = 0; i < this.numberOfEnemies; i++) {
            let e = Enemy.new(this.game)
            es.push(e)
            this.__addElement(e)
        }
        this.enemies = es
    }

    update() {
        super.update()
        this.cloud.y += this.cloud.speed
        if (this.cloud.y > 960) {
            this.cloud.y = 0
        }
    }
}