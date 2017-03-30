// register keydown listener
window.addEventListener('keydown', playSound);

function playSound(e) {
    // select the element that matches the keypress    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // stop the function if there is no match    
    if (!audio) return;  

    // select the element that needs to be animated
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // add the playing CSS class
    key.classList.add('playing');
    // reset the audio play time  
    audio.currentTime = 0;
    audio.play();
}

// select all elements that need to be monitored for animation transition end event
const keys = Array.from(document.querySelectorAll('.key'));
// add an event handler to each element node
keys.forEach(key => 
    key.addEventListener('transitionend', removeTransition)
);

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    // remove the playing CSS class from the element node
    e.target.classList.remove('playing');
}