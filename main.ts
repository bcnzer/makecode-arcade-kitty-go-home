namespace SpriteKind {
    export const Tree = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath4, function (sprite, location) {
    game.over(true, effects.hearts)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass1, function (sprite, location) {
    sayWetPaws()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass3, function (sprite, location) {
    sayWetPaws()
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    sayWetPaws()
})
function sayWetPaws () {
    myCat.say("Wet paws!", 250)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let car3: Sprite = null
let car2: Sprite = null
let car1: Sprite = null
let myCat: Sprite = null
game.splash("KITTY GO HOME", "Watch out for traffic!")
tiles.setTilemap(tilemap`level1`)
myCat = sprites.create(img`
    . . . . e e e . . . . e e e 
    . . . . c d d c . . c d d c 
    . . . . c b d d f f d d b c 
    . . . . c 3 b d b d d b 3 c 
    . . . . f b 3 d d d d 3 b f 
    . . . . e d d d d d d d d e 
    b f b . e d f d d d d f d e 
    f d f . f d d f d d f d d f 
    f d f . f 2 d d b b d d b f 
    f d f f b b 2 2 2 2 2 2 f . 
    f b d b b d d d d d d b f . 
    . f f f d d b d d d d d f . 
    . . . f d f f d f f f d f . 
    . . . f f . . f f . . f f . 
    `, SpriteKind.Player)
controller.moveSprite(myCat)
let badDog = sprites.create(img`
    . . . . 4 4 4 . . . . 4 4 4 . . 
    . . . 4 5 5 5 e . . e 5 5 5 4 . 
    . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
    . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
    . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
    . . . e e 5 5 5 5 5 5 5 5 e e . 
    . . . . e 5 f 5 5 5 5 f 5 e . . 
    f f . . f 5 5 5 4 4 5 5 5 f . . 
    f 5 f . f 6 5 5 f f 5 5 4 f . . 
    f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
    . f 5 4 4 5 5 5 5 5 5 4 f . . . 
    . . f f 5 5 4 5 5 5 5 5 f . . . 
    . . . f 5 f f 5 f f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
badDog.follow(myCat, 75)
scene.cameraFollowSprite(myCat)
myCat.setPosition(0, 160)
myCat.setStayInScreen(true)
let myTree1 = sprites.create(img`
    ................86..................
    ...........6688867886...............
    ...........8666877688868............
    ............868777767768............
    .........688667777776688............
    ........67767777777778666...........
    .........6776667767666868...........
    ..........866667667677688...........
    .........8666666666667778...........
    ........667766666666666676..........
    .......67766667666776667776.........
    ......886667776676777666688.........
    .....67766777667767777666768........
    ....6776666666777667776666776.......
    .....8667776667766676677776776......
    ......8777666666667776777776688.....
    ....6887766776677677777777776776....
    ..8866666677767777777777766666778...
    .86666666777667767777766666776668...
    ..88677666666777677677666667776668..
    ..86776677666666666666667776666668..
    886666677766667666666776677766668...
    6668666676667766767767766677666668..
    88866666666777677677667666666776668.
    .86668866666766776776666667766666668
    .86688666666666776666667667776666688
    .668866666666666666666677666666688..
    ..8866686666666666677667776666668...
    ...866886666666666677667776666668...
    ...86886668666666667666666666888....
    ....88866886686666666666666668......
    ......86886668666866668666868.......
    ......88866688668866688866888.......
    ........8888888688888ce868..........
    ..............e88e88.ec.8...........
    ...............eeee..e..............
    ...............ceef.ce..............
    ...............ceefcec..............
    ...............feefce...............
    ...............fceeec...............
    ...............ffceec...............
    `, SpriteKind.Tree)
myTree1.setPosition(200, 200)
let myTree2 = sprites.create(img`
    .............6666...............
    ..........666667766.6666........
    .........677777777767776........
    ......66667775577757777666......
    .....677666675557557776777666...
    .....6776777775555577777766776..
    ...66666777777775777777766666...
    .66667767777755757555777776776..
    6666777677775577557555777767766.
    .6667767777777775577777777767666
    .c6766777677777775777777677766..
    cc77666667777777777777777666666c
    cc76666677777777777777777766776c
    c6666776777777777777766677666776
    66667766667776777767767766766666
    ccc76677677776677766767776776ccc
    cc7766776777677677676667767766cc
    .666c676667677766667766666666cc.
    .ccc66676666776666677677666cccc.
    ...ccc77c6767666676676677666ccc.
    ...cc676c7766676677666666c666cc.
    ....c6cc676c6677677c66c666ccc...
    ....ccccc6c66667667cc6ccc6ccc...
    ......ccccc66c66c66cccccccc.....
    .......cc.cc6c6ccc6cccc.cc......
    ...........cccccccccc...........
    .............feeeeee............
    ............feeeeeefe...........
    .........eeeeefeeeffee..........
    ............ffffeef..ee.........
    ...............fee..............
    ................e...............
    `, SpriteKind.Tree)
myTree2.setPosition(120, 77)
let myTree3 = sprites.create(img`
    ......cc66......
    .....c6576c.....
    ....c677576c....
    ....cc677666....
    ...cc6c6667cc...
    ..6c666777cc6c..
    ..c76666766776..
    ..c6777777776c..
    ..cc67777776cc..
    .c67cc76676676c.
    .c777666667777c.
    .c6777777777766.
    .cc7767776776666
    c676cc6766666776
    c777766666677776
    cc7777777777776c
    .c676777677767c.
    ..cc667666766c..
    ...ccc6c66ccc...
    .....cccccc.....
    .......ee.......
    ......eeee......
    .....eeeeee.....
    .......ee.......
    `, SpriteKind.Tree)
myTree3.setPosition(75, 160)
game.onUpdateInterval(500, function () {
    if (randint(0, 1) == 0) {
        car1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 6 6 . . . . 
            . . . . . 6 6 9 9 6 6 6 6 . . . 
            . . . . . c 9 6 6 6 6 6 c . . . 
            . . . . 6 c 9 6 6 6 6 6 c 6 . . 
            . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
            . . . f 6 c 9 6 6 6 6 6 c 6 f . 
            . . . f 8 c 6 6 6 6 6 6 c 8 f . 
            . . . f 6 c 6 b b b b 6 c 6 f . 
            . . . 8 6 6 b c c c c b 6 6 8 . 
            . . . 8 8 b c c c c c c b 8 8 . 
            . . . f 8 9 9 9 9 9 9 9 9 8 f . 
            . . . f 8 d 6 6 6 6 6 6 d 8 f . 
            . . . . 6 d d 6 6 6 6 d d 6 f . 
            . . . . f 6 d 6 6 6 6 d 6 f . . 
            . . . . . 8 6 6 6 6 6 6 8 . . . 
            `, SpriteKind.Enemy)
        car1.setPosition(55, 0)
        car1.setVelocity(0, 50)
    }
    if (randint(0, 1) == 0) {
        car2 = sprites.create(img`
            . . . . . . e e c c e e . . . . 
            . . . . . e 2 2 2 2 2 2 e . . . 
            . . . . 2 c 2 2 2 2 2 2 c 2 . . 
            . . . e 2 c 4 2 2 2 2 2 c 2 e . 
            . . . f 2 2 4 2 2 2 2 2 c 2 f . 
            . . . f 2 2 4 2 2 2 2 2 2 2 f . 
            . . . f 2 2 4 2 2 2 2 2 2 2 f . 
            . . . f 2 c 2 4 4 2 2 2 c 2 f . 
            . . . e 2 c e c c c c e c 2 e . 
            . . . e 2 e c b b b b c e 2 e . 
            . . . e 2 e b b b b b b e 2 e . 
            . . . e e e e e e e e e e e e . 
            . . . f e d e e e e e e d e f . 
            . . . f e 2 d e e e e d 2 e f . 
            . . . f f e e e e e e e e f f . 
            . . . . f f . . . . . . f f . . 
            `, SpriteKind.Enemy)
        car2.setPosition(135, 0)
        car2.setVelocity(0, 75)
    }
    if (randint(0, 1) == 0) {
        car3 = sprites.create(img`
            . . . . . . a a c c a a . . . . 
            . . . . . a 3 3 3 3 3 3 a . . . 
            . . . . 3 c 3 3 3 3 3 3 c 3 . . 
            . . . a 3 c d 3 3 3 3 3 c 3 a . 
            . . . f 3 3 d 3 3 3 3 3 c 3 f . 
            . . . f 3 3 d 3 3 3 3 3 3 3 f . 
            . . . f 3 3 d 3 3 3 3 3 3 3 f . 
            . . . f 3 c 3 d d 3 3 3 c 3 f . 
            . . . a 3 c a c c c c a c 3 a . 
            . . . a 3 a c b b b b c a 3 a . 
            . . . a 3 a b b b b b b a 3 a . 
            . . . a a a a a a a a a a a a . 
            . . . f a d a a a a a a d a f . 
            . . . f a 3 d a a a a d 3 a f . 
            . . . f f a a a a a a a a f f . 
            . . . . f f . . . . . . f f . . 
            `, SpriteKind.Enemy)
        car3.setPosition(215, 250)
        car3.setVelocity(0, -75)
    }
})
