// Palindrome 從前面讀過去到後面讀回來都是一樣

// palindrome("tacocat");
// palindrome("amanaplanacanalpanama");
// palindrome("sdfsdfsafds");
palindrome(-121);

function palindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (right >= left) {
        if (str[right] === str[left]) {
            left++;
            right--;
        } else {
            console.log(false);
            return false;
        }
    }

    console.log(true);
}
