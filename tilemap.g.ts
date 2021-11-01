// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`30001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000300000300000300000000000000000000010003000000000000000000000000000000000300010000000000000003000100000100000100000300000000000000000001000300000000000000000000000000000100000000000000030001000000000000000000000100000000030000000000000100030000000000000000000301000000000000000300010000000000000000030001000000000000010000030003000000010003000000000300010700000000000000000100000000000001000100010000000000040000000400010001000000000001000000000100000700000300000008010000000004010000000004000000040000010001000100000000000004000000010001000000000700000100000101020202020202020202020202020202020505050505050505050502020202040600000003000000000700000300000400000000000000000000000000000000020202020202020202020202000002020202020202020202020202020202020202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
`, [myTiles.transparency16,sprites.dungeon.buttonPink,sprites.dungeon.hazardWater,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,sprites.swamp.swampTile13,sprites.dungeon.chestClosed,sprites.dungeon.stairNorth,sprites.dungeon.stairLarge], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
