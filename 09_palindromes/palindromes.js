const palindromes = function (str) {
   str = str
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .split('')
    .filter((item) => item != ' ');
    let creation = str.toString().replace(/[,]/g, '').toLowerCase();
    let newStr = str.reverse().toString().replace(/[,]/g, '').toLowerCase();
    
    if (creation === newStr) {
        return true;
    }else {
        return false;
    };
    
        
};

// Do not edit below this line
module.exports = palindromes;
