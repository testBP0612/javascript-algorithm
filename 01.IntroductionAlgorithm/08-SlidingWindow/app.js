maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 2);
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);

function maxSum(arr, size) {
    let maxValue = -Infinity;

    if (size > arr.length) {
        return null;
    }

    for (let i = 0; i <= arr.length - size; i++) {
        let attempt = 0;
        for (let j = i; j < i + size; j++) {
            attempt += arr[j];
        }
        if (attempt > maxValue) {
            maxValue = attempt;
        }
    }

    console.log(maxValue);
    return maxValue;
}

function minSum(arr, size) {
    let minValue = Infinity;

    if (size > arr.length) {
        return null;
    }

    for (let i = 0; i <= arr.length - size; i++) {
        let attempt = 0;
        for (let j = i; j < i + size; j++) {
            attempt += arr[j];
        }
        if (attempt < minValue) {
            minValue = attempt;
        }
    }

    console.log(minValue);
    return minValue;
}