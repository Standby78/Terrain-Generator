import { MAP_OFFSET, WIDTH, terrain } from '../constants';

const drawMap = ({ playerX, playerY }, mapArray, ecosystemArray) => {
    let counter = 0;
    for (let y = -MAP_OFFSET; y <= MAP_OFFSET; y++) {
        for (let x = -MAP_OFFSET; x <= MAP_OFFSET; x++) {
            const index = (y + playerY) * WIDTH + (x + playerX);
            const image = document.getElementById(`img-${counter}`);
            image.src = terrain[mapArray[index]][ecosystemArray[index]];
            image.alt = `${index}-${ecosystemArray[index]}`;
            counter++;
        }
    }
};

export { drawMap };
