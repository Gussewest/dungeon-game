scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`LVL 1`)
})
// Opretter Arlo, Skyggevogteren som en sprite
let arlo = sprites.create(assets.image`MainCharacter`, SpriteKind.Player)
// Sætter kontrollerne til at bevæge Arlo
controller.moveSprite(arlo)
// Kameraet følger Arlo, når han bevæger sig rundt i verden
scene.cameraFollowSprite(arlo)
tiles.setCurrentTilemap(tilemap`Start`)
// Sætter Arlo's startposition i verdenen
arlo.setPosition(80, 60)
