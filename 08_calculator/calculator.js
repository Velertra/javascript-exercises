const add = function(a, b) {
  value = a + b;
  return value;
	
};

const subtract = function(a, b) {
    value = a - b; 
    return value;
	
};

const sum = function(array) { 
  let sumers = 0;

  for (let i = 0; i < array.length; i += 1)
    sumers += array[i];

    return sumers
};



const multiply = function(array) {
  let finish = array.reduce((a,b) => a * b, 1);
  return finish;
};

const power = function(a, b ) {
	let finish = a ** b;
  return finish 
  
};

const factorial = function(element) {
  let finish = [];
  
  for(let i = 1; i <= element; i++) {
    finish.push(i);


  }
return finish.reduce((a, b) => a * b, 1);

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
