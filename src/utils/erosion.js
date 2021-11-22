import { WIDTH, HEIGHT } from '../constants';
const f = (x, z) => {
    return Math.sin(x) * Math.cos(z);
};
const maxIterations = 10;
const trace = (x, y) => {
    class heightMap {
        sampleNormal(x, z) {
            const eps = 0.0001;
            return { x: f(x - eps, z), y: 2.0 * eps, z: f(x, z - eps) - f(x, z + eps) };
            //return {x: f(x - eps), z) - f(x + eps, z); y:2.0 * eps; z: f(x, z - eps) - f(x, z + eps)};
        }
    }
    const ox = ((Math.random() * 2 - 1) * WIDTH) / 2; // The X offset
    const oy = ((Math.random() * 2 - 1) * WIDTH) / 2; // The Y offset
    let sediment = 0; // The amount of carried sediment
    let xp = x; // The previous X position
    let yp = y; // The previous Y position
    let vx = 0; // The horizontal velocity
    let vy = 0; // The vertical velocity

    for (let i = 0; i < maxIterations; ++i) {
        // Get the surface normal of the terrain at the current location
        const surfaceNormal = heightMap.sampleNormal(x + ox, y + oy);

        // If the terrain is flat, stop simulating, the snowball cannot roll any further
        if (surfaceNormal.y === 1) break;

        // Calculate the deposition and erosion rate
        const deposit = sediment * depositionRate * surfaceNormal.y;
        const erosion = erosionRate * (1 - surfaceNormal.y) * Math.min(1, i * iterationScale);

        // Change the sediment on the place this snowball came from
        heightMap.change(xp, yp, deposit - erosion);
        sediment += erosion - deposit;

        vx = friction * vx + surfaceNormal.x * speed;
        vy = friction * vy + surfaceNormal.z * speed;
        xp = x;
        yp = y;
        x += vx;
        y += vy;
    }
};

// Simulate 50000 snowballs
const snowballs = 50000;

for (let i = 0; i < snowballs; ++i) trace(random.getFloat() * width, random.getFloat() * height);
