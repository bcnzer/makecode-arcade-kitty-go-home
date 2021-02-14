// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000203020108030202010203080701021402020401020602070106070602010214020302010209090201050204060102140302050102090b06010202020201051402020201020a0904010203060201021402030301090b090801020c0d0e0102140406020102020503010211100f0103140302020102020206010211100f0102140208020102060405010312101301081402030201020903070102080605010214020202010909020801020209090104140204060109090302010502090901021402030201050904020102030909010314020202010209020201030309090108140202040103020309010202060901021402020301020202030102020206010214`, img`
. . . . 2 . . . . . . 2 2 . . . 
. . . . . 2 . 2 . 2 2 2 . . . . 
. . . . . . . . . 2 . . 2 . . . 
. . 2 . . . . 2 . . . . . . 2 . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . 2 . . 2 2 2 . . . 
. 2 . . . . 2 . . . 2 2 2 . . . 
. . . . . . . 2 . . 2 2 2 . . . 
. 2 . . . 2 . 2 . . 2 2 2 . 2 . 
. . . . . . . 2 . . 2 2 2 . . . 
. . . . . . . 2 . . . . . . . . 
. . 2 . . . . . . 2 . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . 2 . . . 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles10,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.castle.tilePath4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTreee":
            case "tile2":return tile2;
            case "myTree2":
            case "tile3":return tile3;
            case "myTree3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
