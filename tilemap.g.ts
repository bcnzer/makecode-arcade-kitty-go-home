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
            case "level1":return tiles.createTilemap(hex`100010000203020108030202010203020201021402020401020602030102020202010215020302010209090201050204020102150302050102090b02010202020201051502020201020a0904010203060201021502030301090b090201020c0d0e0102150406020102020503010211100f0103150302020102020206010211100f0102150208020102060405010312101301081502030201020b03070102080605010215020202010b0b02080102020909010415020406010b0b0302010502090901021502030201050b0402010203090901031502020201020b020201030309090108150202040103020b02010202060901021502020301020202030102020206010216`, img`
. . . . 2 . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . 2 . . . . . . . . . . . 2 . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . 2 2 2 . . . 
. 2 . . . . 2 . . . 2 2 2 . . . 
. . . . . . . 2 . . 2 2 2 . . . 
. 2 . . . 2 . 2 . . 2 2 2 . 2 . 
. . . . . 2 . 2 . . 2 2 2 . . . 
. . . . 2 2 . 2 . . . 2 2 . . . 
. . 2 . 2 2 . . . 2 . 2 2 . . . 
. . . . 2 2 . . . . . 2 2 . . . 
. . . . . 2 . . . . . 2 2 . 2 . 
. . . . . . 2 . . . . 2 2 . . . 
. . . . . . . . . . . . 2 . . . 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles10,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7], TileScale.Sixteen);
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
