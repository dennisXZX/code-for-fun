// get the DOM elements
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    // get the current Date - Wed Apr 05 2017 21:37:08 GMT+1000 (AEST)
    const now = new Date();
    const seconds = now.getSeconds();
    // calculate and degree and offsets 90 degrees
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const mins = now.getMinutes();
    const minuteDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// call setDate function every one second
setInterval(setDate, 1000);