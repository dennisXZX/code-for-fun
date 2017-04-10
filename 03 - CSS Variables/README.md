### Key Points

1. HTML data attribute can be used to store some extra info on an element.
```
<input id="blur" type="range" name="blur" min="0" max="25" value="0" data-sizing="px">
```
The data-sizing attribute can be retrieved by
```
document.getElementById('blur').dataset.sizing; // px
```
2. CSS variables declaration
```
:root {
    --base: #ffc600;
    --spacing: 10px;
    --blur: 0px;
}
```
You can use these variable by using var() function.
```
img {
    padding: var(--spacing);
    background: var(--base);
    filter: blur(var(--blur));
}
```
3. If you need to do pass parameters or do other stuff in addEventListener callback function, you can wrap it in an anonymous function.
```
input.addEventListener('mousedown', () => { // wrap it in an anonymous function
    flag = true;
    handleUpdate(input);
});
```
4. Use a function property as a flag to keep track of event triggering
```
// a function property is created to control event triggering
handleUpdate.flag = false;

function handleUpdate(input){
    if(handleUpdate.flag) {
        // retrieve the suffix from data property
        const suffix = input.dataset.sizing || '';
        // update the CSS variables
        // document.documentElement returns root element of the document
        document.documentElement.style.setProperty(`--${input.name}`, `${input.value}${suffix}`);
    }
}
```
