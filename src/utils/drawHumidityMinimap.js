import { drawPixel } from '.';

import { WIDTH, HEIGHT } from '../constants';

const drawHumidityMinimap = (humidityArray) => {
    const canvas = document.getElementById('humidityMinimap');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const ctx = canvas.getContext('2d');
    const hcanvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    for (let y = 0; y <= HEIGHT; y++) {
        for (let x = 1; x < WIDTH; x++) {
            const index = x + y * WIDTH;
            drawPixel(x, y, 0, 0, humidityArray[index] * 60, 255, canvasWidth, hcanvasData);
        }
    }
    ctx.putImageData(hcanvasData, 0, 0);
};

export { drawHumidityMinimap };
