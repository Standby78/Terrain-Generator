import frozenSea from '../static/img/frozensea.jpg';
import sea from '../static/img/sea.jpg';

import desert from '../static/img/desert.jpg';
import tundraForest from '../static/img/tundraforest.jpg';
import plain from '../static/img/plain.jpg';
import forest from '../static/img/forest.jpg';
import jungle from '../static/img/jungle.jpg';
import steppe from '../static/img/steppe.jpg';
import frozenTundra from '../static/img/frozentundra.jpg';
import frozenTundraForest from '../static/img/frozentundraforest.jpg';

import desertHills from '../static/img/deserthills.jpg';
import steppeHills from '../static/img/steppehills.jpg';
import jungleHills from '../static/img/junglehills.jpg';
import plainHills from '../static/img/plainhills.jpg';
import forestHills from '../static/img/foresthills.jpg';
import frozenTundraHills from '../static/img/frozentundraHills.jpg';
import tundraForestHills from '../static/img/tundraforesthills.jpg';

import desertMountain from '../static/img/desertmountain.jpg';
import steppeMountain from '../static/img/steppemountain.jpg';
import jungleMountain from '../static/img/junglemountain.jpg';
import plainMountain from '../static/img/plainmountain.jpg';
import forestMountain from '../static/img/forestmountain.jpg';
import frozenTundraMountains from '../static/img/frozentundraMountains.jpg';
import frozenTundraForestMountains from '../static/img/frozentundraforestMountains.jpg';
import tundraForestMountains from '../static/img/tundraforestMountains.jpg';

export const WIDTH = 512;
export const HEIGHT = 512;
export const GEOGRAPHY_ELEMENTS = 4;
export const TILE_SIZE = 64;
export const MAP_OFFSET = 6;
export const TEMP_CHANGE_PER_DEGRE = 0.15;
export const HUMIDITY_ON_SEA = 1;
export const MAX_HUMIDITY = 220;
export const HUMIDITY_LEVELS = 4;
export const RIVER_QUANTITY = 20;

export const terrain = [
    {
        '00': frozenSea,
        '01': frozenSea,
        '02': frozenSea,
        '03': frozenSea,
        10: sea,
        11: sea,
        12: sea,
        13: sea,
        20: sea,
        21: sea,
        22: sea,
        23: sea,
        30: sea,
        31: sea,
        32: sea,
        33: sea,
    },
    {
        '00': frozenTundra,
        '01': tundraForest,
        '02': tundraForest,
        '03': frozenTundraForest,
        10: plain,
        11: plain,
        12: forest,
        13: forest,
        20: steppe,
        21: plain,
        22: forest,
        23: jungle,
        30: desert,
        31: desert,
        32: steppe,
        33: plain,
    },
    {
        '00': frozenTundraHills,
        '01': tundraForestHills,
        '02': tundraForestHills,
        '03': frozenTundraForest,
        10: plainHills,
        11: plainHills,
        12: forestHills,
        13: forestHills,
        20: steppeHills,
        21: plainHills,
        22: forestHills,
        23: jungleHills,
        30: desertHills,
        31: desertHills,
        32: steppeHills,
        33: plainHills,
    },
    {
        '00': frozenTundraMountains,
        '01': tundraForestMountains,
        '02': tundraForestMountains,
        '03': frozenTundraForestMountains,
        10: steppeMountain,
        11: plainMountain,
        12: forestMountain,
        13: forestMountain,
        20: steppeMountain,
        21: plainMountain,
        22: forestMountain,
        23: jungleMountain,
        30: desertMountain,
        31: desertMountain,
        32: steppeMountain,
        33: plainMountain,
    },
];
