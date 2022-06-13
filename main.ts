let ASTEROID: Sprite = null
game.splash("BENVINGUTS A L'ESPAI", "SI VOLS SOBREVIURE MATA ELS")
game.splash("CLI A PER COMENÇAR I B PER DISPARAR")
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . 6 1 6 . . . . . . . 
    . . . . . . 8 6 8 . . . . . . . 
    . . . . . . 8 6 8 . . . . . . . 
    . . . . . . 8 6 8 . . . . . . . 
    . . . . . 8 8 6 8 8 . . . . . . 
    . . . . 8 8 6 6 6 8 8 . . . . . 
    . . 8 8 8 6 6 6 6 6 8 8 8 . . . 
    . . . . f . . . . . f . . . . . 
    . . . 2 2 2 . . . 2 2 2 . . . . 
    . . . 4 4 4 . . . 4 4 4 . . . . 
    . . . 5 2 5 . . . 5 2 5 . . . . 
    . . . 2 5 2 . . . 2 5 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(80, 50)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(4)
game.onUpdate(function () {
    ASTEROID = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c . . . . . . . 
        . . . c a a f f c c c c c . . . 
        . . . c a b c f c a a c a a . . 
        . . c c c c c c c a a c c a . . 
        . . f f f c a c c f f c a c . . 
        . . f f f c a a c f c c c c . . 
        . . a f c c c a a b b c c c . . 
        . . a a c b b a c c c c . . . . 
        . . . a c c c c c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 50)
    ASTEROID.x += randint(0, scene.screenWidth())
})
