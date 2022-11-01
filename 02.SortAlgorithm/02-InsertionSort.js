let data = [1, 4, 2, 5, 3, 7];

let step = 1;
for (let j = 1; j < data.length; j++) {
	key = data[j]; // 2
	i = j - 1; // 1
	while (i >= 0 && data[i] > key) {
		data[i + 1] = data[i];
		i = i - 1;
	}
	data[i + 1] = key;
	console.log(data, step);
	step++;
}