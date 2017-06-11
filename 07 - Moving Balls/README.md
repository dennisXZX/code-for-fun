### Key Points

1. Array-like node list

const balls = document.getElementsByClassName('ball');

The variable balls is now a array-like node list which does not have methods associated with an array.

For example, if you want to use the `forEach()` method, you would need to use the `Array.prototype.forEach.call()` to "borrow" the method from the Array prototype.