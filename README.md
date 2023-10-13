This is a creative project to mimic the action of throwing down cards on a table, using Javascript and GSAP, with Create-react-app.

While working on this project I learned about:

* GSAP methods `timeline()`, `gsap.utils.toArray()`,`to()`, `add()` and `reverse()`
* Animation timing, duration and ease
* React hook `useRef`
* Javascript `reduce()` and `getBoundingClientRect()`, `scrollTop` and `offsetHeight`

The `master` branch just contains the simple animation. There is also a `height-adjusted` branch that contains an experiment to fix the page height to ensure the cards don't slide off the top and out of site, but this currently has some bugs.