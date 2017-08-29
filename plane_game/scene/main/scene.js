class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.numberOfEnemies = 10
        this.numberOfClouds = 3
        this.bg = BaseImg.new(this.game, 'sky')
        this.player = Player.new(this.game)
        this.__addElement(this.bg)
        this.__addElement(this.player)
        this.__addClouds()
        this.__addEnemies()
    }

    setupInputs() {
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
        g.registerAction('j', () => {
            s.player.fire()
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

    __addClouds() {
        let cs = []
        for (let i = 0; i < this.numberOfClouds; i++) {
            let c = Cloud.new(this.game)
            cs.push(c)
            this.__addElement(c)
        }
        this.clouds = cs
    }
}