### Key Points

1. CSS animation

First, you need to configure your animation

```
p {
  animation-duration: 3s;
  animation-name: slidein;
	/* more animation config */
}
```

After the configuration, you need to set up a set of `@keyframes at-rule` for your animation.

```
/* slidein is the name you defined in animation-name property */
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

2. CSS transition

First, define what properties you would like to apply the trasitions.

```
.box {
    width: 100px;
    height: 100px;
    background-color: #0000FF;
    -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
}
```

Then you define the properties in the hover pseudo class.

```
.box:hover {
    background-color: #FFCCCC;
    width: 200px;
    height: 200px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
```