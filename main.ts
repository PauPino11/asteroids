controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 . 3 3 3 . 1 . . . . 
        . . . . . . 3 3 3 3 3 1 . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . . . . 3 b 3 . . . . . . 
        . . . . . . . 3 b 3 1 . . . . . 
        . . . . . . . 3 3 3 1 . . . . . 
        . . . . . . . 3 3 3 1 . . . . . 
        . . . . . . . 3 3 3 . . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . . 3 b b 3 3 b 3 . . . . 
        . . . . . 3 b 3 3 3 b 3 . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        `, OTHER_SPRITE, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    ASTEROID.destroy()
    OTHER_SPRITE.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    OTHER_SPRITE.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
})
let ASTEROID: Sprite = null
let projectile: Sprite = null
let OTHER_SPRITE: Sprite = null
game.splash("BENVINGUTS A L'ESPAI", "SI VOLS SOBREVIURE MATA ELS")
game.splash("CLI A PER COMENÇAR I B PER DISPARAR")
OTHER_SPRITE = sprites.create(img`
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
OTHER_SPRITE.setPosition(80, 50)
controller.moveSprite(OTHER_SPRITE, 100, 100)
OTHER_SPRITE.setStayInScreen(true)
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
        `, 0, 50)
    ASTEROID.x += randint(0, scene.screenWidth())
    ASTEROID.setKind(SpriteKind.Enemy)
})
