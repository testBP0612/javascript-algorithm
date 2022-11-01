// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {
    if (!s) return false;
    
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if(s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
            
            if(i + 1 == s.length) {
                return false;
            }
        } else if(s[i] == ')' && stack[stack.length - 1] == '(') {
            stack.pop();
        } else if(s[i] == '}' && stack[stack.length - 1] == '{') {
            stack.pop();
        } else if(s[i] == ']' && stack[stack.length - 1] == '[') {
            stack.pop();
        } else {
            return false;
        }
    }
    
    if(stack.length === 0) {
        return true;
    } else {
        return false;
    }
};

isValid("{[]}")