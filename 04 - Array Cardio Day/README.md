### Key Points

1. Array.prototype.reduce() is a powerful and flexible method. 

```
arr.reduce(callback, [initialValue])
```

The callback takes four parameters (accumulator, currentValue, currentIndex and array). The accumulator and currentValue parameters are a bit tricky as their values vary depending on whether an initialValue is present. The first time the callback is called, accumulator and currentValue can be one of two values. If initialValue is provided in the call to reduce, then accumulator will be equal to initialValue, and currentValue will be equal to the first value in the array. If no initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.

Examine the excerise 8 in the code to understand how reduce works. 
```
// pass an empty object as an accumulator
const transportation = data.reduce((obj, item) => {
  // initialize the key if it's not in the obj
  if (!obj[item]) {
    obj[item] = 0;
  }
  // increate the key by one
  obj[item] += 1;
  return obj;
}, {});
```

2. document.querySelector and document.querySelectorAll return a nodeList, which is not a real array. Therefore, you cannot call map() function on it.

There are two ways to convert the nodeList into an array.
```
// use Array.from
const links = Array.from(category.querySelectorAll('a'));

// use spread operator
const links = [...category.querySelectorAll('a')];
```
