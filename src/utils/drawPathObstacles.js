import { drawPixel } from '.';

import { WIDTH, HEIGHT } from '../constants';

const drawPathObstacles = (array, path) => {
    const canvas = document.getElementById('obstacles');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const ctx = canvas.getContext('2d');
    const hcanvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    for (let y = 0; y <= HEIGHT; y++) {
        for (let x = 1; x < WIDTH; x++) {
            const index = x + y * WIDTH;
            drawPixel(x, y, 255, 0, 0, array[index] === 0 ? 0 : 255, canvasWidth, hcanvasData);
        }
    }
    path.forEach((point) => drawPixel(point[0], point[1], 0, 155, 0, 255, canvasWidth, hcanvasData));
    ctx.putImageData(hcanvasData, 0, 0);
};

export { drawPathObstacles };
