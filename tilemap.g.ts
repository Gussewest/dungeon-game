// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "LVL 2":
            case "level4":return tiles.createTilemap(hex`100010000403030b030a0a03030b030303030302060d0d060d0f0f0d0d0d0d0d0d0d0d01060d0d060d0d0d0d0d0d090d0d0d0d01060d0d050303030303030303020d0d01060d0d0d090d0d0d0d0d0d0d010d0d01060d0d0d0d0d0d0d0d0d0d0d010d0d010a0d0d0d0d0d0d0d0d0d0d0d010d0d060a0d0d0d0d0d0d0d0d0d0d0d010d0d06060707060d0d0d0d0d0d0d0d010d0d01060d0d060d0d0d0d0d0d0d0d010d0d01060d0d060d0d0d0d0d0d0d0d010d0d0c060d0d0507070e0e07070707080d0d01060d0d0d0d0d0d0d0d0d0d0d0d0d0d01060d0d0d0d0d0d0d0d0d0d0d0d0d0d01060d0d0d0d0d0d0d0d0d0d0d0d0d0d0105070707070707070707070707070708`, img`
2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 2 2 2 . . . . . . . . 2 . . 2 
2 . . 2 . . . . . . . . 2 . . 2 
2 . . 2 . . . . . . . . 2 . . 2 
2 . . 2 2 2 . . 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.floorDark3,sprites.dungeon.stairLadder,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.floorDark0,sprites.dungeon.stairSouth,sprites.dungeon.floorDark2], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "LVL 0":
            case "LVL 1":return tiles.createTilemap(hex`100010000701010101010101010101010c010106080a0a0a0a0a0a0a0a0a0a0a0a0a0a02080a0a0a0a0a0a0a0a0a0a0a0a0a0a02080a0a0c01010101080a030303030a02080a0a0a0a0b0a0a080a0a0a0a0a0a02080a0a130a080a0a080a030303030302080a0a0a0a080a0a080a080a110a1409080a0a0a0a080a0a080a080a0a0a14090801010c01010a0a080a080a0a0a0a02080a1212120a0a0a080a080a0a0a0a02080a0a0a0a0a0a0a080a080a0a0a0a02080a0a0a0a0a0a0a080a080a0a100f02080a0a0101010c01080a080a0a0e0d02080a0a0a0a0a0a0a080a0a0a0a0a0a02080a0a0a0a0a0a0a080a0a0a0a0a0a0205030303030309090303030303030304`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 . 2 2 2 2 . 2 
2 . . . . . . . 2 . . . . . . 2 
2 . . 2 . 2 . . 2 . 2 2 2 2 2 2 
2 . . . . 2 . . 2 . 2 . . . . . 
2 . . . . 2 . . 2 . 2 . . . . . 
2 2 2 2 2 2 . . 2 . 2 . . . . 2 
2 . 2 2 2 . . . 2 . 2 . . . . 2 
2 . . . . . . . 2 . 2 . . . . 2 
2 . . . . . . . 2 . 2 . . 2 2 2 
2 . . 2 2 2 2 2 2 . 2 . . 2 2 2 
2 . . . . . . . 2 . . . . . . 2 
2 . . . . . . . 2 . . . . . . 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.stairLadder,sprites.dungeon.floorDark0,sprites.dungeon.stairWest,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.chestOpen,sprites.dungeon.chestClosed,sprites.dungeon.doorLockedSouth,sprites.dungeon.floorDark1], TileScale.Sixteen);
            case "level6":
            case "level6":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level 3":
            case "level 1":return tiles.createTilemap(hex`1000100003010101010101010101010101010102040d0d090909090909090909090909050409090909090c0909090909090509050409090909090c0909090909090509050409090909090101010508080807090504080808070909090905090909090905040a0a0a0b09090909050901010101050e0909090b09090909050909090909050e0909090b0909090905010101010905040a0a0a0b09090909050909090909050401010102090909090509030101010504090909090908080805090f0909110e0409090101010c091005090f0909110e0409090101010c0909050909090909050409090909090909090509090909090506080808080808080808080808080807`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . . . 2 
2 . . . . . 2 . . . . . . 2 . 2 
2 . . . . . 2 . . . . . . 2 . 2 
2 . . . . . 2 2 2 2 2 2 2 2 . 2 
2 2 2 2 2 . . . . 2 . . . . . 2 
2 2 2 2 . . . . . 2 . 2 2 2 2 2 
. . . . . . . . . 2 . . . . . 2 
. . . . . . . . . 2 2 2 2 2 . 2 
2 2 2 2 . . . . . 2 . . . . . 2 
2 2 2 2 2 . . . . 2 . 2 2 2 2 2 
2 . . . . . 2 2 2 2 . 2 . . . 2 
2 . . 2 2 2 2 . 2 2 . 2 . . . 2 
2 . . 2 2 2 2 . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorDark0,sprites.dungeon.hazardLava1,sprites.dungeon.stairEast,sprites.dungeon.purpleOuterWest2,sprites.dungeon.chestClosed,sprites.dungeon.stairLadder,sprites.dungeon.purpleOuterWest1,myTiles.tile1,sprites.dungeon.floorDark5], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Boss LVL":
            case "level5":return tiles.createTilemap(hex`1000100003010101010101010101010101010102040a0a0a0a0a0a0a0a0a0a0a0a0a0a08040a0909090909090909090909090a08040a0909090909090909090909090a08040a0909090909090909090909090a08040a0909090909090909090909090a080b090909090909090909090909090c0b0b090909090909090909090909090c0b040a0909090909090909090909090a08040a0909090909090909090909090a08040a0909090909090909090909090a08040a0909090909090909090909090a08040a0909090909090909090909090a08040a0909090909090909090909090a08040a0a0a0a0a0a0a0a0a0a0a0a0a0a0805060606060606060606060606060607`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
2 2 . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . 2 2 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.floorDark0,sprites.dungeon.hazardLava1,sprites.dungeon.stairLadder,sprites.dungeon.floorMixed], TileScale.Sixteen);
            case "level8":
            case "level8":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level9":
            case "level9":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level":
            case "level7":return tiles.createTilemap(hex`100010000b0201020202020202020202020202020b0201020202020202020202020202020b0202020202020202010202010202020b0202020102020202020202020202020b0202020202020102020202020202020b0202020202020202010202020202020b020202020202060a070202020102020c0a0a0a0a0a0a0505090202020202020c0303030303030505090202020202020b0202020202020403080201020202020b0202020202020202020202020202020b0202020201020202020202020202020b0202010202020202020202020102020b0202020202020202020202020202020b0202020202020202020102020202020b020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.dungeon.purpleOuterWest1,sprites.dungeon.stairLadder], TileScale.Sixteen);
            case "Start":
            case "level2":return tiles.createTilemap(hex`10001000010101010101010101010101010104050102010101020202020202020b0c04050102020202010101010202010a0d04050102020201020202020202020a0e040501020202020202020203020209080805020202010203020201020202021204050116131313131313131313130f1206050114111111111111111111111112071001151717171717171717171717120405010202020202020202020202021204050102020202020202010202020b0c0405010202020202020202020202040d0405010202020102020202020202040e0405010202020202020202020202090804050102020202020202020202020202040501010101010101010101010101010405`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 2 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . 2 2 2 2 
2 . . . . . . . . . . . 2 . 2 2 
2 . . . . . . . . . . . 2 . 2 2 
2 . . . . . . . . . . . 2 2 2 2 
2 . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.swamp.swampTile3,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleSwitchUp,sprites.dungeon.stairLadder,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.chestClosed,sprites.dungeon.stairLarge,sprites.castle.tilePath5,sprites.builtin.forestTiles11,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.castle.tilePath8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Kronen":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
