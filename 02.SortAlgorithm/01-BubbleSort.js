let testData = [];

for (let i = 0; i < 100; i++) {
    testData.push(Math.floor(Math.random() * 100));    
}

// let data = [4, 7, 3, 2, 5, 1];
let data = [6, 5, 4, 3, 2, 1];
// n = 5
// 1/2 * n^2 - 1/2 * n
// 25/2 - 5/2 = 10

bubbleSort(data);

function bubbleSort(arr) {
    let step = 1;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = arr.length - 1; j >= 1 + i; j--) {
            if (arr[j] < arr[j - 1]) {
                temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
            step++;
        }
    }
    console.log(step);
}