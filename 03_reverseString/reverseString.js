const reverseString = function(str) {
    let expression = '';
    let newString = str.split("")
    let newerString = newString.reverse();
    str = newerString.join('');
    expression += str;
    return expression;
};

// Do not edit below this line
module.exports = reverseString;
