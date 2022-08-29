const findTheOldest = function(array) {
    
    let newer = new Date().getFullYear();
    let thisAry = array.filter(x => x.yearOfDeath === undefined ? x.yearOfDeath = newer: true);
 
    let newnew = thisAry.sort((a, b) => a.yearOfDeath - a.yearOfBirth >
        b.yearOfDeath - b.yearOfBirth ? -1 : 1 )
       return newnew[0];


};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
