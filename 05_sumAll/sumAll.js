const sumAll = function(a, b) {
    let sum = 0;
    if (a >  b) {
        let arr = new Array(a - b + 1);
        console.log(arr);
        for (let i = 0; i  < arr.length; i++, a --) {
            arr[i] = a;
            for (k = 0; k < arr.length; k++) {
                sum += arr[i];
           }
        }
        return sum;
    } else {
        let arro = new Array(b - a + 1);

        for (let j = 0; j < arro.length; j++, a++) {
            arro[j] = a;
            for (k = 0; k < arro.length; k++) {
                sum += arro[j];
           }
        }
        return sum;
    }
    

};


// return ((max-min)+1) * (min + max) / 2;

// Do not edit below this line
module.exports = sumAll;
