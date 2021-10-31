import SimplexNoise from 'simplex-noise';

import { HEIGHT, WIDTH, GEOGRAPHY_ELEMENTS } from '../constants';

const getMap = () => {
    const mapArray = [];
    const seed = Math.random();

    const simplex = new SimplexNoise(seed);
    const cx = WIDTH / 2;
    const cy = HEIGHT / 2;
    const maxDist = Math.floor(Math.sqrt(cx * cx + cy * cy));
    for (let x = 0; x < WIDTH; x++) {
        for (let z = 0; z < HEIGHT; z++) {
            let y = ((simplex.noise2D(x * 0.007, z * 0.005) + 1) / 3) * 255 + 30;
            let terrainMapY = Math.floor((simplex.noise2D(x * 0.02, z * 0.02) * 255) / (255 / GEOGRAPHY_ELEMENTS));
            terrainMapY = terrainMapY <= 0 ? 255 / GEOGRAPHY_ELEMENTS : terrainMapY * (255 / GEOGRAPHY_ELEMENTS);
            // circle that levels the map to the sea level towards the edges
            const circley = (Math.floor(Math.sqrt((cx - x) * (cx - x) + (cy - z) * (cy - z))) / maxDist) * 255;
            y = y - circley < 10 ? 0 : y - circley;
            y = y !== 0 ? terrainMapY : y;
            mapArray[x + z * WIDTH] = y / (255 / GEOGRAPHY_ELEMENTS);
        }
    }
    // random tile elements
    for (let i = 0; i < (WIDTH * HEIGHT) / 100; i++) {
        let index = null;
        do {
            index = Math.floor(Math.random() * mapArray.length);
        } while (mapArray[index] === 0);
        let newTile = mapArray[index];
        if (newTile < 3) newTile++;
        mapArray[index] = newTile;
    }
    return mapArray;
};

export { getMap };
