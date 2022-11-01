var romanToInt = function(s) {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let sum = 0;
    let pre;
    
    for (let i = 0; i < s.length; i ++) {
        pre = roman[s[i - 1]];
        
        sum = sum + roman[s[i]];
        
        if (pre && roman[s[i - 1]] < roman[s[i]]) {
            sum = sum - (roman[s[i - 1]] * 2)
        }
    } 
    
	console.log(sum);
    return sum;
};

romanToInt('XIV');