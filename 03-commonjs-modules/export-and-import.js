const { myName } = require('./multiply-exports');

const myFriend = 'Alice';

module.exports.myName = myName;
module.exports.myFriend = myFriend;