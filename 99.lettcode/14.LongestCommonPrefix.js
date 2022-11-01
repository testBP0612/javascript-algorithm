var longestCommonPrefix = function(strs) {
	const firstChart = strs[0];
	if (!firstChart) {
		return "";
	}

	let condition = true;
	let count = -1;

	while (condition) {
		count = count + 1;
		if (count == firstChart.length) {
			condition = false;
		} else {
			condition = strs.every(str => {
				return firstChart[count] === str[count];
			});
		}
	}

	return firstChart.slice(0, count);
};

console.log(longestCommonPrefix(["flower","flow","flight"]));