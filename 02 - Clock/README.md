### Key Points

1. CSS properties `transition` and `transform` are used to create the animation effects.

2. Calculate the degree of hour, minite and second hands by leveraging the current time. 90 degree is added to offset the default position.
```
const secondDegrees = ((seconds / 60) * 360) + 90;
const minuteDegrees = ((mins / 60) * 360) + 90;
const hourDegrees = ((hour / 12) * 360) + 90;
```
3. Use `style` property to set the inline style of an element.
```
secondHand.style.transform = `rotate(${secondDegrees}deg)`;
```