var twoSum = function (nums, target) {
    let numMap = new Map;
    for (let i = 0; i < nums.length; i++) {
        numMap.set(nums[i], i);
    }

    console.log(numMap);

    for (let j = 0; j < nums.length; j++) {
        let goal = target - nums[j];
        if (numMap.get(goal) && j != numMap.get(goal)) {
            console.log([j, numMap.get(goal)]);
        }
    }
};

// twoSum([2, 7, 11, 15], 9);
twoSum([1, 3, 4, 2], 6);
