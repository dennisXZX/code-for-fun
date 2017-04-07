// retrieve all the input DOM elements
const inputs = document.querySelectorAll('.controls input');
// set a flag to control event trigger
let flag = false;

function handleUpdate(input){
    if(flag) {
        // retrieve the suffix from data property
        const suffix = input.dataset.sizing || '';
        // update the CSS variables
        // document.documentElement returns root element of the document
        document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix);
    }
}

// iterate through all input elements and register event listeners for them
inputs.forEach((input) => {
    input.addEventListener('mousedown', () => {
        flag = true;
        handleUpdate(input);
    });
    input.addEventListener('change', () => {
        flag = true;
        handleUpdate(input);
    });
    input.addEventListener('mouseup', () => {
        flag = false;
        handleUpdate(input);
    });
});