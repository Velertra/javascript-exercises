//const repeatString = function(string, num){
   // let string = 'hey'
  //  for (let i = 0; i <= 3; i++) {
        
  //      return string * i;
 //       }
 //   }
        
    


 const repeatString = function(str, num){
    let expression = '';
    while (num > 0) {
        expression += str;
        num--;
    }
    return expression;
    }



// Do not edit below this line
module.exports = repeatString;
