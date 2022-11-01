var isPalindrome = function(x) {
    arrNum = String(x).split('');
    let left = 0;
    let right = arrNum.length - 1;
    
    while (right >= left) {
        if(arrNum[right] == arrNum[left]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    
    return true;
};

isPalindrome(-121);