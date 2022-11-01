isSubsequence("hello", "hello Dear");
isSubsequence("book", "brooklyn");
isSubsequence("abc", "cab");
isSubsequence("abc", "aaabzxcvb");

function isSubsequence(str1, str2) {
    if (str1.length == 0) {
        console.log(true);
        return true;
    }

    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 <= str1.length - 1) {
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++;
        } else if (pointer2 >= str2.length) {
            console.log(false);
            return false;
        }

        pointer2++;
    }
	
    console.log(true);
    return true;
}
