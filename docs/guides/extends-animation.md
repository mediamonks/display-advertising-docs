---
sidebar_position: 8
---

# Extends Animation

Sometimes it may happen that we need to modify the animation of a certain frame, but we don't want to add conditionals or duplicate the main `Animation.js` only to change a few lines. For those cases it is recommended to create a child `Animation.js`.

This is the main Animation (shared) for all the units:

```js title="/src/shared/script/Animation.js" {1,5}
import FrameAnimation from "@mediamonks/temple/animation/FrameAnimation";
import {CustomEase} from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

export default class Animation extends FrameAnimation {
  /**
   *
   * @param {HTMLDivElement} container
   * @param {null} config
   */
  constructor(container, config) {
    super();
    this.container = container;
    this.config = config;
  }

  /**
   *
   * @param {gsap.core.Timeline} tl
   */

  frame1(tl) {
    tl.to('.content', {duration:1, opacity: 1})
    tl.addLabel('frame1')
    tl.from('.copy1', {duration: 0.6, y:5, opacity: 0, ease: "power1.inOut"},'frame1+=0.5')
  }

  frame2(tl) {
    tl.addLabel('frame2','frame1+=2.5')
    tl.from('.copy2', {y:100, opacity: 0, ease: "power1.inOut"},'frame2+=0.5')
  }
}
```

And here do you have the child with and extra frame, but keeps all the previous frames:

```js title="/src/300x250/script/Animation.js" {1,3}
import SharedAnim from "../../shared/script/Animation";

export default class Animation extends SharedAnim {
    frame1(tl) {
        // new stuff to replace the SharedAnim inside frame1
    }

    frame3(tl) {
        // Also add an extra frame just for this size!
        tl.addLabel('frame3')
        tl.from('.captain1', {duration: 0.5, x: -100, opacity: 0, ease: "power1.inOut"},'frame1-=0.5')
    }
}

```