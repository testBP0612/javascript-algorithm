maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);

function maxSum(arr, size) {
    if (size > arr.length) {
        return null;
    }

    let maxValue = 0;
    for (let i = 0; i < size; i++) {
        maxValue += arr[i];
    }

    let temValue = maxValue;
    for (let j = size; j < arr.length; j++) {
        temValue = temValue + arr[j] - arr[j - size];
        if (temValue > maxValue) {
            maxValue = temValue;
        }
    }

    console.log(maxValue);
    return maxValue;
}

function minSum(arr, size) {
    if (size > arr.length) {
        return null;
    }

    let minValue = 0;
    for (let i = 0; i < size; i++) {
        minValue += arr[i];
    }

    let temValue = minValue;
    for (let j = size; j < arr.length; j++) {
        temValue = temValue + arr[j] - arr[j - size];
        if (temValue < minValue) {
            minValue = temValue;
        }
    }

    console.log(minValue);
    return minValue;
}
