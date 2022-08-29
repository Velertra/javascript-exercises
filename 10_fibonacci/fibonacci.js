const fibonacci = function(element) {
    
    let a = 0;
    let b = 1;
    let nextTerm = 1
    
    if(typeof element === 'string'){
        element = Number(element)
        
      }

      if(typeof element === 'number' && element >= 0) {
    for(let i = 2; i <= element; i++) {
        nextTerm = a + b;
        a = b;
        b = nextTerm;
        
    }
    return nextTerm;
} else {
    return 'OOPS'
}

};

       /*
          if(typeof element === 'string'){
        element = Number(element)
      }
 
        }
    } else if(typeof element === 'number') {
            for(let i = 1; i <= element; i++) {
                nextTerm = a + b;
                a = b;
                b = nextTerm;
                return nextTerm
        }
        } else {
            return "OOPS"
    */   
   
    


// Do not edit below this line
module.exports = fibonacci;
