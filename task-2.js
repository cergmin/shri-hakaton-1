// Selection Sort
const selectionSort = (data) => {
    const n = data.length;
    let unsorted = n;

    while (unsorted > 0) {
        let maxIndex = 0;

        for (let i = 1; i < unsorted; i++) {
            if (data[i] > data[maxIndex]) {
                maxIndex = i;
            }
        }

        const tmp = data[unsorted - 1];
        data[unsorted - 1] = data[maxIndex];
        data[maxIndex] = tmp;

        unsorted--;
    }
}

// Check
const n = 10;
const data = [];

// Source: https://learn.javascript.ru/task/random-int-min-max
function randInt(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

// Fill in with random numbers
for (let i = 0; i < n; i++) {
    data.push(randInt(1, 20));
}

console.log(data);
selectionSort(data);
console.log(data);
