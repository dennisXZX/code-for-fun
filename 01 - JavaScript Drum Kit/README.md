### Key Points

1. Use the keyCode property from keydown event to detect which key is pressed. You can use [this website]( http://keycode.info/ ) to check ASCII code.

2. A custom-made 'data-key' property is placed in \<div\> and \<audio\> so we can retreive the node element by using attribute selector as below.
```
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
```
3. We use `audio.currentTime` property to reset the audio.
```
audio.currentTime = 0;
audio.play();
```
4. We monitor the `transitionened` event so when it is triggered we remove the CSS style from the specific node element.
```
keys.forEach(key => 
    key.addEventListener('transitionend', removeTransition)
);

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    // remove the playing CSS class from the element node
    e.target.classList.remove('playing');
}
```
5. We use the condition check `if (e.propertyName !== 'transform')` because many transitions would happen at the same time (`box-shadow`, `transform`, `border-color`), but we just want to deal with `transform` here.
