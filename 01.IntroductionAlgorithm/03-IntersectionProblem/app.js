/*
function intersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
			console.log(arr1[i], arr2[j]);
            if (arr1[i] == arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }
    console.log(result);
    return result;
}


O(nm)
*/

// function intersection(arr1, arr2) {
//     let result = [];
//     let arr3 = arr1.concat(arr2);
//     let counter = {};

//     for (let i = 0; i < arr3.length; i++) {
//         if (!counter[arr3[i]]) {
//             counter[arr3[i]] = 1;
//         } else {
//             counter[arr3[i]]++;
//         }
//     }

//     // loop over the counter
//     for (let property in counter) {
//         if (counter[property] >= 2) {
//             result.push(property);
//         }
//     }

//     console.log(result);
// }

function intersection(arr1, arr2) {
  const result = [];
  const counter = {};
  const combinedArr = arr1.concat(arr2);
  for (let i = 0; i < combinedArr.length; i++) {
    if (!counter[combinedArr[i]]) {
      counter[combinedArr[i]] = 1;
    } else {
      counter[combinedArr[i]]++;
    }
  }

  for (let property in counter) {
    if (counter[property] >= 2) {
      result.push(property);
    }
  }
  console.log(result);
}

intersection([1, 2, 3, 7, 9, 19, 25], [19, 5, 16, 10, 1, 3]);
