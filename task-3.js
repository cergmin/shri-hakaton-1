// Insertion Sort
const insertionSort = (data) => {
    const n = data.length;
    let unsorted = n;

    while (unsorted > 0) {
        const currIndex = unsorted - 1;
        const curr = data[currIndex];

        for (let i = unsorted; i <= n; i++) {
            if (i !== n && curr > data[i]) {
                data[i - 1] = data[i];
            } else {
                data[i - 1] = curr;
                break;
            }
        }

        unsorted--;
    }
};

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
insertionSort(data);
console.log(data);
