const expObj = require('./multiply-exports');
const { myName, myFavoriteNumber, myHobbies } = expObj;
const greeteing = require('./single-export');
const { myName: myOtherName, myFriend } = require('./export-and-import');

console.log(myName);
console.log(myFavoriteNumber);
console.log(myHobbies);

greeteing(myName);

console.log(myOtherName);
console.log(myFriend);