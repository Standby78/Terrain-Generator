import { WIDTH, TILE_SIZE, MAP_OFFSET } from '../constants';

const drawTerrain = ({ playerX, playerY }) => {
    const map = document.getElementById('map');
    map.style.width = `${MAP_OFFSET * 2 * TILE_SIZE + TILE_SIZE}px`;
    let counter = 0;
    for (let y = -MAP_OFFSET; y <= MAP_OFFSET; y++) {
        for (let x = -MAP_OFFSET; x <= MAP_OFFSET; x++) {
            const index = (y + playerY) * WIDTH + (x + playerX);
            const div = document.createElement('div');
            const image = document.createElement('img');
            image.id = `img-${counter}`;
            image.setAttribute('height', TILE_SIZE);
            image.setAttribute('width', TILE_SIZE);
            image.style.display = 'block';
            image.alt = index;
            map.appendChild(div);
            div.appendChild(image);
            counter++;
        }
    }
};

export { drawTerrain };
