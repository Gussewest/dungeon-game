namespace SpriteKind {
    export const Girlfriend = SpriteKind.create()
}
function LVL_one () {
    LVL_1 = true
    tiles.setCurrentTilemap(tilemap`LVL 2`)
    arlo.setPosition(10, 100)
    Enemy1 = sprites.create(assets.image`Enemy 1`, SpriteKind.Enemy)
    Enemy1.setPosition(81, 43)
    Enemy_2 = sprites.create(assets.image`Enemy 1`, SpriteKind.Enemy)
    Enemy_2.setPosition(125, 79)
    Enemy_3 = sprites.create(assets.image`Enemy 1`, SpriteKind.Enemy)
    Enemy_3.setPosition(123, 18)
    Enemy1.follow(arlo, 40)
    Enemy_2.follow(arlo, 40)
    Enemy_3.follow(arlo, 40)
    animation.runImageAnimation(
    Enemy1,
    assets.animation`myAnim1`,
    200,
    true
    )
    animation.runImageAnimation(
    Enemy_2,
    assets.animation`myAnim1`,
    200,
    true
    )
    animation.runImageAnimation(
    Enemy_3,
    assets.animation`myAnim1`,
    200,
    true
    )
    animation.runImageAnimation(
    arlo,
    assets.animation`Player moving`,
    200,
    true
    )
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LVL_1) {
        Kill()
    }
    if (LVL_2) {
        Kill2()
    }
    if (LVL_3) {
        Kill3()
    }
    if (LVL_BOSS) {
        Kill_Boss()
    }
})
function Enemykill () {
    if (arlo.overlapsWith(Enemy1)) {
        info.changeLifeBy(-1)
    } else if (arlo.overlapsWith(Enemy_2)) {
        info.changeLifeBy(-1)
    } else if (arlo.overlapsWith(Enemy_3)) {
        info.changeLifeBy(-1)
    }
}
function LVL_Boss () {
    LVL_BOSS = true
    tiles.setCurrentTilemap(tilemap`Boss LVL`)
    arlo.setPosition(1, 120)
    BOSSMAN = sprites.create(assets.image`Bossman`, SpriteKind.Enemy)
    BOSSMAN.setPosition(119, 80)
    BOSSMAN.follow(arlo, 30)
    animation.runImageAnimation(
    BOSSMAN,
    assets.animation`Boss Animation`,
    500,
    true
    )
    BOSSMAN_Lives = 1
    animation.runImageAnimation(
    arlo,
    assets.animation`Player moving`,
    200,
    true
    )
}
function LVL_three () {
    LVL_3 = true
    tiles.setCurrentTilemap(tilemap`level 3`)
    arlo.setPosition(1, 120)
    Enemy_8 = sprites.create(assets.image`Enemy 3`, SpriteKind.Enemy)
    Enemy_8.setPosition(150, 140)
    Enemy_8.follow(arlo, 60)
    animation.runImageAnimation(
    Enemy_8,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . 4 4 4 4 4 . . . . . . . . 
        . . 4 4 e e e 4 4 . . . . . . . 
        . . 4 e e e e e 4 . . . . . . . 
        . 4 4 e 2 e 2 e 4 4 . . . . . . 
        . . . e e e e e . . . . . f b . 
        . . . e e f e e . . e e f b b . 
        e e . . . e . . . e e f b b b . 
        . e e 2 2 2 2 2 e e f . . . . . 
        . . . 2 2 2 2 2 . f . . . . . . 
        . . . 2 2 2 2 2 . . . . . . . . 
        . . . 2 2 2 2 2 . . . . . . . . 
        . . . f f . f f . . . . . . . . 
        . . f f . . . f f . . . . . . . 
        . f f . . . . . f f . . . . . . 
        . f . . . . . . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . 4 4 4 4 4 . . . . . . . . 
        . . 4 4 e e e 4 4 . . . . . . . 
        . . 4 e e e e e 4 . . . . . . . 
        . 4 4 e 2 e 2 e 4 4 . . . . . . 
        . . . e e e e e . . . . . . . . 
        . . . e e f e e . . . . . . . . 
        e e . . . e . . . . . . . . . . 
        . e e 2 2 2 2 2 e e e f f f f f 
        . . . 2 2 2 2 2 . . f . . b b b 
        . . . 2 2 2 2 2 . . . . . . b . 
        . . . 2 2 2 2 2 . . . . . . . . 
        . . . f f . f f . . . . . . . . 
        . . . f f . f f . . . . . . . . 
        . . . f f . f f . . . . . . . . 
        . . . f f . f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . 4 4 4 4 4 . . . . . . . . 
        . . 4 4 e e e 4 4 . . . . . . . 
        . . 4 e e e e e 4 . . . . . . . 
        . 4 4 e 2 e 2 e 4 4 . . . . . . 
        . . . e e e e e . . . . . . . . 
        . . . e e f e e . . . . . . . . 
        e e . . . e . . . . . . . . . . 
        . e e 2 2 2 2 2 e e . . . . . . 
        . . . 2 2 2 2 2 . e e . . . . . 
        . . . 2 2 2 2 2 . . e f f . . . 
        . . . 2 2 2 2 2 . . . . f f f . 
        . . . f f . f f . . . . . b f f 
        . . f f . . . f f . . . . b b f 
        . f f . . . . . f f . . . . . . 
        . f . . . . . . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . 4 4 4 4 4 . . . . . . . . 
        . . 4 4 e e e 4 4 . . . . . . . 
        . . 4 e e e e e 4 . . . . . . . 
        . 4 4 e 2 e 2 e 4 4 . . . . . . 
        . . . e e e e e . . . . . f b . 
        . . . e e f e e . . e e f b b . 
        e e . . . e . . . e e f b b b . 
        . e e 2 2 2 2 2 e e f . . . . . 
        . . . 2 2 2 2 2 . f . . . . . . 
        . . . 2 2 2 2 2 . . . . . . . . 
        . . . 2 2 2 2 2 . . . . . . . . 
        . . . f f . f f . . . . . . . . 
        . . f f . . . f f . . . . . . . 
        . f f . . . . . f f . . . . . . 
        . f . . . . . . . f f . . . . . 
        `],
    250,
    true
    )
    Enemy_8_lives = 1
    animation.runImageAnimation(
    arlo,
    assets.animation`Player moving`,
    200,
    true
    )
}
function Kill2 () {
    animation.runImageAnimation(
    arlo,
    assets.animation`myAnim0`,
    200,
    false
    )
    if (arlo.overlapsWith(Enemy_4)) {
        sprites.destroy(Enemy_4)
    } else if (arlo.overlapsWith(Enemy_5)) {
        sprites.destroy(Enemy_5)
    } else if (arlo.overlapsWith(Enemy_6)) {
        sprites.destroy(Enemy_6)
    } else if (arlo.overlapsWith(Enemy_7)) {
        sprites.destroy(Enemy_7)
    }
}
function Kill () {
    animation.runImageAnimation(
    arlo,
    assets.animation`myAnim0`,
    200,
    false
    )
    if (arlo.overlapsWith(Enemy1)) {
        sprites.destroy(Enemy1)
    } else if (arlo.overlapsWith(Enemy_2)) {
        sprites.destroy(Enemy_2)
    } else if (arlo.overlapsWith(Enemy_3)) {
        sprites.destroy(Enemy_3)
    }
}
function BOSSMAN_Kill () {
    if (arlo.overlapsWith(BOSSMAN)) {
        info.changeLifeBy(-1)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles11, function (sprite, location) {
    LVL_one()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark1, function (sprite, location) {
    LVL_three()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark5, function (sprite, location) {
    LVL_Boss()
})
function Enemykill2 () {
    if (arlo.overlapsWith(Enemy_4)) {
        info.changeLifeBy(-1)
    } else if (arlo.overlapsWith(Enemy_5)) {
        info.changeLifeBy(-1)
    } else if (arlo.overlapsWith(Enemy_6)) {
        info.changeLifeBy(-1)
    } else if (arlo.overlapsWith(Enemy_7)) {
        info.changeLifeBy(-1)
    }
}
function LVL_two () {
    LVL_2 = true
    tiles.setCurrentTilemap(tilemap`LVL 0`)
    arlo.setPosition(100, 240)
    Enemy_4 = sprites.create(assets.image`Enemy 4`, SpriteKind.Enemy)
    Enemy_4.setPosition(150, 29)
    Enemy_5 = sprites.create(assets.image`Enemy 4`, SpriteKind.Enemy)
    Enemy_5.setPosition(114, 80)
    Enemy_6 = sprites.create(assets.image`Enemy 4`, SpriteKind.Enemy)
    Enemy_6.setPosition(39, 160)
    Enemy_7 = sprites.create(assets.image`Enemy 4`, SpriteKind.Enemy)
    Enemy_7.setPosition(60, 220)
    Enemy_4.follow(arlo, 65)
    Enemy_5.follow(arlo, 65)
    Enemy_6.follow(arlo, 65)
    Enemy_7.follow(arlo, 65)
    animation.runImageAnimation(
    Enemy_4,
    assets.animation`myAnim2`,
    300,
    true
    )
    animation.runImageAnimation(
    Enemy_5,
    assets.animation`myAnim2`,
    300,
    true
    )
    animation.runImageAnimation(
    Enemy_6,
    assets.animation`myAnim2`,
    300,
    true
    )
    animation.runImageAnimation(
    Enemy_7,
    assets.animation`myAnim2`,
    300,
    true
    )
    animation.runImageAnimation(
    arlo,
    assets.animation`Player moving`,
    200,
    true
    )
}
function Kill_Boss () {
    if (arlo.overlapsWith(BOSSMAN)) {
        BOSSMAN_Lives += 1
        if (BOSSMAN_Lives == 7) {
            sprites.destroy(BOSSMAN)
        }
    }
}
function Kill3 () {
    if (arlo.overlapsWith(Enemy_8)) {
        Enemy_8_lives += 1
        if (Enemy_8_lives == 4) {
            sprites.destroy(Enemy_8)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark2, function (sprite, location) {
    LVL_two()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorMixed, function (sprite, location) {
    Complete_lvl = true
    tiles.setCurrentTilemap(tilemap`level`)
    arlo.setPosition(0, 110)
    Girlfriend1 = sprites.create(assets.image`Girlfriend`, SpriteKind.Girlfriend)
    Girlfriend1.setPosition(130, 110)
})
function Enemykill3 () {
    if (arlo.overlapsWith(Enemy_8)) {
        info.changeLifeBy(-1)
    }
}
let Girlfriend1: Sprite = null
let Complete_lvl = false
let Enemy_7: Sprite = null
let Enemy_6: Sprite = null
let Enemy_5: Sprite = null
let Enemy_4: Sprite = null
let Enemy_8_lives = 0
let Enemy_8: Sprite = null
let BOSSMAN_Lives = 0
let BOSSMAN: Sprite = null
let LVL_BOSS = false
let LVL_3 = false
let LVL_2 = false
let Enemy_3: Sprite = null
let Enemy_2: Sprite = null
let Enemy1: Sprite = null
let LVL_1 = false
let arlo: Sprite = null
// Opretter Arlo, Skyggevogteren som en sprite
arlo = sprites.create(assets.image`MainCharacter`, SpriteKind.Player)
// Sætter kontrollerne til at bevæge Arlo
controller.moveSprite(arlo)
// Kameraet følger Arlo, når han bevæger sig rundt i verden
scene.cameraFollowSprite(arlo)
tiles.setCurrentTilemap(tilemap`Start`)
// Sætter Arlo's startposition i verdenen
arlo.setPosition(33, 110)
info.setLife(5)
animation.runImageAnimation(
arlo,
assets.animation`Player moving`,
200,
true
)
game.onUpdateInterval(1300, function () {
    if (LVL_2) {
        Enemykill2()
    }
})
game.onUpdateInterval(2000, function () {
    if (LVL_1) {
        Enemykill()
    }
})
game.onUpdateInterval(800, function () {
    if (LVL_3) {
        Enemykill3()
    }
})
game.onUpdateInterval(1500, function () {
    if (LVL_BOSS) {
        BOSSMAN_Kill()
    }
})
game.onUpdateInterval(500, function () {
    if (Complete_lvl) {
        if (arlo.overlapsWith(Girlfriend1)) {
            game.gameOver(true)
        }
    }
})
