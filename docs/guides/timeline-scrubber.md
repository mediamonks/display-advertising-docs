---
sidebar_position: 14
---

# Timeline Scrubber

Previously, we had to use the GSDevTools bonus plugin of GreenSock to get a timeline scrubber so you would be able to scroll through your gsap timeline.
This is a paid service, and we cannot share this officially since it is part of our paid GSAP account. Therefore, I made a simple
timeline scrubber that basically does the same but with free and custom code.

### Configuration

To use the timelineScrubber you need to import it in for example Banner.js and initialize it after creating your master GSAP timeline:
```js title="Banner.js" {}
import timelineScrubber from '@mediamonks/display-temple/util/timelineScrubber';

setAnimation(animation){
    this.animation = animation;
    //creates new timeline and pauses it
    this.animation.getTimeline().paused(true);
    // this.animation.getTimeline().eventCallback('onComplete', this.handleAnimationComplete);

    if (DEVELOPMENT) {
        timelineScrubber(this.animation.getTimeline());
    }
}
```

### Hotkeys
Just as with GSDevTools, if you have your scrubber element "in focus" (you can do this by clicking on the timelineScrubber for example), you can use shortcuts
to play pause and hide/show the Timeline Scrubber.

#### Hide/show timeline scrubber element
You can **H**ide or show the timeline by pressing the letter `H` on your keyboard.

#### Play/pause timeline
Toggle play or pause by pressing the `Spacebar`.

