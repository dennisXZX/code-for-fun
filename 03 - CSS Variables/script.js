// retrieve all the input DOM elements
const inputs = document.querySelectorAll('.controls input');
// define a function property to control event trigger
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

// iterate through all input elements and register event listeners for them
inputs.forEach((input) => {
    input.addEventListener('mousedown', () => {
        handleUpdate.flag = true;
        handleUpdate(input);
    });
    input.addEventListener('change', () => {
        handleUpdate.flag = true;
        handleUpdate(input);
    });
    input.addEventListener('mouseup', () => {
        handleUpdate.flag = false;
        handleUpdate(input);
    });
});