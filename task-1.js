// Bubble Sort
const bubbleSort = (data) => {
    const n = data.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (data[j] > data[j + 1]) {
                const tmp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = tmp;
            }
        }
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
bubbleSort(data);
console.log(data);
