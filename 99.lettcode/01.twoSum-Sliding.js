var twoSum = function (nums, target) {
    let size = 2;
    let ansArr = [];
    let sumValue = 0;
    for (let i = 0; i < size; i++) {
        sumValue = sumValue + nums[i];
        if (sumValue == target) {
            ansArr.push(i - 1, i);
            return ansArr;
        }
    }

    let temValue = sumValue;
    for (let j = size; j < nums.length; j++) {
        temValue = temValue + nums[j] - nums[j - size];
        if (temValue == target) {
            ansArr.push(j - 1, j);
            return ansArr;
        }
    }
};

twoSum([2, 7, 11, 15], 9);
