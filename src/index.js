import { generateEcosystem, generateHumidityMap, getMap, drawTerrain, drawTerrainMinimap, drawHumidityMinimap, drawMap } from './utils';

import { WIDTH, HEIGHT } from './constants';

const canvas = document.getElementById('terrainMinimap');

const player = { playerX: WIDTH / 2, playerY: HEIGHT / 2 };

let mapArray = [];

mapArray = getMap();
const humidityArray = generateHumidityMap(mapArray);
const ecosystemArray = generateEcosystem(humidityArray);

// draw minimap overlays
drawTerrainMinimap(mapArray);
drawHumidityMinimap(humidityArray);

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
