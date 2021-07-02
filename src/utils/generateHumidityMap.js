import { WIDTH, HEIGHT, HUMIDITY_ON_SEA, MAX_HUMIDITY, HUMIDITY_LEVELS } from '../constants';

const generateHumidityMap = (mapArray) => {
    const humidityCalculator = (humidityArray, index, delta) => {
        let humidity = humidityArray[index + delta];
        let humidityDelta = 0;
        switch (mapArray[index]) {
            case 0:
                // sea increases humidity
                humidityDelta += HUMIDITY_ON_SEA * 2;
                break;
            case 1:
                // flatlands humidity decrease
                humidityDelta = -HUMIDITY_ON_SEA;
                break;
            case 2:
                // hills humidity decrease
                humidityDelta = -HUMIDITY_ON_SEA * 4;
                break;
            case 3:
                // mmountains humidity decrease
                humidityDelta = -HUMIDITY_ON_SEA * 10;
                break;
            default:
                humidityDelta = HUMIDITY_ON_SEA;
                break;
        }
        humidity += humidityDelta;
        humidity = humidity >= MAX_HUMIDITY ? MAX_HUMIDITY : humidity;
        humidity = humidity < 0 ? 0 : humidity;
        return humidity;
    };

    const humidityArrayEW = new Array(HEIGHT * WIDTH).fill(MAX_HUMIDITY);
    const humidityArrayWE = new Array(HEIGHT * WIDTH).fill(MAX_HUMIDITY);
    const humidityArrayNS = new Array(HEIGHT * WIDTH).fill(MAX_HUMIDITY);
    const humidityArraySN = new Array(HEIGHT * WIDTH).fill(MAX_HUMIDITY);
    const humidityArray = [];

    for (let y = 0; y <= HEIGHT; y++) {
        for (let x = 1; x < WIDTH; x++) {
            const index = x + y * WIDTH;
            humidityArrayEW[index] = humidityCalculator(humidityArrayEW, index, -1);
        }
    }

    for (let y = 0; y <= HEIGHT; y++) {
        for (let x = WIDTH - 1; x > -1; x--) {
            const index = x + y * WIDTH;
            humidityArrayWE[index] = humidityCalculator(humidityArrayWE, index, 1);
        }
    }

    for (let x = 0; x <= WIDTH; x++) {
        for (let y = 1; y < HEIGHT; y++) {
            const index = x + y * WIDTH;
            humidityArrayNS[index] = humidityCalculator(humidityArrayNS, index, -WIDTH);
        }
    }

    for (let x = 0; x <= WIDTH; x++) {
        for (let y = HEIGHT - 2; y > -1; y--) {
            const index = x + y * WIDTH;
            humidityArraySN[index] = humidityCalculator(humidityArraySN, index, WIDTH);
        }
    }

    for (let y = 0; y <= HEIGHT; y++) {
        for (let x = 1; x < WIDTH; x++) {
            const index = x + y * WIDTH;
            let humidity = Math.ceil(
                (humidityArraySN[index] + humidityArrayNS[index] + humidityArrayWE[index] + humidityArrayEW[index]) / 4 / (MAX_HUMIDITY / HUMIDITY_LEVELS),
            );
            humidity = HUMIDITY_LEVELS - humidity;
            humidityArray[index] = humidity;
        }
    }
    return humidityArray;
};

export { generateHumidityMap };
