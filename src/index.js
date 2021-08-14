import { generateEcosystem, generateHumidityMap, getMap, drawTerrain, drawTerrainMinimap, drawHumidityMinimap, drawMap, createRiverPath } from './utils';

import { WIDTH, HEIGHT, RIVER_QUANTITY } from './constants';

const canvas = document.getElementById('terrainMinimap');

const player = { playerX: WIDTH / 2, playerY: HEIGHT / 2 };

let mapArray = [];

mapArray = getMap();

// add rivers to map
for (let counter = 0; counter < RIVER_QUANTITY; counter++) {
    const riverArray = createRiverPath(mapArray);
    for (let index = riverArray.length - 1; index > 0; index--) {
        const tile = riverArray[index];
        const mapIndex = tile[0] + tile[1] * WIDTH;
        if (mapArray[mapIndex] === 0) break;
        mapArray[mapIndex] = 0;
    }
}

const humidityArray = generateHumidityMap(mapArray);
const ecosystemArray = generateEcosystem(humidityArray);

// draw minimap overlays
drawTerrainMinimap(mapArray);
// drawHumidityMinimap(humidityArray);

drawTerrain(player);
// draw main map
drawMap(player, mapArray, ecosystemArray);

const drawClickedRegion = (canvas, event) => {
    const rect = canvas.getBoundingClientRect();
    player.playerX = event.clientX - rect.left;
    player.playerY = event.clientY - rect.top;
    drawMap(player, mapArray, ecosystemArray);
};

canvas.addEventListener('mousedown', (e) => {
    drawClickedRegion(canvas, e);
});

window.addEventListener('keyup', (event) => {
    event.preventDefault();
    switch (event.key) {
        case 'ArrowDown':
            player.playerY++;
            break;
        case 'ArrowUp':
            player.playerY--;
            break;
        case 'ArrowLeft':
            player.playerX--;
            break;
        case 'ArrowRight':
            player.playerX++;
            break;
        default:
            break;
    }
    drawMap(player, mapArray, ecosystemArray);
});
