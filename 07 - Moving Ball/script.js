// get the DOM elements
const balls = document.getElementsByClassName('ball');

// since balls is a node list, the forEach function cannot be applied on it
// so we use call() method to do the trick
Array.prototype.forEach.call(balls, (ball) => {
  document.addEventListener('click', (event) => {
    const randomOffset = Math.floor(Math.random() * 300);
    ball.style.transform = 'translateY(' + (event.clientY - randomOffset)+ 'px)';
    ball.style.transform += 'translateX(' + (event.clientX - randomOffset)+ 'px)';
  }, false);
}, this);





