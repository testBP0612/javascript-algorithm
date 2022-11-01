// 找到連續的獨特文字

// function uniqueLetterString(str) {
//     let start = 0;
//     let end = 0;
//     let counter = {};
//     let maxLength = -Infinity;

//     while (end < str.length) {
//         if (!counter[str[end]]) {
//             counter[str[end]] = 1;
//             end++;
//             if ((end - start) > maxLength) {
//                 maxLength = end - start;
//             }
//         } else {
//             delete counter[str[start]];
//             start++;
//         }
//     }

//     if (maxLength == -Infinity) {
//         console.log("Cannot find unique letters substring");
//         return null;
//     }

//     console.log(maxLength);
//     return maxLength;
// }

function uniqueLetterString(str) {
    let start = 0;
    let end = 0;
    let counter = {};
    let maxLength = -Infinity;

    while (end < str.length) {
		console.log(counter);
        if (counter[str[end]]) {
            counter[str[start]]--;
            start++;
        } else {
            counter[str[end]] = 1;
            end++;
            if (end - start > maxLength) {
                maxLength = end - start;
            }
        }
    }

    if (maxLength == -Infinity) {
        console.log("Cannot find unique letters substring");
        return null;
    }

    console.log(maxLength);
}

uniqueLetterString("thisishowwedoit");
