// Binary Search
const binSearch = (data, val) => {
    const isDataGrow = data[1] > data[0];

    let l = 0;               // left
    let c;                   // center
    let r = data.length - 1; // right

    while (r - l > 0) {
        c = Math.floor((l + r + 1) / 2);

        const comparationResult = isDataGrow ? data[c] > val : data[c] < val;

        if (data[c] === val) {
            break;
        } else if (comparationResult) {
            r = c - 1;
        } else {
            l = c;
        }
    }
    c = Math.floor((l + r + 1) / 2);

    return data[c] === val ? c : -1;
};

// Test
const runRandomTest = () => {
    const shouldDataGrow = Math.random() > 0.5;

    const n = randInt(7, 12);
    const data = [shouldDataGrow ? 1 : 100];

    // Source: https://learn.javascript.ru/task/random-int-min-max
    function randInt(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    // Fill in
    while (data.length < n) {
        if (shouldDataGrow) {
            data.push(data[data.length - 1] + randInt(1, 5));
        } else {
            data.push(data[data.length - 1] - randInt(1, 5));
        }
    }

    const shouldFindIndex = randInt(0, n - 1);
    const shouldFind = data[shouldFindIndex];
    const result = binSearch(data, shouldFind);

    if (shouldFindIndex !== result) {
        console.log(data);
        console.log(`Should find ${shouldFind} (index: ${shouldFindIndex})`);
        console.log(`Search result: ${result}`);
        console.log('');
    }

    return shouldFindIndex === result;
};

let allTestsPassed = true;

for (let i = 0; i < 100; i++) {
    allTestsPassed = allTestsPassed && runRandomTest();
}

console.log(`All tests passed: ${allTestsPassed}`);

console.log(binSearch([1], 1));       // 0
console.log(binSearch([2], 1));       // -1
console.log(binSearch([2, 3], 1));    // -1
console.log(binSearch([2, 4], 3));    // -1
console.log(binSearch([2, 3, 5], 3)); // 1