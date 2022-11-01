/*

function averagePair(arr, avg) {
	let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if ((arr[i] + arr[j]) / 2 == avg) {
				result.push([arr[i], arr[j]]);
            }
        }
    }
	
    console.log(result);
    return result;
}
*/

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

function averagePair(arr, avg) {
    let left = 0;
    let right = arr.length - 1;
    let result = [];

    while (right > left) {
        let tempAvg = (arr[right] + arr[left]) / 2;
        if (tempAvg > avg) {
            right--;
        } else if (tempAvg < avg) {
            left++;
        } else if (tempAvg == avg) {
            result.push([[arr[right], arr[left]]]);
			right--;
			left++;
        }
    }

	console.log(result);
	return result;
}
