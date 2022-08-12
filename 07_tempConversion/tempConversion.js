const ftoc = function(fahr) {
  let finalNum = 0;
   let newFtoc = (fahr - 32) * (5/9);
  
  
  if(Math.round(newFtoc) !== newFtoc) {
    newFtoc = newFtoc.toFixed(1);
    }


  finalSum = Number(newFtoc);
    return finalSum;

};

const ctof = function(ctof) {
  let finalNum = 0;
   let newFtoc = (ctof * 9/5 );
  let newNew = newFtoc + 32;
   if(Math.round(newNew) !== newNew) {
    newNew = newNew.toFixed(1); 
    
  }
  
  finalSum = Number(newNew);
    return finalSum;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
