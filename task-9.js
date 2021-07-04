// Spiral
const getNewState = (cellX, cellY, direction, spiral) => {
    let newCellX = cellX;
    let newCellY = cellY;

    switch (direction) {
        case 0:
            newCellX++;
            break;
        case 1:
            newCellY++;
            break;
        case 2:
            newCellX--;
            break;
        case 3:
            newCellY--;
            break;
    }

    if (
        newCellY >= spiral.length ||
        newCellX >= spiral[0].length ||
        newCellY < 0 ||
        newCellX < 0 ||
        spiral[newCellY][newCellX]
    ) {
        direction++;
        direction %= 4;
        return getNewState(cellX, cellY, direction, spiral);
    }

    return [newCellX, newCellY, direction];
};

const spiral = (n) => {
    const spiralArray = [];

    for (let i = 0; i < n; i++) {
        spiralArray.push(new Array(n));
    }

    let cellX = 0;
    let cellY = 0;
    let direction = 0;
    for (let i = 1; i <= n * n; i++) {
        spiralArray[cellY][cellX] = i;

        if (i === n * n) {
            break;
        }

        [cellX, cellY, direction] = getNewState(
            cellX,
            cellY,
            direction,
            spiralArray
        );
    }

    for (let i = 0; i < n; i++) {
        console.log(...spiralArray[i]);
    }
};

spiral(3);
console.log('');
spiral(5);
