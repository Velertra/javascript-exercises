const sumAll = function(a, b) {
    
    if(a==b) return a;
    var sum = 0;
    for(i=((a<b)?a:b);i<=((a<b)?b:a);i++)sum+=i;
    return sum;

};


// return ((max-min)+1) * (min + max) / 2;

// Do not edit below this line
module.exports = sumAll;
