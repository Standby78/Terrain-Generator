import { HEIGHT, WIDTH, HUMIDITY_LEVELS, TEMP_CHANGE_PER_DEGRE } from '../constants';

const generateEcosystem = (humidityArray) => {
    const ecosystemArray = [];
    const degreePerElement = 180 / HEIGHT;
    const maxTemp = Math.ceil((HEIGHT / 2) * degreePerElement * TEMP_CHANGE_PER_DEGRE);
    // equator dithering, NOT WORKING VERY WELL TODO
    // let latitude = HEIGHT / 2;
    // const SPAN = 8;
    // for (let i = latitude - SPAN; i < latitude + SPAN; i++) {
    //     for (let x = 3; x < WIDTH - 2; x += 3) {
    //         const avg = Math.floor((+humidityArray[x + (i - 1) * WIDTH - 1] + +humidityArray[x + (i - 1) * WIDTH] + +humidityArray[x + (i - 1) * WIDTH + 1]) / 3);
    //         if (+humidityArray[x + i * WIDTH] !== avg) humidityArray[x + i * WIDTH] = `${avg}`;
    //     }
    // }

    for (let y = 0; y < HEIGHT; y++) {
        let latitudeTemp = maxTemp
            - Math.floor(Math.abs(Math.floor((y - HEIGHT / 2) * degreePerElement * TEMP_CHANGE_PER_DEGRE)));
        latitudeTemp = Math.floor(latitudeTemp / (maxTemp / HUMIDITY_LEVELS));
        for (let x = 0; x < WIDTH; x++) {
            const index = y * WIDTH + x;
            const humidity = humidityArray[index];
            ecosystemArray[index] = `${latitudeTemp - 1 === -1 ? 0 : latitudeTemp - 1}${
                4 - humidity === 4 ? 3 : 4 - humidity
            }`;
        }
    }
    // RANDOMIZE HUMIDITY, SHOULD BE SMARTER (FOREST - PLAIN, STEPPE - DESERT)
    // for(let i = 0; i < 800; i++) {
    //     let index = null;
    //     do {
    //         index = Math.floor(Math.random() * ecosystemArray.length);
    //     } while (mapArray[index] === 0)
    //     let tile = ecosystemArray[index];
    //     let humidity = tile[tile.length - 1];
    //     switch (humidity) {
    //         case '0':
    //             ++humidity;
    //             break;
    //         case '1':
    //             --humidity;
    //             break;
    //         case '2':
    //             ++humidity;
    //             break;
    //         case '3':
    //             --humidity;
    //             break;
    //     }
    //     ecosystemArray[index] = `${tile.slice(0, -1)}${humidity}`
    // }
    return ecosystemArray;
};

export { generateEcosystem };
