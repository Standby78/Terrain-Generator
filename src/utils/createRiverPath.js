import * as PF from 'pathfinding';

import { WIDTH, HEIGHT } from '../constants';

const createRiverPath = (terrainArray) => {
    function getPoint(type) {
        let x = 0;
        let y = 0;
        do {
            x = Math.floor(Math.random() * WIDTH);
            y = Math.floor(Math.random() * HEIGHT);
        } while (terrainArray[x + y * WIDTH] !== type);
        return { x, y };
    }
    // 'flatten' terrain to 0 - 1 so we can use A*
    const flatTerrain = terrainArray.map((tile) => (tile > 1 ? 1 : 0));

    const terrainObstacles = [];
    for (let index = 0; index < flatTerrain.length; index += WIDTH) {
        terrainObstacles.push(flatTerrain.slice(index, index + WIDTH));
    }
    const sceneMapGrid = new PF.Grid(terrainObstacles);
    const finder = new PF.AStarFinder({
        allowDiagonal: false,
        dontCrossCorners: true,
    });
    const startOfRiver = getPoint(0);
    let riverLength = 0;
    let endOfRiver = null;
    do {
        endOfRiver = getPoint(1);
        riverLength = Math.sqrt((endOfRiver.x - startOfRiver.x) ** 2 + (endOfRiver.y - startOfRiver.y) ** 2);
    } while (riverLength > 250);

    const gridPath = finder.findPath(startOfRiver.x, startOfRiver.y, endOfRiver.x, endOfRiver.y, sceneMapGrid);
    // drawPathObstacles(flatTerrain, gridPath);
    return gridPath;
};

export { createRiverPath };
