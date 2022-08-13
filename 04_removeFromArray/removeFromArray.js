//const removeFromArray = function(array, ...num) {
    //    let deleteCount = 1;
    //    let start = array.indexOf(num);
    //    let newArray = array.splice(start, deleteCount);
     //   return array;
//};

function removeFromArray(array, ...args) {
    return array.filter(x => !args.includes(x))
};


// Do not edit below this line
module.exports = removeFromArray;
