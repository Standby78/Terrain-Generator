import { drawPixel } from '.';

import { WIDTH, HEIGHT } from '../constants';

const drawTerrainMinimap = (mapArray) => {
    const canvas = document.getElementById('terrainMinimap');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const ctx = canvas.getContext('2d');
    const canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    let rgb = {};
    for (let x = 0; x < WIDTH; x++) {
        for (let z = 0; z < HEIGHT; z++) {
            switch (mapArray[x + z * WIDTH]) {
                case 0:
                    rgb = { r: 0, g: 0, b: 128 };
                    break;
                case 1:
                    rgb = { r: 40, g: 118, b: 0 };
                    break;
                case 2:
                    rgb = { r: 123, g: 100, b: 82 };
                    break;
                case 3:
                    rgb = { r: 167, g: 165, b: 164 };
                    break;
                default:
                    rgb = { r: 0, g: 0, b: 0 };
                    break;
            }
            drawPixel(x, z, rgb.r, rgb.g, rgb.b, 255, canvasWidth, canvasData);
        }
    }
    ctx.putImageData(canvasData, 0, 0);
};

export { drawTerrainMinimap };
