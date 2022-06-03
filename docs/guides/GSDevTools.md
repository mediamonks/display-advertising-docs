---
sidebar_position: 9
---

# Gsap

## Using events

Sometimes it is necessary to know when the animation starts and when it ends. It is possible to know that using the following callbacks:


```js title="/src/shared/script/Banner.js" {6,7}
setAnimation(animation){
    this.animation = animation;
    //creates new timeline and pauses it
    this.animation.getTimeline().paused(true);

    this.animation.getTimeline().eventCallback('onComplete', this.onAnimationComplete);
    this.animation.getTimeline().eventCallback('onStart', this.onAnimationStart);
}


/**
* A function that should be called when the animation has completed.
*/
onAnimationComplete = () => {
    console.log('onComplete');
};

/**
* A function that should be called when the animation begins (when its time changes from 0 
* to some other value which can happen more than once if the tween is restarted multiple times).
 */
onAnimationStart = () => {
    console.log('onStart');
};
```




## Enable GSDevTools

Put in your preview url for debugging:

```terminal
gsdevtools=true
```

![Scaffold1](/img/gsdevtools.png)

Simultaneously play/pausing your animations by pressing the ‘Spacebar’. Use the newest Display Boilerplate (6.4.9) in order for it to work.

:::caution
Only use it for QA and testing purposes, not meant to be for sharing with the client!
:::



## Using utils

`gsap.utils` provides access to some surprisingly helpful utility functions. Note that many of them can optionally return FUNCTIONS so that they can be plugged directly into tweens, leveraging GSAP's function-based capabilities. In that case, they'll get called once for each target rather than just using the same end value for them all.

To view the full list, please [check the official docs](https://greensock.com/docs/v3/GSAP/gsap.utils).
