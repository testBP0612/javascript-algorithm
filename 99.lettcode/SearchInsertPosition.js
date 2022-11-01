var searchInsert = function (nums, target) {
    //  [1,3,5,6]
    let min = 0;
    let max = nums.length - 1;
    let mid = Math.floor((min + max) / 2);

    while (min <= max) {
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            max = mid - 1;
        } else  {
            min = mid + 1;
        }
		mid = Math.floor((min + max) / 2);
    }

	return console.log(min);
};

searchInsert([1, 3, 5, 6], 5);

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Input: nums = [1,3,5,6], target = 0
// Output: 0
