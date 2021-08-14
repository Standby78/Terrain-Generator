const drawPixel = (x, y, r, g, b, a, canvasWidth, canvasData) => {
    const index = (x + y * canvasWidth) * 4;
    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
};

export { drawPixel };
